import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../core/app/hooks'
import { AuthenticatedNavigation } from '../../components/authentication/AuthenticatedNavigation'
import { routes } from '../../navigation/Router'

function AuthenticatedLayout() {
  const navigate = useNavigate()

  const { online } = useAppSelector((state) => ({
    ...state.auth,
  }))

  useEffect(() => {
    if (!online) {
      navigate(routes.login)
    }
  }, [online])

  return (
    <div>
      <Outlet />
      <AuthenticatedNavigation />
    </div>
  )
}

export default AuthenticatedLayout
