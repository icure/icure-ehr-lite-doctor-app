import { DecryptedContact, DecryptedContent, DecryptedHealthElement, DecryptedPatient, DecryptedService, Identifier } from '@icure/cardinal-sdk'
import { createSelector } from '@reduxjs/toolkit'
import { Form } from 'antd'
import React from 'react'
import { v4 as uuid } from 'uuid'
import { useCreateContactMutation } from '../../../../core/api/contactApi'
import { useGetPractitionerQuery } from '../../../../core/api/practitionerApi'
import { useAppSelector } from '../../../../core/hooks'
import { CardinalApiState } from '../../../../core/services/auth.api'
import { getNumericDate } from '../../../../helpers/dateFormaters'

import { CustomModal } from '../../../common/CustomModal'
import './index.css'
import { SpinLoader } from '../../../common/SpinLoader'

interface modalAddConsultationFormFormProps {
  isVisible: boolean
  onClose: () => void
  patient: DecryptedPatient
}

type ConsultationType = {
  complains: string
  anamnesis: string
  clinicalExam: string
  systolicPressure: number
  diastolicPressure: number
  diagnosis: string
  treatment: string
}

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    healthcarePartyId: cardinalApi.user?.healthcarePartyId,
  }),
)

export const ModalAddPrescriptionForm = ({ isVisible, onClose, patient }: modalAddConsultationFormFormProps) => {
  const startOfTheConsultation = getNumericDate(new Date())
  const { healthcarePartyId } = useAppSelector(reduxSelector)
  const { data: practitioner } = useGetPractitionerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })
  const [form] = Form.useForm()
  const [createContact, { error: createContactError, isError: isCreateContactError, isSuccess: isContactCreatedSuccessfully, isLoading: isContactCreatingLoading }] =
    useCreateContactMutation()

  if (isCreateContactError) {
    console.error(createContactError)
  }

  const handleSubmit = async (value: ConsultationType) => {
    const diagnosisHealthElement = new DecryptedHealthElement({
      id: uuid(),
      descr: value.diagnosis,
    })

    const prescriptionService = new DecryptedService({
      medicalLocationId: undefined,
      id: uuid(),
      label: 'Prescription',
      identifier: [new Identifier({ system: 'cardinal', value: 'prescription' })],
      content: {
        en: new DecryptedContent({
          stringValue: value.complains,
        }),
      },
    })

    const contact = new DecryptedContact({
      id: uuid(),
      descr: `${practitioner?.speciality ?? 'Doctor'} consultation`,
      openingDate: startOfTheConsultation,
      services: [prescriptionService],

      closingDate: getNumericDate(new Date()), // Closing the Examination
    })

    createContact({ patient, contact })
    form.resetFields()
  }
  const handleOnClose = () => {
    form.resetFields()
    onClose()
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleOnClose}
      secondaryBtnTitle="Cancel"
      handleClickPrimaryBtn={() => form.submit()}
      primaryBtnTitle="Save"
      title="Add consultation"
    >
      <div className="modalAddConsultationForm">
        {isContactCreatingLoading && <SpinLoader />}
        <Form className="modalAddConsultationForm__form" layout="vertical" colon={false} form={form} onFinish={(values) => handleSubmit(values)}>
          <div className="modalAddConsultationForm__form__inputs">// Search // Templates</div>
        </Form>
      </div>
    </CustomModal>
  )
}
