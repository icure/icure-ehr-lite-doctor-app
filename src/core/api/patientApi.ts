import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { guard, cardinalApi } from '../services/auth.api'
import { DecryptedPatient, Patient, PatientFilters } from '@icure/cardinal-sdk'

export const patientApiRtk = createApi({
  reducerPath: 'patientApi',
  tagTypes: ['Patient'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createOrUpdatePatient: builder.mutation<DecryptedPatient | undefined, DecryptedPatient>({
      async queryFn(patient, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        return guard([patientApi], async (): Promise<DecryptedPatient> => {
          const updatedPatient = !!patient.rev ? await patientApi?.modifyPatient(patient) : await patientApi?.createPatient(await patientApi.withEncryptionMetadata(patient))
          if (!updatedPatient) {
            throw new Error('Patient does not exist')
          }
          return new DecryptedPatient(updatedPatient)
        })
      },

      invalidatesTags: (result, error, arg) => (!result?.rev ? [] : result.rev.startsWith('1-') ? [{ type: 'Patient', id: 'all' }] : [{ type: 'Patient', id: arg.id }]),
    }),
    filterPatientsByDataOwner: builder.query<string[] | undefined, string>({
      async queryFn(practitionerId, { getState }) {
        const api = await cardinalApi(getState)

        return guard([api], async (): Promise<string[]> => {
          if (!api) {
            throw new Error('Something went wrong')
          }
          const patientApi = api?.patient
          const filterForMatch = PatientFilters.allPatientsForDataOwner(practitionerId)

          const patientsList = await patientApi?.matchPatientsBy(filterForMatch)
          if (!patientsList) {
            throw new Error('Patients do not found')
          }

          return patientsList
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [],
    }),
    getPatientsByIds: builder.query<DecryptedPatient[] | undefined, string[]>({
      async queryFn(patientsIds, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        return guard([patientApi], async (): Promise<DecryptedPatient[]> => {
          const patientsList = await patientApi?.getPatients(patientsIds)
          if (!patientsList) {
            throw new Error('Patients do not found')
          }
          return patientsList
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient.id,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [],
    }),
    deletePatient: builder.mutation<string | undefined, Patient>({
      async queryFn(patient, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        return guard([patientApi], async () => {
          const result = await patientApi?.deletePatient(patient)
          if (!result) {
            throw new Error('Patient can`t be deleted')
          }
          return result.id
        })
      },
      invalidatesTags: (id) => [
        { type: 'Patient', id: 'all' },
        { type: 'Patient', id: id },
      ],
    }),
    sharePatientWith: builder.mutation<DecryptedPatient | undefined, { patient: DecryptedPatient; delegateId: string }>({
      async queryFn({ patient, delegateId }, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        return guard([patientApi], async (): Promise<DecryptedPatient> => {
          const updatedPatient = await patientApi?.shareWith(delegateId, patient)
          if (!updatedPatient) {
            throw new Error('Patient does not exist')
          }
          return new DecryptedPatient(updatedPatient)
        })
      },

      invalidatesTags: (result, error, arg) => (!result?.rev ? [] : result.rev.startsWith('1-') ? [{ type: 'Patient', id: 'all' }] : [{ type: 'Patient', id: arg.patient.id }]),
    }),
  }),
})

export const { useCreateOrUpdatePatientMutation, useFilterPatientsByDataOwnerQuery, useGetPatientsByIdsQuery, useDeletePatientMutation, useSharePatientWithMutation } =
  patientApiRtk
