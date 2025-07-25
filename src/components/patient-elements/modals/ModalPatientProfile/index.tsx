import { DecryptedPatient } from '@icure/cardinal-sdk'
import { createSelector } from '@reduxjs/toolkit'
import { Tabs } from 'antd'
import React, { ReactElement } from 'react'
import { DEFAULT_MODAL_WIDTH } from '../../../../constants'
import { useAppSelector } from '../../../../core/hooks'
import { CardinalApiState } from '../../../../core/services/auth.api'

import { CustomModal } from '../../../common/CustomModal'
import './index.css'
import { Consultations } from './ContentTabs/Consultations'
import { Overview } from './ContentTabs/Overview'
import { Prescriptions } from './ContentTabs/Prescriptions'

interface ModalPatientProfileProps {
  isVisible: boolean
  patient: DecryptedPatient
  onClose: () => void
  onEdit: () => void
  onAddConsultation: () => void
}

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    healthcarePartyId: cardinalApi.user?.healthcarePartyId,
  }),
)

export const ModalPatientProfile = ({ isVisible, onClose, patient, onEdit, onAddConsultation }: ModalPatientProfileProps): ReactElement => {
  const { healthcarePartyId } = useAppSelector(reduxSelector)

  const items = [
    {
      label: 'Overview',
      key: 'overview_tab',
      children: <Overview patient={patient} />,
    },
    {
      label: 'Consultations',
      key: 'consultations_tab',
      children: <Consultations healthcarePartyId={healthcarePartyId} patient={patient} />,
    },
    {
      label: 'Prescriptions',
      key: 'prescriptions_tab',
      children: <Prescriptions healthcarePartyId={healthcarePartyId} patient={patient} />,
    },
    {
      label: 'Allergies',
      key: 'allergies_tab',
      children: <div> no Allergies yet </div>,
    },
  ]
  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={onClose}
      title="Patient profile"
      secondaryBtnTitle="Edit patient"
      handleClickSecondaryBtn={onEdit}
      primaryBtnTitle="Start consultation"
      handleClickPrimaryBtn={onAddConsultation}
      width={DEFAULT_MODAL_WIDTH}
    >
      <div className="modalPatienProfile">
        <div className="modalPatienProfile__innerContainer">
          <div className="modalPatienProfile__tabs">
            <Tabs type="line" items={items} />
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
