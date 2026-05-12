import {
  AuthenticationMethod,
  AuthenticationProcessTelecomType,
  CaptchaOptions,
  CardinalApis,
  CardinalSdk,
  CryptoStrategies,
  KeypairFingerprintV1String,
  KeyPairRecoverer,
  RecoveryDataKey,
  RecoveryKeyOptions,
  RecoveryKeySize,
  Solution,
  spkiHexKeyToFingerprintV1,
  StorageFacade,
  User,
  XCryptoService,
  XRsaKeypair,
} from '@icure/cardinal-sdk'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { MSG_GW_URL, NIGHTLY_ICURE_CLOUD_URL, PROCESS_ID, SPEC_ID } from '../../constants'

import { revertAll, setSavedCredentials } from '../app'
import { store } from '../store'
import { requestKeyRecovery } from './keyRecoveryBridge'

const apiCache: { [key: string]: CardinalSdk } = {}

export type RecoveryKeyScope = 'self-and-parents' | 'parents-only'

export const formatRecoveryKey = (key: RecoveryDataKey): string =>
  key
    .asBase32()
    .match(/.{1,4}/g)
    ?.join('-') ?? key.asBase32()

export const generateRecoveryKeyForCurrentUser = async (sdk: CardinalSdk, scope: RecoveryKeyScope): Promise<string> => {
  const recoveryKeyOptions = new RecoveryKeyOptions.Generate({ recoveryKeySize: RecoveryKeySize.Bytes32 })
  if (scope === 'parents-only') {
    const ids = await sdk.dataOwner.getCurrentDataOwnerHierarchyIds()
    const parentId = ids.length >= 2 ? ids[ids.length - 2] : undefined
    if (!parentId) throw new Error('No parent organisation is associated with this user.')
    return formatRecoveryKey(await sdk.recovery.createRecoveryInfoForAvailableParentKeyPairs(parentId, { includeAncestorKeys: false, recoveryKeyOptions }))
  }
  return formatRecoveryKey(await sdk.recovery.createRecoveryInfoForAvailableKeyPairs({ includeParentsKeys: true, recoveryKeyOptions }))
}

export class PetraCareCryptoStrategies extends CryptoStrategies {
  async notifyNewKeyCreated(sdk: CardinalApis): Promise<void> {
    const recoveryKey = await sdk.recovery.createRecoveryInfoForAvailableKeyPairs({
      includeParentsKeys: true,
      recoveryKeyOptions: new RecoveryKeyOptions.Generate({ recoveryKeySize: RecoveryKeySize.Bytes32 }),
    })
    store.dispatch(setNewlyCreatedRecoveryKey({ recoveryKey: formatRecoveryKey(recoveryKey) }))
  }

  async recoverAndVerifySelfHierarchyKeys(
    keysData: Array<CryptoStrategies.KeyDataRecoveryRequest>,
    cryptoPrimitives: XCryptoService,
    keyPairRecoverer: KeyPairRecoverer,
  ): Promise<{ [dataOwnerId: string]: CryptoStrategies.RecoveredKeyData }> {
    const empty = this.buildRecoveryResult(keysData, {})

    const stillMissing = keysData.some((kd) => kd.unavailableKeys.length > 0)
    if (!stillMissing) return empty

    const outcome = await requestKeyRecovery({
      reasons: keysData.flatMap((kd) => kd.unavailableKeys.map((k) => k.publicKey.slice(0, 16))),
      keysData,
      cryptoPrimitives,
      keyPairRecoverer,
    })
    if (outcome.kind === 'cancel') return empty

    return this.buildRecoveryResult(keysData, outcome.keys)
  }

  private buildRecoveryResult(
    keysData: Array<CryptoStrategies.KeyDataRecoveryRequest>,
    aggregate: { [dataOwnerId: string]: { [keyRef: string]: XRsaKeypair } },
  ): { [dataOwnerId: string]: CryptoStrategies.RecoveredKeyData } {
    const result: { [dataOwnerId: string]: CryptoStrategies.RecoveredKeyData } = {}
    for (const recoveryRequest of keysData) {
      const dataOwnerId = recoveryRequest.dataOwnerDetails.dataOwner.id
      const perOwnerRecovered = aggregate[dataOwnerId]

      const recoveredForThisOwner: { [fp: KeypairFingerprintV1String]: XRsaKeypair } = {}
      if (perOwnerRecovered) {
        for (const unavailable of recoveryRequest.unavailableKeys) {
          const fp = spkiHexKeyToFingerprintV1(unavailable.publicKey) as KeypairFingerprintV1String
          const recoveredKey = perOwnerRecovered[fp] ?? perOwnerRecovered[unavailable.publicKey]
          if (recoveredKey) {
            recoveredForThisOwner[fp] = recoveredKey
          }
        }
      }

      result[dataOwnerId] = {
        recoveredKeys: recoveredForThisOwner,
        keyAuthenticity: {},
      }
    }
    return result
  }
}

export interface CardinalApiState {
  ehealthCertificatePassword?: string
  email?: string
  token?: string
  user?: User
  keyPair?: { publicKey: string; privateKey: string }
  authProcess?: CardinalSdk.AuthenticationWithProcessStep
  online: boolean
  invalidEmail: boolean
  invalidToken: boolean
  waitingForToken: boolean
  firstName?: string
  lastName?: string
  dateOfBirth?: number
  mobilePhone?: string
  loginProcessStarted: boolean
  newlyCreatedRecoveryKey?: string
}

const cardinalApiInitialState: CardinalApiState = {
  email: undefined,
  token: undefined,
  user: undefined,
  keyPair: undefined,
  authProcess: undefined,
  online: false,
  invalidEmail: false,
  invalidToken: false,
  waitingForToken: false,
  firstName: undefined,
  lastName: undefined,
  dateOfBirth: undefined,
  mobilePhone: undefined,
  loginProcessStarted: false,
  newlyCreatedRecoveryKey: undefined,
}

function getError(e: Error): FetchBaseQueryError {
  return { status: 'CUSTOM_ERROR', error: e.message, data: e }
}

export async function guard<T, A, B, C, D, E, F = undefined>(
  guardedInputs: [A?, B?, C?, D?, E?],
  lambda: (constrainedInputs: [A, B, C, D, E]) => Promise<T>,
  fallback: F = undefined as F,
): Promise<{ error: FetchBaseQueryError } | { data: T | F }> {
  if (guardedInputs.some((x) => !x)) {
    return { data: fallback }
  }
  try {
    const res = await lambda(guardedInputs as [A, B, C, D, E])
    const curate = (result: T): T => {
      if (result === null || result === undefined) {
        return null as T
      } else if (Array.isArray(result)) {
        return result.map(curate) as T
      } else {
        return result as T
      }
    }
    return { data: curate(res) }
  } catch (e) {
    console.error(e)
    return { error: getError(e as Error) }
  }
}

export const getApiFromState = async (getState: () => CardinalApiState | { cardinalApi: CardinalApiState } | undefined): Promise<CardinalSdk | undefined> => {
  const state = getState()
  if (!state) {
    throw new Error('No state found')
  }

  const initialState = 'cardinalApi' in state ? state.cardinalApi : state
  const { user } = initialState

  if (!user) {
    return undefined
  }

  return apiCache[`${user.groupId}/${user.id}`] as CardinalSdk
}

export const cardinalApi = async (getState: () => unknown) => {
  const state = getState() as { cardinalApi: CardinalApiState }
  return await getApiFromState(() => state)
}

export const startAuthentication = createAsyncThunk(
  'cardinalApi/startAuthentication',
  async (
    _payload: {
      captchaToken: Solution
    },
    { getState, dispatch },
  ) => {
    const {
      cardinalApi: { email, firstName, lastName },
    } = getState() as { cardinalApi: CardinalApiState }
    dispatch(setLoginProcessStarted(true))

    if (!email) {
      throw new Error('The email was not found')
    }

    try {
      const authenticationStep = await CardinalSdk.initializeWithProcess(
        undefined,
        NIGHTLY_ICURE_CLOUD_URL,
        MSG_GW_URL,
        SPEC_ID!,
        PROCESS_ID!,
        AuthenticationProcessTelecomType.Email,
        email,
        new CaptchaOptions.Kerberus.Computed({ solution: _payload.captchaToken }),
        StorageFacade.usingBrowserLocalStorage(),
        { firstName, lastName },
        {
          useHierarchicalDataOwners: false,
          cryptoStrategies: new PetraCareCryptoStrategies(),
        },
      )

      dispatch(setLoginProcessStarted(false))
      return authenticationStep
    } catch (e) {
      console.error(`Couldn't start authentication: ${e}`)
    } finally {
      dispatch(setLoginProcessStarted(false))
    }
  },
)

export const completeAuthentication = createAsyncThunk('cardinalApi/completeAuthentication', async (_payload, { getState, dispatch }) => {
  const {
    cardinalApi: { authProcess, token },
  } = getState() as { cardinalApi: CardinalApiState }
  dispatch(setLoginProcessStarted(true))

  if (!authProcess) {
    dispatch(setLoginProcessStarted(false))
    throw new Error('No authProcess provided')
  }

  if (!token) {
    dispatch(setLoginProcessStarted(false))
    throw new Error('No token provided')
  }
  try {
    const api = await authProcess.completeAuthentication(token)
    const user = await api.user.getCurrentUser()
    const newToken = await api.user.getToken(user.id, 'rememberMe')

    apiCache[`${user.groupId}/${user.id}`] = api

    dispatch(
      setSavedCredentials({
        login: `${user.groupId}/${user.id}`,
        token: newToken,
        tokenTimestamp: +Date.now(),
      }),
    )
    return new User(user)
  } catch (e) {
    console.error(`Couldn't complete authentication: ${e}`)
    throw e
  } finally {
    dispatch(setLoginProcessStarted(false))
  }
})

export const login = createAsyncThunk('cardinalApi/login', async (_, { getState, dispatch }) => {
  const {
    cardinalApi: { email, token },
  } = getState() as { cardinalApi: CardinalApiState }
  dispatch(setLoginProcessStarted(true))

  if (!email) {
    dispatch(setLoginProcessStarted(false))
    throw new Error('No email provided')
  }

  if (!token) {
    dispatch(setLoginProcessStarted(false))
    throw new Error('No token provided')
  }

  try {
    const api = await CardinalSdk.initialize(
      undefined,
      NIGHTLY_ICURE_CLOUD_URL,
      new AuthenticationMethod.UsingCredentials.UsernamePassword(email, token),
      StorageFacade.usingBrowserLocalStorage(),
      {
        useHierarchicalDataOwners: false,
        cryptoStrategies: new PetraCareCryptoStrategies(),
      },
    )

    const user = await api.user.getCurrentUser()

    apiCache[`${user.groupId}/${user.id}`] = api

    return new User(user)
  } catch (e) {
    console.error(`Couldn't login: ${e}`)
    dispatch(revertAll())
    dispatch(resetCredentials())
  } finally {
    dispatch(setLoginProcessStarted(false))
  }
})

export const logout = createAsyncThunk('cardinalApi/logout', async (_payload, { dispatch }) => {
  dispatch(revertAll())
  dispatch(resetCredentials())
})

export const cardinalApiRtk = createSlice({
  name: 'cardinalApi',
  initialState: cardinalApiInitialState,
  reducers: {
    setNewlyCreatedRecoveryKey: (state, { payload: { recoveryKey } }: PayloadAction<{ recoveryKey: string | undefined }>) => {
      state.newlyCreatedRecoveryKey = recoveryKey
    },
    setRegistrationInformation: (
      state,
      {
        payload: { firstName, lastName, email },
      }: PayloadAction<{
        firstName: string
        lastName: string
        email: string
      }>,
    ) => {
      state.firstName = firstName
      state.lastName = lastName
      state.email = email
    },
    setToken: (state, { payload: { token } }: PayloadAction<{ token: string }>) => {
      state.token = token
      state.invalidToken = false
    },
    setEmail: (state, { payload: { email } }: PayloadAction<{ email: string }>) => {
      state.email = email
      state.invalidEmail = false
    },
    setEhealthCertificatePassword: (state, { payload: { password } }: PayloadAction<{ password?: string }>) => {
      state.ehealthCertificatePassword = password
    },
    setUser: (state, { payload: { user } }: PayloadAction<{ user: User }>) => {
      state.user = user
      state.online = !!user
    },
    resetCredentials: (state) => {
      state.online = false
    },
    setLoginProcessStarted(state, { payload: status }: PayloadAction<boolean>) {
      state.loginProcessStarted = status
    },
    setWaitingForToken(state, { payload: status }: PayloadAction<boolean>) {
      state.waitingForToken = status
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startAuthentication.fulfilled, (state, { payload: authProcess }) => {
      state.authProcess = authProcess
      state.waitingForToken = true
    })
    builder.addCase(startAuthentication.rejected, (state) => {
      state.invalidEmail = true
    })
    builder.addCase(completeAuthentication.fulfilled, (state, { payload: user }) => {
      state.user = user as User
      state.online = !!user
      state.waitingForToken = false
    })
    builder.addCase(completeAuthentication.rejected, (state) => {
      state.invalidToken = true
    })
    builder.addCase(login.fulfilled, (state, { payload: user }) => {
      state.user = user as User
      state.online = !!user
    })
    builder.addCase(login.rejected, (state) => {
      state.invalidToken = true
      state.online = false
    })
  },
})

export const {
  setNewlyCreatedRecoveryKey,
  setRegistrationInformation,
  setToken,
  setEmail,
  setEhealthCertificatePassword,
  resetCredentials,
  setLoginProcessStarted,
  setWaitingForToken,
} = cardinalApiRtk.actions
