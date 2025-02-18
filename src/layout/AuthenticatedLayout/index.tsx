import { createSelector } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../core/hooks'
import { CardinalApiState } from '../../core/services/auth.api'
import { routes } from '../../navigation/Router'

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    online: cardinalApi.online,
    cardinalApi: cardinalApi,
  }),
)

function AuthenticatedLayout() {
  const navigate = useNavigate()

  const { online, cardinalApi } = useAppSelector(reduxSelector)

  console.log('online:' + ' ' + online)

  console.log('cardinalApi')
  console.log(cardinalApi)

  useEffect(() => {
    if (!online) {
      navigate(routes.login)
    }
  }, [online])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthenticatedLayout
