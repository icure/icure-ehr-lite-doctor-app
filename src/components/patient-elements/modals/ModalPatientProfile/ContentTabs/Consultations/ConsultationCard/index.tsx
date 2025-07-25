import { DecryptedContact, DecryptedContent, Measure, Medication } from '@icure/cardinal-sdk'
import React from 'react'
import { useGetHealthElementsQuery } from '../../../../../../../core/api/healthElementApi'
import { formatTimestampToHumanReadable } from '../../../../../../../helpers/dateFormaters'
import './index.css'

type ConsultationCardProps = {
  contact: DecryptedContact
}

export const ConsultationCard = ({ contact }: ConsultationCardProps) => {
  const healthElementsIds = contact.subContacts.map((subContact) => subContact.healthElementId).filter((id): id is string => id !== undefined)
  const { data: healthElements } = useGetHealthElementsQuery(healthElementsIds, { skip: healthElementsIds.length === 0 })

  const PrescriptionShort = ({ medication }: { medication: Medication }) => {
    const getDurationFromDays = (numberOfDays: number | undefined) => {
      if (!numberOfDays) return {}
      if (numberOfDays % 7 === 0) {
        return {
          duration: numberOfDays / 7,
          durationTimeUnit: numberOfDays / 7 === 1 ? 'week' : 'weeks',
        }
      } else {
        return {
          duration: numberOfDays,
          durationTimeUnit: numberOfDays === 1 ? 'day' : 'days',
        }
      }
    }

    return (
      <div className="prescriptionTemplate__medication">
        <div className="prescriptionTemplate__medication__content">
          <p>DCI group name:</p>
          <span>{medication?.medicinalProduct?.intendedname ?? medication?.substanceProduct?.intendedname ?? medication?.compoundPrescription}</span>
        </div>
        <div className="prescriptionTemplate__medication__content">
          <p>Dosage:</p>
          <span>{medication?.instructionForPatient}</span>
        </div>
        <div className="prescriptionTemplate__medication__content">
          <p>Duration:</p>
          <span>{getDurationFromDays(medication?.duration?.value)?.duration + ' ' + getDurationFromDays(medication?.duration?.value)?.durationTimeUnit}</span>
        </div>
        <div className="prescriptionTemplate__medication__content">
          <p>RID:</p>
          <span>{medication?.prescriptionRID}</span>
        </div>
      </div>
    )
  }

  const getServicesContentValue = (content: DecryptedContent) => {
    if (!!content.stringValue) {
      return <p>{content.stringValue}</p>
    } else if (content.ratio) {
      const systolicPressure = content.ratio.find((el: Measure) => el.comment === 'systolicPressure')
      const diastolicPressure = content.ratio.find((el: Measure) => el.comment === 'diastolicPressure')
      return (
        <p>
          {systolicPressure?.value + ' ' + systolicPressure?.unit} / {diastolicPressure?.value + ' ' + diastolicPressure?.unit}
        </p>
      )
    } else if (content.medicationValue) {
      return <PrescriptionShort medication={content.medicationValue} />
    } else {
      return <p>Nan</p>
    }
  }

  return (
    <div className="consultation">
      <div className="consultation__item">
        <h5>Date of visit:</h5>
        <p>{formatTimestampToHumanReadable(contact.openingDate)}</p>
      </div>

      {contact.services.map((service, index) => (
        <div className="consultation__item" key={index}>
          <h5>{service.label}:</h5>
          {getServicesContentValue(service.content.en)}
        </div>
      ))}

      {healthElements?.map((healthElement, index) => {
        const value = healthElement.descr

        const label = contact.subContacts.find((el) => el.healthElementId === healthElement.id)?.descr
        return (
          <div className="consultation__item" key={index}>
            <h5>{label}:</h5>
            <p>{value}</p>
          </div>
        )
      })}
    </div>
  )
}
