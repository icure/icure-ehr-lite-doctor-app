import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Patient, PatientFilter, PatientApi, IPaginatedList } from '@icure/ehr-lite-sdk'
import { guard, ehrLiteApi } from '../services/auth.api'
import { PaginatedList } from '@icure/typescript-common/models/PaginatedList.model'

export const patientApiRtk = createApi({
  reducerPath: 'patientApi',
  tagTypes: ['Patient'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getPatient: builder.query<Patient | undefined, string>({
      async queryFn(id, { getState }) {
        const patientApi = (await ehrLiteApi(getState))?.patientApi
        return guard(
          [patientApi],
          async (): Promise<Patient> => {
            const patient = await patientApi?.get(id)
            if (!patient) {
              throw new Error('Patient does not exist')
            }
            return patient
          },
          Patient,
        )
      },
      providesTags: (res) => (res ? [{ type: 'Patient', id: res.id }] : []),
    }),
    createOrUpdatePatient: builder.mutation<Patient | undefined, Patient>({
      async queryFn(patient, { getState, dispatch }) {
        const patientApi = (await ehrLiteApi(getState))?.patientApi
        return guard(
          [patientApi],
          async (): Promise<Patient> => {
            const updatedPatient = await patientApi?.createOrModify(patient)
            if (!updatedPatient) {
              throw new Error('Patient does not exist')
            }
            return updatedPatient
          },
          Patient,
        )
      },

      invalidatesTags: (result, error, arg) => (!result?.rev ? [] : result.rev.startsWith('1-') ? [{ type: 'Patient', id: 'all' }] : [{ type: 'Patient', id: arg.id }]),
    }),
    filterPatientsByDataOwner: builder.query<IPaginatedList<Patient> | undefined, { practitionerId: string; sharingDataWithIds?: string[] }>({
      async queryFn({ practitionerId, sharingDataWithIds }, { getState, dispatch }) {
        const api = await ehrLiteApi(getState)

        return guard([api], async (): Promise<IPaginatedList<Patient>> => {
          if (!api) {
            throw new Error('Something went wrong')
          }

          const patientApi = api?.patientApi
          const filter2 = await Promise.all([practitionerId, ...(sharingDataWithIds ?? [])].map((id) => new PatientFilter(api).forDataOwner(id).build()))
          const filterForMatch = await new PatientFilter(api).forDataOwner(practitionerId).build()
          const patientsList = await patientApi?.filterBy(filterForMatch)

          const biggerPatientsList = await Promise.all(filter2.map((filter) => patientApi?.filterBy(filter)))
          console.log('biggerPatientsList')
          console.log(biggerPatientsList)

          if (!patientsList) {
            throw new Error('Patients do not found')
          }
          return PaginatedList.toJSON(patientsList, (patientFromTheList: Patient) => patientFromTheList)
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.rows.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient.id,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [],
    }),
    deletePatient: builder.mutation<string | undefined, string>({
      async queryFn(id, { getState }) {
        const patientApi = (await ehrLiteApi(getState))?.patientApi
        return guard([patientApi], async () => {
          const result = await patientApi?.delete(id)
          if (!result) {
            throw new Error('Patient can`t be deleted')
          }
          return result
        })
      },
      invalidatesTags: (id) => [
        { type: 'Patient', id: 'all' },
        { type: 'Patient', id: id },
      ],
    }),
  }),
})

export const { useGetPatientQuery, useCreateOrUpdatePatientMutation, useFilterPatientsByDataOwnerQuery, useDeletePatientMutation } = patientApiRtk
