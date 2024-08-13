import React, { useMemo } from 'react'

import { UserRow } from '../UserRow'
import './index.css'
import { useFilterPatientsByDataOwnerQuery } from '../../../core/api/patientApi'
import { useAppSelector } from '../../../core/hooks'
import { SpinLoader } from '../../SpinLoader'
import { message } from 'antd'
import { CommonPlaceholder } from '../../CommonPlaceholder'
import { EHRLiteApiState } from '../../../core/services/auth.api'
import { createSelector } from '@reduxjs/toolkit'
import { Patient, PaginatedList, SharedDataType } from '@icure/ehr-lite-sdk'

const reduxSelector = createSelector(
  (state: { ehrLiteApi: EHRLiteApiState }) => state.ehrLiteApi,
  (ehrLiteApi: EHRLiteApiState) => ({
    healthcarePartyId: ehrLiteApi.user?.healthcarePartyId,
    sharingDataWith: ehrLiteApi.user?.sharingDataWith,
  }),
)

export const UserTable = () => {
  const { healthcarePartyId, sharingDataWith } = useAppSelector(reduxSelector)

  const { data: patients, error: patientsError, isLoading: patientsAreLoading } = useFilterPatientsByDataOwnerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })

  const patientsFromJSON = useMemo(() => {
    if (!!patients) {
      return PaginatedList.fromJSON(patients, (patientJson) => patientJson)
    }
    return undefined
  }, [patients])

  return (
    <div className="userTable">
      {patientsAreLoading && <SpinLoader />}
      {patientsFromJSON?.rows?.length !== 0 ? (
        patientsFromJSON?.rows?.map((patient, index) => {
          return <UserRow key={index} patient={patient} />
        })
      ) : (
        <CommonPlaceholder
          title="No Patients Added Yet"
          content="It looks like you haven't added any patients to your list. Don't worry, you can easily add them by clicking the 'Create Patient' button."
        />
      )}
    </div>
  )
}
