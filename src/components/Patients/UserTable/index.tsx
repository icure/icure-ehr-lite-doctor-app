import React from 'react'

import { UserRow } from '../UserRow'
import './index.css'
import { useFilterPatientsByDataOwnerQuery, useGetPatientsByIdsQuery } from '../../../core/api/patientApi'
import { useAppSelector } from '../../../core/hooks'
import { SpinLoader } from '../../SpinLoader'
import { CommonPlaceholder } from '../../CommonPlaceholder'
import { CardinalApiState } from '../../../core/services/auth.api'
import { createSelector } from '@reduxjs/toolkit'

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    healthcarePartyId: cardinalApi.user?.healthcarePartyId,
  }),
)

export const UserTable = () => {
  const { healthcarePartyId } = useAppSelector(reduxSelector)

  const { data: patientsIds, isLoading: patientsIdsAreLoading } = useFilterPatientsByDataOwnerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })
  const { data: patientList, isLoading: patientListIsLoading } = useGetPatientsByIdsQuery(patientsIds ?? [], { skip: !patientsIds })

  return (
    <div className="userTable">
      {patientsIdsAreLoading && patientListIsLoading && <SpinLoader />}
      {patientList?.length !== 0 ? (
        patientList?.map((patient, index) => {
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
