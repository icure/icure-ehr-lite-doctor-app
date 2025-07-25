import './index.css'
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { Button } from 'antd'
import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalAddPrescriptionForm } from '../../../ModalAddPrescriptionForm'

interface PrescriptionsProps {
  patient: DecryptedPatient
  healthcarePartyId?: string
}

export const Prescriptions: FC<PrescriptionsProps> = ({ patient, healthcarePartyId }) => {
  const [isAddPrescriptionModalOpen, setAddPrescriptionModalOpen] = useState(false)
  console.log(healthcarePartyId)
  return (
    <>
      <div className="prescriptions">
        <Button onClick={() => setAddPrescriptionModalOpen(true)}>Create Prescription</Button>
      </div>
      {isAddPrescriptionModalOpen &&
        createPortal(<ModalAddPrescriptionForm isVisible={isAddPrescriptionModalOpen} onClose={() => setAddPrescriptionModalOpen(false)} patient={patient} />, document.body)}
    </>
  )
}
