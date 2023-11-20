import React, { useState } from 'react'
import { useAppDispatch } from '../../../core/app/hooks'
import SignupForm from '../../../components/authentication/SignupForm'
import { completeAuthentication, setRegistrationInformation, setToken, startAuthentication } from '../../../services/auth.api'
import logo from '../../../assets/logo_vertical.svg'
import '../index.css'
export default function RegisterPage() {
  const dispatch = useAppDispatch()

  const handleSubmitSignup = (firstName: string, lastName: string, email: string) => {
    dispatch(setRegistrationInformation({ email: email, firstName: firstName, lastName: lastName }))
  }

  const handleSubmitValidation = (_email: string, validationCode: string) => {
    dispatch(setToken({ token: validationCode }))
    dispatch(completeAuthentication())
  }

  return (
    <div className="auth-page">
      <div className="auth-page__logo">
        <img src={logo} alt="petra-care logo" />
      </div>
      <SignupForm callback={handleSubmitSignup} validationCallback={handleSubmitValidation} />
    </div>
  )
}
