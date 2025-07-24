import { DecryptedPatient } from '@icure/cardinal-sdk'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import React, { FC } from 'react'
import { useFindContactsByHcPartyPatientQuery } from '../../../../../../core/api/contactApi'
import { formatTimestampToHumanReadable } from '../../../../../../helpers/dateFormaters'
import { CommonPlaceholder } from '../../../../../common/CommonPlaceholder'
import { SpinLoader } from '../../../../../common/SpinLoader'
import { ConsultationCard } from './ConsultationCard'

interface Consultations {
  healthcarePartyId?: string
  patient: DecryptedPatient
}

export const Consultations: FC<Consultations> = ({ healthcarePartyId, patient }) => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const { data: listOfContactsWithDoctor, isLoading: isListOfContactsLoading } = useFindContactsByHcPartyPatientQuery(
    {
      hcPartyId: healthcarePartyId ?? '',
      patient,
    },
    { skip: !healthcarePartyId },
  )

  const sortedContacts = [...(listOfContactsWithDoctor ?? [])]?.sort((a, b) => (b.openingDate ?? 0) - (a.openingDate ?? 0))

  const items: CollapseProps['items'] = sortedContacts?.map((contact, index) => {
    return {
      id: contact.id,
      label: formatTimestampToHumanReadable(contact.openingDate),
      children: <ConsultationCard contact={contact} key={index} />,
    }
  })

  return (
    <>
      {<SpinLoader /> && (isListOfContactsLoading || (listOfContactsWithDoctor?.length !== 0 && sortedContacts?.length === 0))}

      <Collapse items={items} onChange={onChange} />

      {listOfContactsWithDoctor?.length === 0 && (
        <CommonPlaceholder title="No Consultations Available" content="This patient has no consultations recorded. Add a new consultation to get started!" />
      )}
    </>
  )
}
