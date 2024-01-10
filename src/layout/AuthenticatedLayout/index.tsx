import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../core/hooks'
import { routes } from '../../navigation/Router'

function AuthenticatedLayout() {
  const navigate = useNavigate()

  const { online } = useAppSelector((state) => ({
    ...state.ehrLiteApi,
  }))

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
