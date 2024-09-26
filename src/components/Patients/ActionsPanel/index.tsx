import React, { useState } from 'react'
import { Input, Button } from 'antd'
import Icon from '@ant-design/icons'

import { addIcn } from '../../../assets/CustomIcons'
import './index.css'
import { createPortal } from 'react-dom'
import { ModalPatientForm } from '../../ModalPatientForm'
import { createSelector } from '@reduxjs/toolkit'
import { EHRLiteApiState } from '../../../core/services/auth.api'
import { useAppSelector } from '../../../core/hooks'
import { useGetPractitionerQuery } from '../../../core/api/practitionerApi'
import { ModalCryptographicKeypair } from '../../ModalCryptographicKeypair'

const { Search } = Input

const reduxSelector = createSelector(
  (state: { ehrLiteApi: EHRLiteApiState }) => state.ehrLiteApi,
  (ehrLiteApi: EHRLiteApiState) => ({
    practitionerId: ehrLiteApi.user?.healthcarePartyId,
  }),
)
export const ActionsPanel = () => {
  const { practitionerId } = useAppSelector(reduxSelector)
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)
  const [isModalCryptographicKeypairOpen, setModalCryptographicKeypairOpen] = useState(false)

  const { currentData: practitioner } = useGetPractitionerQuery(practitionerId ?? '', { skip: !practitionerId })
  const practitionerPublicKey = practitioner?.publicKey
  return (
    <>
      <div className="actionsPanel">
        <Search placeholder="Search by Name, Email or Phone" enterButton size="large" />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            practitionerPublicKey ? setPatientFormModalOpen(true) : setModalCryptographicKeypairOpen(true)
          }}
        >
          <Icon component={addIcn} />
          <span>Create patient</span>
        </Button>
      </div>
      {isPatientFormModalOpen && createPortal(<ModalPatientForm mode="create" isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} />, document.body)}
      {isModalCryptographicKeypairOpen &&
        practitionerId &&
        createPortal(
          <ModalCryptographicKeypair practitionerId={practitionerId} isVisible={isModalCryptographicKeypairOpen} onClose={() => setModalCryptographicKeypairOpen(false)} />,
          document.body,
        )}
    </>
  )
}
