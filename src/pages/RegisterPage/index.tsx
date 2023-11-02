import React, { useState } from 'react'
import { useAppDispatch } from '../../core/app/hooks'
import SignupForm from '../../components/SignupForm'
import { completeAuthentication, setRegistrationInformation, setToken, startAuthentication } from '../../services/auth.api'

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
    <>
      <h1>Register</h1>
      <SignupForm callback={handleSubmitSignup} validationCallback={handleSubmitValidation} />
    </>
  )
}
