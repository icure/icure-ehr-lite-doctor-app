import React, { useState } from 'react'
import { Input, Button } from 'antd'
import Icon from '@ant-design/icons'

import { addIcn } from '../../../assets/CustomIcons'
import './index.css'
import { createPortal } from 'react-dom'
import { ModalPatientForm } from '../../ModalPatientForm'
import { createSelector } from '@reduxjs/toolkit'
import { CardinalApiState } from '../../../core/services/auth.api'
import { useAppSelector } from '../../../core/hooks'
import { useGetPractitionerQuery } from '../../../core/api/practitionerApi'

const { Search } = Input

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    practitionerId: cardinalApi.user?.healthcarePartyId,
  }),
)
export const ActionsPanel = () => {
  const { practitionerId } = useAppSelector(reduxSelector)
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)

  const { currentData: practitioner } = useGetPractitionerQuery(practitionerId ?? '', { skip: !practitionerId })
  const practitionerPublicKey = practitioner?.publicKey
  return (
    <>
      <div className="actionsPanel">
        <Search placeholder="Search by Name, Email or Phone" enterButton size="large" />
        <Button type="primary" size="large" onClick={() => setPatientFormModalOpen(true)}>
          <Icon component={addIcn} />
          <span>Create patient</span>
        </Button>
      </div>
      {isPatientFormModalOpen && createPortal(<ModalPatientForm mode="create" isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} />, document.body)}
    </>
  )
}
