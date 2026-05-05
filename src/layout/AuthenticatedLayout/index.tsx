import { createSelector } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../core/hooks'
import { CardinalApiState } from '../../core/services/auth.api'
import { routes } from '../../navigation/Router'
import { ModalRecoveryKey } from '../../components/authentication/ModalRecoveryKey'
import { ModalRecoveryKeyRequest } from '../../components/authentication/ModalRecoveryKeyRequest'

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    online: cardinalApi.online,
  }),
)

function AuthenticatedLayout() {
  const navigate = useNavigate()

  const { online } = useAppSelector(reduxSelector)

  useEffect(() => {
    if (!online) {
      navigate(routes.login)
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

export default AuthenticatedLayout
