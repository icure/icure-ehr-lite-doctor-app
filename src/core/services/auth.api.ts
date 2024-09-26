import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import {
  AuthenticationMethod,
  AuthenticationProcessCaptchaType,
  AuthenticationProcessTelecomType,
  CardinalSdk,
  StorageFacade,
  User,
  AuthenticationProcessTemplateParameters,
} from '@icure/cardinal-sdk'

import { revertAll, setSavedCredentials } from '../app'

const apiCache: { [key: string]: CardinalSdk } = {}

export interface EHRLiteApiState {
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
}

const initialState: EHRLiteApiState = {
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
}

function getError(e: Error): FetchBaseQueryError {
  return { status: 'CUSTOM_ERROR', error: e.message, data: undefined }
}

export const guard = async <T>(guardedInputs: unknown[], lambda: () => Promise<T>): Promise<{ error: FetchBaseQueryError } | { data: T | undefined }> => {
  if (guardedInputs.some((x) => !x)) {
    return { data: undefined }
  }
  try {
    const res = await lambda()
    const curate = (result: T): T => {
      if (result === null || result === undefined) {
        return null as T
      } else if (res instanceof ArrayBuffer) {
        // return ua2b64(res) as T
        throw new Error('The type of the result is ArrayBuffer but ua2b64 is not yet available')
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

export const getApiFromState = async (getState: () => EHRLiteApiState | { ehrLiteApi: EHRLiteApiState } | undefined): Promise<CardinalSdk | undefined> => {
  const state = getState()
  if (!state) {
    throw new Error('No state found')
  }

  const initialState = 'ehrLiteApi' in state ? state.ehrLiteApi : state
  const { user } = initialState

  if (!user) {
    return undefined
  }

  const cachedApi = apiCache[`${user.groupId}/${user.id}`] as CardinalSdk

  return cachedApi
}

export const ehrLiteApi = async (getState: () => unknown) => {
  const state = getState() as { ehrLiteApi: EHRLiteApiState }
  return await getApiFromState(() => state)
}

export const startAuthentication = createAsyncThunk(
  'ehrLiteApi/startAuthentication',
  async (
    _payload: {
      captchaToken: string
    },
    { getState, dispatch },
  ) => {
    const {
      ehrLiteApi: { email, firstName, lastName },
    } = getState() as { ehrLiteApi: EHRLiteApiState }
    dispatch(setLoginProcessStarted(true))

    if (!email) {
      throw new Error('The email was not found')
    }

    try {
      const authenticationStep = await CardinalSdk.initializeWithProcess(
        undefined,
        'https://api.icure.cloud',
        'https://msg-gw.icure.cloud',
        process.env.REACT_APP_EXTERNAL_SERVICES_SPEC_ID!,
        process.env.REACT_APP_EMAIL_AUTHENTICATION_PROCESS_ID!,
        AuthenticationProcessTelecomType.Email,
        email,
        AuthenticationProcessCaptchaType.FriendlyCaptcha,
        _payload.captchaToken,
        StorageFacade.usingBrowserLocalStorage(),
        // Process template parameters are additional parameters which
        // may be used by the SMS/email template to the user.
        // If you are not using them in your template you can omit them.
        { firstName, lastName },
        undefined,
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

export const completeAuthentication = createAsyncThunk('ehrLiteApi/completeAuthentication', async (_payload, { getState, dispatch }) => {
  const {
    ehrLiteApi: { authProcess, token },
  } = getState() as { ehrLiteApi: EHRLiteApiState }
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
  } finally {
    dispatch(setLoginProcessStarted(false))
  }
})

export const login = createAsyncThunk('ehrLiteApi/login', async (_, { getState, dispatch }) => {
  const {
    ehrLiteApi: { email, token },
  } = getState() as { ehrLiteApi: EHRLiteApiState }
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
      'https://api.icure.cloud',
      new AuthenticationMethod.UsingCredentials.UsernamePassword(email, token),
      StorageFacade.usingBrowserLocalStorage(),
    )

    const user = await api.user.getCurrentUser()

    apiCache[`${user.groupId}/${user.id}`] = api

    return new User(user)
  } catch (e) {
    console.error(`Couldn't login: ${e}`)
  } finally {
    dispatch(setLoginProcessStarted(false))
  }
})

export const logout = createAsyncThunk('ehrLiteApi/logout', async (_payload, { dispatch }) => {
  dispatch(revertAll())
  dispatch(resetCredentials())
})

export const api = createSlice({
  name: 'ehrLiteApi',
  initialState,
  reducers: {
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
    setUser: (state, { payload: { user } }: PayloadAction<{ user: User }>) => {
      state.user = user
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
    builder.addCase(startAuthentication.rejected, (state, {}) => {
      state.invalidEmail = true
    })
    builder.addCase(completeAuthentication.fulfilled, (state, { payload: user }) => {
      state.user = user as User
      state.online = true
      state.waitingForToken = false
    })
    builder.addCase(completeAuthentication.rejected, (state, {}) => {
      state.invalidToken = true
    })
    builder.addCase(login.fulfilled, (state, { payload: user }) => {
      state.user = user as User
      state.online = true
    })
    builder.addCase(login.rejected, (state, {}) => {
      state.invalidToken = true
      state.online = false
    })
  },
})

export const { setRegistrationInformation, setToken, setEmail, resetCredentials, setLoginProcessStarted, setWaitingForToken } = api.actions
