import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { guard, ehrLiteApi } from '../services/auth.api'
import { DecryptedPatient } from '@icure/cardinal-sdk'

export const userApiRtk = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    // createAndInvitePatient: builder.mutation<User | undefined, DecryptedPatient>({
    //   async queryFn(patient, { getState }) {
    //     const userApi = (await ehrLiteApi(getState))?.userApi
    //     return guard([userApi], async (): Promise<User> => {
    //       const createdUser = await userApi?.createAndInviteFor(patient, 3600)
    //       if (!createdUser) {
    //         throw new Error('User does not exist')
    //       }
    //       return new User(createdUser)
    //     })
    //   },
    //   invalidatesTags: (result, error, arg) => [
    //     { type: 'User', id: 'all' },
    //     { type: 'User', id: arg.id },
    //   ],
    // }),
  }),
})

// export const { useCreateAndInvitePatientMutation } = userApiRtk
