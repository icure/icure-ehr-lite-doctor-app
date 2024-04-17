import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Patient, User } from '@icure/ehr-lite-sdk'
import { guard, ehrLiteApi, currentUser, setUser } from '../services/auth.api'

export const userApiRtk = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User | undefined, string>({
      async queryFn(id, { getState }) {
        const userApi = (await ehrLiteApi(getState))?.userApi
        return guard(
          [userApi],
          async (): Promise<User> => {
            const user = await userApi?.get(id)
            if (!user) {
              throw new Error('User does not exist')
            }
            return user
          },
          User,
        )
      },
      providesTags: ['User'],
    }),
    createAndInvitePatient: builder.mutation<User | undefined, Patient>({
      async queryFn(patient, { getState, dispatch }) {
        const userApi = (await ehrLiteApi(getState))?.userApi
        return guard(
          [userApi],
          async (): Promise<User> => {
            const createdUser = await userApi?.createAndInviteFor(Patient.toJSON(patient), 3600)
            if (!createdUser) {
              throw new Error('User does not exist')
            }
            return createdUser
          },
          User,
        )
      },
      invalidatesTags: (result, error, arg) => [
        { type: 'User', id: 'all' },
        { type: 'User', id: arg.id },
      ],
    }),
  }),
})

export const { useGetUserQuery, useCreateAndInvitePatientMutation } = userApiRtk
