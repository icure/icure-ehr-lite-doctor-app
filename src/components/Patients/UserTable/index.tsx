import { DecryptedPatient } from '@icure/cardinal-sdk'
import React from 'react'
import { CommonPlaceholder } from '../../CommonPlaceholder'
import { SpinLoader } from '../../SpinLoader'

import { UserRow } from '../UserRow'
import './index.css'

interface UserTableProps {
  showSpinner: boolean
  patientList?: DecryptedPatient[]
  noMatchingPatientsPlaceholder?: boolean
}

export const UserTable = ({ showSpinner, patientList, noMatchingPatientsPlaceholder }: UserTableProps) => {
  return (
    <div className="userTable">
      {showSpinner && <SpinLoader />}
      {patientList && patientList?.length !== 0 ? (
        patientList?.map((patient: DecryptedPatient, index: number) => {
          return <UserRow key={index} patient={patient} />
        })
      ) : (
        <CommonPlaceholder
          title={noMatchingPatientsPlaceholder ? 'No Patients Found' : 'No Patients Added Yet'}
          content={
            noMatchingPatientsPlaceholder
              ? 'Try adjusting your search criteria or adding a new patient.'
              : "It looks like you haven't added any patients to your list. Don't worry, you can easily add them by clicking the 'Add' or 'Import' button."
          }
        />
      )}
    </div>
  )
}
