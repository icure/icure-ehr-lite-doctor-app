import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '@icure/ehr-lite-sdk'
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
    // updateUser: builder.mutation<User | undefined, User>({
    //   async queryFn(user, { getState, dispatch }) {
    //     const userApi = (await ehrLiteApi(getState))?.userApi
    //     return guard([userApi], async () => {
    //       const updatedUser = await userApi?.createOrModify(user)
    //
    //       if (user.id === currentUser(getState)?.id && updatedUser) {
    //         dispatch(setUser({ user: updatedUser.marshal() as User }))
    //       }
    //
    //       return updatedUser
    //     })
    //   },
    //   invalidatesTags: [{ type: 'User', id: 'all' }],
    // }),
  }),
})

export const { useGetUserQuery } = userApiRtk
