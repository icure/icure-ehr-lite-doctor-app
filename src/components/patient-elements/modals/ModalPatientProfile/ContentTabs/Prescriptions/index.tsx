import './index.css'
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { Button, Collapse, type CollapseProps } from 'antd'
import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFindContactsByHcPartyPatientQuery } from '../../../../../../core/api/contactApi'
import { formatTimestampToHumanReadable } from '../../../../../../helpers/dateFormaters'
import { ModalAddPrescriptionForm } from '../../../ModalAddPrescriptionForm'
import { ConsultationCard } from '../Consultations/ConsultationCard'

interface PrescriptionsProps {
  patient: DecryptedPatient
  healthcarePartyId?: string
}

export const Prescriptions: FC<PrescriptionsProps> = ({ patient, healthcarePartyId }) => {
  const [isAddPrescriptionModalOpen, setAddPrescriptionModalOpen] = useState(false)

  const { data: listOfContactsWithDoctor } = useFindContactsByHcPartyPatientQuery(
    {
      hcPartyId: healthcarePartyId ?? '',
      patient,
    },
    { skip: !healthcarePartyId },
  )

  const sortedContacts = [...(listOfContactsWithDoctor ?? [])]
    ?.sort((a, b) => (b.openingDate ?? 0) - (a.openingDate ?? 0))
    ?.filter((contact) => contact.tags.some((c) => c.id?.startsWith('CD-ITEM|prescription')))

  const items: CollapseProps['items'] = sortedContacts?.map((contact, index) => {
    return {
      id: contact.id,
      label: formatTimestampToHumanReadable(contact.openingDate),
      children: <ConsultationCard contact={contact} key={index} />,
    }
  })

  console.log(healthcarePartyId)
  return (
    <>
      <div className="prescriptions">
        <Button onClick={() => setAddPrescriptionModalOpen(true)}>Create Prescription</Button>
      </div>

      <Collapse items={items} />

      {isAddPrescriptionModalOpen &&
        createPortal(<ModalAddPrescriptionForm isVisible={isAddPrescriptionModalOpen} onClose={() => setAddPrescriptionModalOpen(false)} patient={patient} />, document.body)}
    </>
  )
}
