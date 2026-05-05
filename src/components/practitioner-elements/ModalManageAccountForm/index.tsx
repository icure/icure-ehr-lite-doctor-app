import { AddressType, DecryptedAddress, DecryptedTelecom, HealthcareParty, Identifier, TelecomType } from '@icure/cardinal-sdk'
import { Form, Input } from 'antd'
import React, { ReactElement, useEffect } from 'react'
import { useCreateOrUpdatePractitionerMutation } from '../../../core/api/practitionerApi'

import { CustomModal } from '../../common/CustomModal'
import { SpinLoader } from '../../common/SpinLoader'
import './index.less'

const NIHII_IDENTIFIER_SYSTEM = 'NIHII'

const readNihii = (hcp?: HealthcareParty): string | undefined => hcp?.identifier?.find((i) => i.system === NIHII_IDENTIFIER_SYSTEM)?.value

const upsertNihii = (existing: Identifier[] | undefined, nihii: string | undefined): Identifier[] => {
  const without = (existing ?? []).filter((i) => i.system !== NIHII_IDENTIFIER_SYSTEM)
  return nihii ? [...without, new Identifier({ system: NIHII_IDENTIFIER_SYSTEM, value: nihii })] : without
}

interface ModalManageAccountFormProps {
  isVisible: boolean
  onClose: () => void
  practitionerToBeUpdated?: HealthcareParty
}

export const ModalManageAccountForm = ({ isVisible, onClose, practitionerToBeUpdated }: ModalManageAccountFormProps): ReactElement => {
  const [form] = Form.useForm()
  const [updatePractitioner, { isSuccess: isPractitionerUpdatedSuccessfully, isLoading: isPractitionerUpdatingLoading }] = useCreateOrUpdatePractitionerMutation()

  const handleSubmit = (value: { firstName: string; lastName: string; emailAddress: string; ssin: string; nihii: string }) => {
    const { firstName, lastName, emailAddress, nihii, ssin } = value
    const address = new DecryptedAddress({
      addressType: AddressType.Home,
      telecoms: [
        new DecryptedTelecom({
          telecomType: TelecomType.Email,
          telecomNumber: emailAddress,
        }),
      ],
    })
    const identifier = upsertNihii(practitionerToBeUpdated?.identifier, nihii)
    updatePractitioner(new HealthcareParty({ ...practitionerToBeUpdated, firstName, lastName, addresses: [address], ssin, identifier }))
    form.resetFields()
  }

  useEffect(() => {
    if (isPractitionerUpdatedSuccessfully) {
      onClose()
    }
  }, [isPractitionerUpdatedSuccessfully])

  const practitionerEmail = practitionerToBeUpdated?.addresses[0].telecoms.find((item) => item.telecomType === TelecomType.Email)?.telecomNumber

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} secondaryBtnTitle="Cancel" handleClickPrimaryBtn={() => form.submit()} primaryBtnTitle="Save" title="Manage Account">
      <div className="modalManageAccountForm">
        {isPractitionerUpdatingLoading && <SpinLoader />}
        <Form
          className="modalManageAccountForm__form"
          layout="vertical"
          onFinish={(values) => handleSubmit(values)}
          colon={false}
          form={form}
          initialValues={{
            emailAddress: practitionerEmail,
            firstName: practitionerToBeUpdated?.firstName,
            lastName: practitionerToBeUpdated?.lastName,
            ssin: practitionerToBeUpdated?.ssin,
            nihii: readNihii(practitionerToBeUpdated),
          }}
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
            <Form.Item name="ssin" label="Social Security Identification Number (SSIN)" rules={[{ required: true, message: 'SSIN is required' }]}>
              <Input placeholder="SSIN" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item
              name="nihii"
              label="Number assigned by the National Institute for Health and Invalidity Insurance"
              rules={[{ required: true, message: 'NIHII is required' }]}
            >
              <Input placeholder="NIHII" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
