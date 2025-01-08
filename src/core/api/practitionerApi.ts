import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { guard, cardinalApi } from '../services/auth.api'
import { HealthcareParty, HealthcarePartyFilters, PaginatedListIterator } from '@icure/cardinal-sdk'

export const practitionerApiRtk = createApi({
  reducerPath: 'practitionerApi',
  tagTypes: ['Practitioner'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getPractitioner: builder.query<HealthcareParty | undefined, string>({
      async queryFn(id, { getState }) {
        const practitionerApi = (await cardinalApi(getState))?.healthcareParty
        return guard([practitionerApi], async (): Promise<HealthcareParty> => {
          const practitioner = await practitionerApi?.getHealthcareParty(id)
          if (!practitioner) {
            throw new Error('Practitioner does not exist')
          }
          return practitioner
        })
      },
      providesTags: (res) => (res ? [{ type: 'Practitioner', id: res.id }] : []),
    }),
    createOrUpdatePractitioner: builder.mutation<HealthcareParty | undefined, HealthcareParty>({
      async queryFn(practitioner, { getState }) {
        const practitionerApi = (await cardinalApi(getState))?.healthcareParty
        return guard([practitionerApi], async (): Promise<HealthcareParty> => {
          const updatedPractitioner = !!practitioner.rev ? await practitionerApi?.modifyHealthcareParty(practitioner) : await practitionerApi?.createHealthcareParty(practitioner)
          if (!updatedPractitioner) {
            throw new Error('Practitioner does not exist')
          }
          return updatedPractitioner
        })
      },
      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'Practitioner', id: 'all' },
              { type: 'Practitioner', id: result.id },
            ]
          : [],
    }),
  }),
})

export const { useGetPractitionerQuery, useCreateOrUpdatePractitionerMutation } = practitionerApiRtk
