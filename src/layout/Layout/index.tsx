import React, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../core/hooks'
import { routes } from '../../navigation/Router'
import { CardinalApiState, login, setEmail, setToken } from '../../core/services/auth.api'
import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../../core/app'
import { ModalRecoveryKey } from '../../components/authentication/ModalRecoveryKey'
import { ModalRecoveryKeyRequest } from '../../components/authentication/ModalRecoveryKeyRequest'

const selectRestApiData = (state: { cardinalApi: CardinalApiState }) => state.cardinalApi
const selectAppData = (state: { app: AppState }) => state.app

const combinedSelector = createSelector([selectRestApiData, selectAppData], (cardinalApi: CardinalApiState, app: AppState) => ({
  online: cardinalApi.online,
  lsUsername: app?.savedCredentials?.login,
  lsToken: app?.savedCredentials?.token,
}))

function Layout() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { online, lsUsername, lsToken } = useAppSelector(combinedSelector)

  // StrictMode runs effects twice (mount → cleanup → mount) in dev; without this guard
  // we'd kick off two `CardinalSdk.initialize(...)` calls in parallel and clobber the
  // apiCache / race the recovery-key callback. The ref persists across StrictMode's
  // double-invocation (same component instance) and is reset only on a real remount —
  // e.g. after logout when this Layout is mounted again.
  const silentLoginAttempted = useRef(false)

  useEffect(() => {
    if (silentLoginAttempted.current) return
    if (!lsUsername || !lsToken) return
    silentLoginAttempted.current = true
    dispatch(setEmail({ email: lsUsername }))
    dispatch(setToken({ token: lsToken }))
    dispatch(login())
  }, [lsUsername, lsToken, dispatch])

  useEffect(() => {
    if (online) {
      navigate(routes.home)
    }
  }, [online])

  return (
    <div>
      <Outlet />
      <ModalRecoveryKey />
      <ModalRecoveryKeyRequest />
    </div>
  )
}

export default Layout
