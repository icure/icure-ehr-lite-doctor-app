import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { guard, ehrLiteApi } from '../services/auth.api'
import { Agenda } from '@icure/api'

enum AgendaTags {
  Agenda = 'Agenda',
}

export const agendaApiRtk = createApi({
  reducerPath: 'agendaApi',
  tagTypes: [AgendaTags.Agenda],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getAgenda: builder.query<Agenda | undefined, string>({
      async queryFn(id, { getState }) {
        const agendaApi = (await ehrLiteApi(getState))?.baseApi?.agendaApi
        return guard([agendaApi], async (): Promise<Agenda> => {
          const agenda = await agendaApi?.getAgenda(id)
          if (!agenda) {
            throw new Error('Agenda does not exist')
          }
          return new Agenda(agenda)
        })
      },
      providesTags: (res) => (res ? [{ type: AgendaTags.Agenda, id: res.id }] : []),
    }),
    createAgenda: builder.mutation<Agenda | undefined, Agenda>({
      async queryFn(agenda, { getState }) {
        const agendaApi = (await ehrLiteApi(getState))?.baseApi?.agendaApi
        return guard([agendaApi], async (): Promise<Agenda> => {
          const newAgenda = await agendaApi?.createAgenda(agenda)
          if (!newAgenda) {
            throw new Error('Agenda creation failed')
          }
          return new Agenda(newAgenda)
        })
      },
      invalidatesTags: (result, error, arg) =>
        !result?.rev ? [] : result.rev.startsWith('1-') ? [{ type: AgendaTags.Agenda, id: 'all' }] : [{ type: AgendaTags.Agenda, id: arg.id }],
    }),
    updateAgenda: builder.mutation<Agenda | undefined, Agenda>({
      async queryFn(agenda, { getState, dispatch }) {
        const agendaApi = (await ehrLiteApi(getState))?.baseApi?.agendaApi
        return guard([agendaApi], async (): Promise<Agenda> => {
          const updatedAgenda = await agendaApi?.modifyAgenda(agenda)
          if (!updatedAgenda) {
            throw new Error('Agenda update failed')
          }
          return new Agenda(updatedAgenda)
        })
      },
      invalidatesTags: (result, error, arg) =>
        !result?.rev ? [] : result.rev.startsWith('1-') ? [{ type: AgendaTags.Agenda, id: 'all' }] : [{ type: AgendaTags.Agenda, id: arg.id }],
    }),
  }),
})

export const { useGetAgendaQuery, useCreateAgendaMutation, useUpdateAgendaMutation } = agendaApiRtk
