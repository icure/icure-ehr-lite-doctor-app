import React from 'react'
import { Form, Input } from 'antd'

import { CustomModal } from '../CustomModal'
import './index.css'

interface ModalAddConsultationProps {
  isVisible: boolean
  onClose: () => void
  onSubmit: (value: any) => void
}
export const ModalAddConsultation = ({ isVisible, onClose, onSubmit }: ModalAddConsultationProps): JSX.Element => {
  const [form] = Form.useForm()

  const handleSubmit = (value: any) => {
    onSubmit(value)
    form.submit()
  }
  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} closeBtnTitle="Cancel" handleOk={handleSubmit} okBtnTitle="Save" title="Add consultation">
      <div className="modalAddConsultation">
        <Form className="modalAddConsultation__form" layout="vertical" colon={false} form={form}>
          <div className="modalAddConsultation__form__inputs">
            <Form.Item name="reason_for_visit" label="Reason for visit" rules={[{ required: true, message: 'Reason for visit is required' }]}>
              <Input.TextArea placeholder="Type the Reason for visit" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="anamnesis" label="Anamnesis" rules={[{ required: true, message: 'Anamnesis is required' }]}>
              <Input.TextArea placeholder="Type the Anamnesis" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="clinical_exam" label="Clinical Exam" rules={[{ required: true, message: 'Clinical Exam is required' }]}>
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
