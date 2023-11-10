import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Form, Checkbox } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../core/app/hooks'
import { routes } from '../../../navigation/Router'
import FriendlyCaptcha from '../FriendlyCaptcha'
import { startAuthentication } from '../../../services/auth.api'
import { SpinLoader } from '../../SpinLoader'

interface SignupFormProps {
  callback: (firstName: string, lastName: string, email: string) => void
  validationCallback: (email: string, validationCode: string) => void
}

const SignupForm: React.FC<SignupFormProps> = ({ callback, validationCallback }) => {
  const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined)
  const dispatch = useAppDispatch()
  const doneCallback = (solution: string) => {
    setCaptchaToken(solution)
  }

  const { waitingForToken, loginProcessStarted } = useAppSelector((state) => ({
    ...state.auth,
  }))

  const handleSubmit = (values: { firstName: string; lastName: string; email: string; validationCode: string }) => {
    const { firstName, lastName, email, validationCode } = values
    if (waitingForToken) {
      validationCallback(email, validationCode)
    } else {
      callback(firstName, lastName, email)
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
          <h2>Registration</h2>
        </div>
        <div className="auth-form__inputs">
          <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'First Name is required' }]}>
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Last Name is required' }]}>
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email is required' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          {waitingForToken && (
            <Form.Item name="validationCode" label="Validation Code" rules={[{ required: true, message: 'Validation Code is required' }]}>
              <Input placeholder="Validation Code" />
            </Form.Item>
          )}
        </div>
        <Form.Item
          name="termsOfUse"
          valuePropName="checked"
          key="termsOfUse"
          className="w-100 checkbox-item"
          rules={[
            {
              required: true,
              validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Before registering, please read and accept our terms of use and privacy policy'))),
            },
          ]}
        >
          <Checkbox>
            <div className="auth-form__textHelper">
              <p>
                I have read and agree with{' '}
                <Link className="link" to="#">
                  Terms of use
                </Link>{' '}
                &{' '}
                <Link className="link" to="#">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </Checkbox>
        </Form.Item>
        <Button type="primary" size="large" htmlType="submit">
          {waitingForToken ? 'Register' : 'Receive a one time code'}
        </Button>
        <div className="auth-form__textHelper">
          <p>
            Already have an account?{' '}
            <Link className="link" to={routes.login}>
              Log in
            </Link>
          </p>
        </div>
        <FriendlyCaptcha successCallback={doneCallback} />
      </Form>
    </>
  )
}

export default SignupForm
