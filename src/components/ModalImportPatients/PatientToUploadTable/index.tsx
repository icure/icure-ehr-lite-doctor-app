import React from 'react'
import { UploadedPatientsTableEnum, UploadedPatientType } from '../utils/types'
import './index.css'

interface PatientToUploadTableProps {
  patients: UploadedPatientType[]
}

export const PatientToUploadTable = ({ patients }: PatientToUploadTableProps) => {
  return (
    <div className="PatientToUploadTable">
      <div className="PatientToUploadTable__head">
        <div className="PatientToUploadTable__head__cell">
          <span>{UploadedPatientsTableEnum.NAME}</span>
        </div>
        <div className="PatientToUploadTable__head__cell">
          <span>{UploadedPatientsTableEnum.SURNAME}</span>
        </div>
        <div className="PatientToUploadTable__head__cell">
          <span>{UploadedPatientsTableEnum.EMAIL}</span>
        </div>
        <div className="PatientToUploadTable__head__cell">
          <span>{UploadedPatientsTableEnum.TAGS}</span>
        </div>
      </div>
      <div className="PatientToUploadTable__body">
        {patients?.map((patient: UploadedPatientType, index: number) => {
          return (
            <div key={index} className="PatientToUploadTable__body__row">
              <div className="PatientToUploadTable__body__row__cell">
                <span>{patient.name}</span>
              </div>
              <div className="PatientToUploadTable__body__row__cell">
                <span>{patient.surname}</span>
              </div>
              <div className="PatientToUploadTable__body__row__cell">
                <span>{patient.email}</span>
              </div>
              <div className="PatientToUploadTable__body__row__cell">
                <span>{patient.tags}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
