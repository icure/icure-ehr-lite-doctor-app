import React, { ReactElement } from 'react'
import { Form } from 'antd'
import { CustomModal } from '../CustomModal'
import './index.css'
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { createSelector } from '@reduxjs/toolkit'
import { CardinalApiState, getApiFromState } from '../../core/services/auth.api'
import { useAppSelector } from '../../core/hooks'
import { useSharePatientWithMutation } from '../../core/api/patientApi'
import { SpinLoader } from '../SpinLoader'
import { DevicesSelect } from '../DevicesSelect'
import { PractitionersSelect } from '../PractitionersSelect'

interface ModalPatientFormProps {
  isVisible: boolean
  onClose: () => void
  patientToEdit: DecryptedPatient
}

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    cardinalApi: getApiFromState(() => cardinalApi),
  }),
)

export const ModalSharePatient = ({ isVisible, onClose, patientToEdit }: ModalPatientFormProps): ReactElement => {
  const [form] = Form.useForm()
  const { cardinalApi } = useAppSelector(reduxSelector)

  const [sharePatient, { error: sharePatientError, isError: isSharePatientError, isSuccess: isSharePatientSuccessfully, isLoading: isSharePatientLoading }] =
    useSharePatientWithMutation()

  isSharePatientError && console.error(sharePatientError)

  const handleOnClose = () => {
    form.resetFields()
    onClose()
  }

  const handleOnOk = (values: { selectedDoctors: { value: string; label: string }[]; selectedDevices: { value: string; label: string }[] }) => {
    if (values.selectedDoctors !== undefined) {
      values.selectedDoctors.map((el) => sharePatient({ patient: new DecryptedPatient(patientToEdit), delegateId: el.value }))
    }
    if (values.selectedDevices !== undefined) {
      values.selectedDevices?.map((el) => sharePatient({ patient: new DecryptedPatient(patientToEdit), delegateId: el.value }))
    }

    form.resetFields()
    onClose()
  }

  return (
    <CustomModal isVisible={isVisible} handleClose={handleOnClose} closeBtnTitle="Cancel" handleOk={() => form.submit()} okBtnTitle="Save" title="Share patient">
      <div className="modalSharePatient">
        {isSharePatientLoading && <SpinLoader />}
        <Form className="modalSharePatient__form" layout="vertical" colon={false} form={form} onFinish={(values) => handleOnOk(values)}>
          <div className="modalSharePatient__form__inputs">
            <Form.Item name="selectedDoctors" label="Select healthcare professionals">
              <PractitionersSelect />
            </Form.Item>
            <Form.Item name="selectedDevices" label="Select devices">
              <DevicesSelect />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
