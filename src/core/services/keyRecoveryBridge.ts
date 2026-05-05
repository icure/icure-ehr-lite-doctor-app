import { useSyncExternalStore } from 'react'

// External-store bridge between the Cardinal SDK's `recoverAndVerifySelfHierarchyKeys`
// callback and the React UI. Lives outside Redux on purpose:
//   - No need to serialize SDK handles (cryptoPrimitives, keyPairRecoverer) into Redux
//     just to surface them to a React component.
//   - The promise returned by `requestKeyRecovery` is naturally tied to a single prompt
//     session, so opening a new request implicitly cancels any stale one.
//   - Avoids the dispatch-then-`store.subscribe` race that the previous Redux-based
//     implementation suffered from.

export interface KeyRecoveryRequest {
  readonly reasons: string[]
}

export type KeyRecoveryOutcome = { kind: 'cancel' } | { kind: 'recovered'; recoveryKeys: string[] }

let currentRequest: KeyRecoveryRequest | undefined
let currentResolver: ((outcome: KeyRecoveryOutcome) => void) | undefined
const listeners = new Set<() => void>()

const emit = () => {
  for (const l of listeners) l()
}

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

const getCurrentRequest = (): KeyRecoveryRequest | undefined => currentRequest

export const requestKeyRecovery = (req: KeyRecoveryRequest): Promise<KeyRecoveryOutcome> => {
  // A previous request still pending means a stale login attempt — resolve it as
  // cancel so its awaiting strategy unblocks before we replace it.
  if (currentResolver) {
    const stale = currentResolver
    currentResolver = undefined
    stale({ kind: 'cancel' })
  }
  return new Promise<KeyRecoveryOutcome>((resolve) => {
    currentRequest = req
    currentResolver = resolve
    emit()
  })
}

export const resolveCurrentRequest = (outcome: KeyRecoveryOutcome): void => {
  const resolver = currentResolver
  currentRequest = undefined
  currentResolver = undefined
  emit()
  resolver?.(outcome)
}

export const useKeyRecoveryRequest = (): KeyRecoveryRequest | undefined => useSyncExternalStore(subscribe, getCurrentRequest, getCurrentRequest)
