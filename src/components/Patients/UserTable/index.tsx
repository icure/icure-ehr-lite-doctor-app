import React, { useMemo } from 'react'

import { UserRow } from '../UserRow'
import './index.css'
import { useCreateOrUpdatePatientMutation, useDeletePatientMutation, useFilterPatientsByDataOwnerQuery } from '../../../core/api/patientApi'
import { useAppSelector } from '../../../core/hooks'
import { SpinLoader } from '../../SpinLoader'
import { useCreateAndInvitePatientMutation } from '../../../core/api/userApi'
import { message } from 'antd'
import { CommonPlaceholder } from '../../CommonPlaceholder'
import { EHRLiteApiState } from '../../../core/services/auth.api'
import { createSelector } from '@reduxjs/toolkit'
import { Patient, PaginatedList } from '@icure/ehr-lite-sdk'

const reduxSelector = createSelector(
  (state: { ehrLiteApi: EHRLiteApiState }) => state.ehrLiteApi,
  (ehrLiteApi: EHRLiteApiState) => ({
    healthcarePartyId: ehrLiteApi.user?.healthcarePartyId,
  }),
)

export const UserTable = () => {
  const { healthcarePartyId } = useAppSelector(reduxSelector)
  const { data: patients, error: patientsError, isLoading: patientsAreLoading } = useFilterPatientsByDataOwnerQuery(healthcarePartyId || '', { skip: !healthcarePartyId })

  const patientsFromJSON = useMemo(() => {
    if (!!patients) {
      return PaginatedList.fromJSON(patients, (patientJson) => Patient.fromJSON(patientJson))
    }
    return undefined
  }, [patients])

  const [invitePatient, { error: invitePatientError, isError: isInvitePatientError, isSuccess: isPatientInvitedSuccessfully, isLoading: isPatientInvitingLoading }] =
    useCreateAndInvitePatientMutation()
  const [deletePatient, { error: deletePatientError, isError: isDeletePatientError, isSuccess: isPatientDeletedSuccessfully, isLoading: isPatientDeletinggLoading }] =
    useDeletePatientMutation()
  const [
    createOrUpdatePatient,
    { error: createOrUpdatePatientError, isError: isCreateOrUpdatePatientError, isSuccess: isPatientCreatedOrUpdateSuccessfully, isLoading: isPatientCreatingOrUpdatingLoading },
  ] = useCreateOrUpdatePatientMutation()

  const [messageApi, contextHolder] = message.useMessage()

  const showMessageFeedback = (type: 'loading' | 'success' | 'error', content: string) => {
    messageApi.open({
      type: type,
      content: content,
      duration: 0,
    })
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500)
  }

  return (
    <div className="userTable">
      {patientsAreLoading && <SpinLoader />}
      {patientsFromJSON?.rows?.length !== 0 ? (
        patientsFromJSON?.rows?.map((patient, index) => {
          return (
            <UserRow
              key={index}
              patient={patient}
              editPatient={(editedPatient: Patient) => {
                // createOrUpdatePatient(editedPatient)
                isPatientCreatingOrUpdatingLoading && showMessageFeedback('loading', 'The patient is editing...')
                isPatientCreatedOrUpdateSuccessfully && showMessageFeedback('success', 'The patient was edited!')
                isCreateOrUpdatePatientError && showMessageFeedback('error', `An error occurred while editing the patient. ${createOrUpdatePatientError}`)
              }}
              invitePatient={() => {
                invitePatient(patient)
                showMessageFeedback('loading', 'The invite mail is sending...')
                isPatientInvitedSuccessfully && showMessageFeedback('success', 'The invite mail was sent!')
                isInvitePatientError && showMessageFeedback('error', `An error occurred while sending the invitation letter. ${invitePatientError}`)
              }}
              deletePatient={() => {
                deletePatient(patient.id)
                isPatientDeletinggLoading && showMessageFeedback('loading', 'The patient is deleting...')
                isPatientDeletedSuccessfully && showMessageFeedback('success', 'The patient was deleted!')
                isDeletePatientError && showMessageFeedback('error', `An error occurred while deleting the patient. ${deletePatientError}`)
              }}
            />
          )
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
