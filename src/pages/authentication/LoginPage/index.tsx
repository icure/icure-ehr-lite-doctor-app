import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../core/hooks'
import LoginForm from '../../../components/authentication/LoginForm'
import { completeAuthentication, setEmail, setToken, setWaitingForToken } from '../../../core/services/auth.api'

import logo from '../../../assets/logo_vertical.svg'
import '../index.css'

export default function LoginPage() {
  const dispatch = useAppDispatch()

  const handleSubmitLogin = (email: string) => {
    dispatch(setEmail({ email: email }))
  }

  const handleSubmitValidation = (_email: string, validationCode: string) => {
    dispatch(setToken({ token: validationCode }))
    dispatch(completeAuthentication())
  }

  useEffect(() => {
    return () => {
      dispatch(setWaitingForToken(false))
    }
  }, [])

  return (
    <div className="auth-page">
      <div className="auth-page__logo">
        <img src={logo} alt="petra-care logo" />
      </div>

      <LoginForm
        callback={(email: string) => handleSubmitLogin(email)}
        validationCallback={(_email: string, validationCode: string) => handleSubmitValidation(_email, validationCode)}
      />
    </div>
  )
}
