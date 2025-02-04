import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { guard, cardinalApi } from '../services/auth.api'
import { randomUuid, User } from '@icure/cardinal-sdk'

export const userApiRtk = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<User | undefined, { email: string; id: string; name: string }>({
      async queryFn({ email, id, name }, { getState }) {
        const userApi = (await cardinalApi(getState))?.user
        return guard([userApi], async (): Promise<User> => {
          const createdUser = await userApi?.createUser(
            new User({
              id: randomUuid(),
              name: name,
              email: email,
              patientId: id,
            }),
          )
          if (!createdUser) {
            throw new Error('User does not exist')
          }
          return new User(createdUser)
        })
      },
      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'User', id: 'all' },
              { type: 'User', id: result.id },
            ]
          : [],
    }),
  }),
})

export const { useCreateUserMutation } = userApiRtk
