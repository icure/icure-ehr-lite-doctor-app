import React from 'react'
import { Form, Input } from 'antd'

import { CustomModal } from '../CustomModal'
import './index.css'

interface ModalPatientFormProps {
  mode: 'edit' | 'create'
  isVisible: boolean
  onClose: () => void
  onSubmit: (value: any) => void
  initialValue?: any
}

export const ModalPatientForm = ({ mode, isVisible, onClose, onSubmit, initialValue }: ModalPatientFormProps): JSX.Element => {
  const [form] = Form.useForm()

  const handleSubmit = (value: any) => {
    onSubmit(value)
    form.submit()
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={onClose}
      closeBtnTitle="Cancel"
      handleOk={handleSubmit}
      okBtnTitle="Save"
      title={mode === 'edit' ? 'Edit Patient' : 'Create Patient'}
    >
      <div className="modalPatientForm">
        <Form className="modalPatientForm__form" layout="vertical" colon={false} form={form}>
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Main information:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="first_name" label="First name" rules={[{ required: true, message: 'First name is required' }]}>
                <Input placeholder="First name" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="last_name" label="Last name" rules={[{ required: true, message: 'Last name is required' }]}>
                <Input placeholder="Last name" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="date_of_birth" label="Date of birth" rules={[{ required: true, message: 'Date of birth is required' }]}>
                <Input placeholder="Date of birth" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required' }]}>
                <Input placeholder="Gender" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
            </div>
          </div>
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Contact Details:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="phone_number" label="Phone number" rules={[{ required: true, message: 'Phone number is required' }]}>
                <Input placeholder="Phone number" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="email_address" label="Email address" rules={[{ required: true, message: 'Email address is required' }]}>
                <Input placeholder="Email address" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="home_address" label="Home address" rules={[{ required: true, message: 'Home address is required' }]}>
                <Input placeholder="Home address" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
            </div>
          </div>
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Extra Details:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="diagnosis" label="Diagnosis">
                <Input.TextArea placeholder="Diagnosis" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
              <Form.Item name="complains" label="Complains">
                <Input.TextArea placeholder="Complains" size="large" style={{ fontSize: 13 }} />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
