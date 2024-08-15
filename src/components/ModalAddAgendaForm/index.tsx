import { Agenda } from '@icure/api'
import { Form, Input } from 'antd'
import { useEffect } from 'react'
import { v4 } from 'uuid'
import { useCreateAgendaMutation } from '../../core/api/agendaApi'
import { CustomModal } from '../CustomModal'

interface ModalAddAgendaFormProps {
  isVisible: boolean
  onClose: () => void
}

export const ModalAddAgendaForm = ({ isVisible, onClose }: ModalAddAgendaFormProps) => {
  const [form] = Form.useForm()

  const [createAgenda, { data: newAgenda, error: agendaCreationError, isError: agendaCreationFailed, isSuccess: agendaCreationSucceeded, isLoading: agendaCreationOngoing }] =
    useCreateAgendaMutation()

  const handleSubmit = () => {
    console.log('Agenda creation attempt: ', form.getFieldsValue())
    createAgenda(new Agenda({ ...form.getFieldsValue(), id: v4() }))
    form.submit()
  }

  useEffect(() => {
    if (agendaCreationSucceeded) {
      console.log('Agenda created successfully: ', newAgenda)
      onClose()
    }
  }, [agendaCreationSucceeded])

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={() => {
        form.resetFields()
        onClose()
      }}
      closeBtnTitle="Cancel"
      handleOk={() => handleSubmit()}
      okBtnTitle="Save"
      title="Add agenda"
    >
      <div className="modalAddAgendaForm">
        <Form className="modalAddAgendaForm__form" layout="vertical" colon={false} form={form}>
          <div className="modalAddAgendaForm__form__inputs">
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Name of the agenda' }]}>
              <Input placeholder="Type the agenda's name" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
