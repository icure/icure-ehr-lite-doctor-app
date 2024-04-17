import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Form } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../core/hooks'
import { routes } from '../../../navigation/Router'
import FriendlyCaptcha from '../FriendlyCaptcha'
import { EHRLiteApiState, startAuthentication } from '../../../core/services/auth.api'

import '../index.css'
import { SpinLoader } from '../../SpinLoader'
import { createSelector } from '@reduxjs/toolkit'

interface LoginFormProps {
  callback: (email: string) => void
  validationCallback: (email: string, validationCode: string) => void
}

const reduxSelector = createSelector(
  (state: { ehrLiteApi: EHRLiteApiState }) => state.ehrLiteApi,
  (ehrLiteApi: EHRLiteApiState) => ({
    waitingForToken: ehrLiteApi.waitingForToken,
    loginProcessStarted: ehrLiteApi.loginProcessStarted,
  }),
)

const LoginForm: React.FC<LoginFormProps> = ({ callback, validationCallback }) => {
  const dispatch = useAppDispatch()
  const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined)

  const doneCallback = (solution: string) => {
    setCaptchaToken(solution)
  }

  const { waitingForToken, loginProcessStarted } = useAppSelector(reduxSelector)

  const handleSubmit = (values: { email: string; validationCode: string }) => {
    const { email, validationCode } = values

    if (email.length === 0) {
      return
    }

    if (waitingForToken) {
      if (validationCode.length === 0) {
        return
      }
      validationCallback(email, validationCode)
    } else {
      callback(email)
    }

    if (!!captchaToken) {
      dispatch(startAuthentication({ captchaToken: captchaToken }))
    }
  }

  return (
    <>
      {loginProcessStarted && <SpinLoader />}
      <Form onFinish={(values) => handleSubmit(values)} className="auth-form" layout="vertical">
        <div className="auth-form__title">
          <h2>Login</h2>
        </div>
        <div className="auth-form__inputs">
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email is required' }]}>
            <Input placeholder="Email" size="large" style={{ fontSize: 13 }} />
          </Form.Item>

          {waitingForToken && (
            <Form.Item name="validationCode" label="Validation Code" rules={[{ required: true, message: 'Validation code is required' }]}>
              <Input placeholder="Validation Code" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
          )}
        </div>
        <div className="auth-form__textHelper">
          <p>
            By login, you accept our{' '}
            <Link className="link" to="#">
              Terms of use
            </Link>{' '}
            and{' '}
            <Link className="link" to="#">
              Privacy policy
            </Link>
          </p>
        </div>
        <Button type="primary" size="large" htmlType="submit">
          {waitingForToken ? 'Log in' : 'Receive a one time code'}
        </Button>
        <div className="auth-form__textHelper">
          <p>
            Not registered yet?{' '}
            <Link className="link" to={routes.register}>
              Create an account
            </Link>
          </p>
        </div>

        <FriendlyCaptcha successCallback={doneCallback} />
      </Form>
    </>
  )
}

export default LoginForm
