import React, { useEffect } from 'react'
import { Form, Input } from 'antd'
import { Practitioner, Location, LocationAddressTypeEnum, ContactPoint } from '@icure/ehr-lite-sdk'

import { CustomModal } from '../CustomModal'
import { useCreateOrUpdatePractitionerMutation } from '../../core/api/practitionerApi'
import { SpinLoader } from '../SpinLoader'
import './index.css'

interface ModalManageAccountFormProps {
  isVisible: boolean
  onClose: () => void
  practitionerToBeUpdated?: Practitioner
}
export const ModalManageAccountForm = ({ isVisible, onClose, practitionerToBeUpdated }: ModalManageAccountFormProps): JSX.Element => {
  const [form] = Form.useForm()
  const [updatePractitioner, { isSuccess: isPractitionerUpdatedSuccessfully, isLoading: isPractitionerUpdatingLoading }] = useCreateOrUpdatePractitionerMutation()
  const handleSubmit = (value: any) => {
    const { firstName, lastName, emailAddress, speciality } = value
    const address = new Location({
      addressType: LocationAddressTypeEnum.HOME,
      telecoms: [
        new ContactPoint({
          system: 'email',
          value: emailAddress,
        }),
      ],
    })

    updatePractitioner(new Practitioner({ ...practitionerToBeUpdated, firstName, lastName, speciality, addresses: [address] }))
    form.resetFields()
  }

  useEffect(() => {
    if (isPractitionerUpdatedSuccessfully) {
      onClose()
    }
  }, [isPractitionerUpdatedSuccessfully])

  const practitionerEmail = practitionerToBeUpdated?.addresses[0].telecoms.find((item) => item.system === 'email')?.value

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} closeBtnTitle="Cancel" handleOk={() => form.submit()} okBtnTitle="Save" title="Add consultation">
      <div className="modalManageAccountForm">
        {isPractitionerUpdatingLoading && <SpinLoader />}
        <Form
          className="modalManageAccountForm__form"
          layout="vertical"
          onFinish={(values) => handleSubmit(values)}
          colon={false}
          form={form}
          initialValues={{ emailAddress: practitionerEmail, ...practitionerToBeUpdated }}
        >
          <div className="modalManageAccountForm__form__inputs">
            <Form.Item name="firstName" label="First name" rules={[{ required: true, message: 'First name is required' }]}>
              <Input placeholder="First name" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="lastName" label="Last name" rules={[{ required: true, message: 'Last name is required' }]}>
              <Input placeholder="Last name" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="emailAddress" label="Email address" rules={[{ required: true, message: 'Email address is required' }]}>
              <Input placeholder="Email address" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="speciality" label="Speciality" rules={[{ required: true, message: 'Speciality is required' }]}>
              <Input placeholder="Speciality" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
