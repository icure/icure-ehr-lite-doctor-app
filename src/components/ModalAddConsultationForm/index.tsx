import React from 'react'
import { DatePicker, Form, Input } from 'antd'

import { CustomModal } from '../CustomModal'
import './index.css'
import dayjs from 'dayjs'

interface modalAddConsultationFormFormProps {
  isVisible: boolean
  onClose: () => void
  onSubmit: (value: any) => void
}
export const ModalAddConsultationForm = ({ isVisible, onClose, onSubmit }: modalAddConsultationFormFormProps) => {
  const [form] = Form.useForm()

  const handleSubmit = (value: any) => {
    onSubmit(value)
    form.submit()
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={() => {
        form.resetFields()
        onClose()
      }}
      closeBtnTitle="Cancel"
      handleOk={handleSubmit}
      okBtnTitle="Save"
      title="Add consultation"
    >
      <div className="modalAddConsultationForm">
        <Form className="modalAddConsultationForm__form" layout="vertical" colon={false} form={form} initialValues={{ dateOfVisit: dayjs(new Date()) }}>
          <div className="modalAddConsultationForm__form__inputs">
            <Form.Item name="dateOfVisit" label="Date of visit" rules={[{ required: true, message: 'Date of visit is required' }]}>
              <DatePicker format="DD.MM.YYYY" placeholder="Date of visit" size="large" style={{ width: '100%' }} maxDate={dayjs()} />
            </Form.Item>
            <Form.Item name="reasonForVisit" label="Reason for visit" rules={[{ required: true, message: 'Reason for visit is required' }]}>
              <Input.TextArea placeholder="Type the Reason for visit" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="anamnesis" label="Anamnesis" rules={[{ required: true, message: 'Anamnesis is required' }]}>
              <Input.TextArea placeholder="Type the Anamnesis" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="clinicalExam" label="Clinical Exam" rules={[{ required: true, message: 'Clinical Exam is required' }]}>
              <Input.TextArea placeholder="Type the Clinical Exam" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="diagnosis" label="Diagnosis" rules={[{ required: true, message: 'Diagnosis is required' }]}>
              <Input.TextArea placeholder="Type the Diagnosis" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="treatment" label="Treatment" rules={[{ required: true, message: 'Treatment is required' }]}>
              <Input.TextArea placeholder="Type the Treatment" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
