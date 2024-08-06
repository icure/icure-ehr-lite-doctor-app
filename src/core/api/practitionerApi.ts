import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Practitioner, PractitionerApi } from '@icure/ehr-lite-sdk'
import { guard, ehrLiteApi } from '../services/auth.api'

export const practitionerApiRtk = createApi({
  reducerPath: 'practitionerApi',
  tagTypes: ['Practitioner'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getPractitioner: builder.query<Practitioner | undefined, string>({
      async queryFn(id, { getState }) {
        const practitionerApi = (await ehrLiteApi(getState))?.practitionerApi
        return guard(
          [practitionerApi],
          async (): Promise<Practitioner> => {
            const practitioner = await practitionerApi?.get(id)
            if (!practitioner) {
              throw new Error('Practitioner does not exist')
            }
            return practitioner
          },
          Practitioner,
        )
      },
      providesTags: (res) => (res ? [{ type: 'Practitioner', id: res.id }] : []),
    }),

    createOrUpdatePractitioner: builder.mutation<Practitioner | undefined, Practitioner>({
      async queryFn(practitioner, { getState, dispatch }) {
        const practitionerApi = (await ehrLiteApi(getState))?.practitionerApi
        return guard(
          [practitionerApi],
          async (): Promise<Practitioner> => {
            const updatedPractitioner = await practitionerApi?.createOrModify(practitioner)
            if (!updatedPractitioner) {
              throw new Error('Practitioner does not exist')
            }
            return updatedPractitioner
          },
          Practitioner,
        )
      },
      invalidatesTags: (result, error, arg) => [
        { type: 'Practitioner', id: 'all' },
        { type: 'Practitioner', id: arg.id },
      ],
    }),
  }),
})

export const { useGetPractitionerQuery, useCreateOrUpdatePractitionerMutation } = practitionerApiRtk
