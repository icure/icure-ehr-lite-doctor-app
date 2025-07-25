import { EntityTemplate } from '@icure/cardinal-sdk'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cardinalApi, guard } from '../services/auth.api'

export const entityTemplateApiRtk = createApi({
  reducerPath: 'entityTemplateApi',
  tagTypes: ['EntityTemplate'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createEntityTemplate: builder.mutation<EntityTemplate | undefined, EntityTemplate>({
      async queryFn(entityTemplate, { getState }) {
        const entityTemplateApi = (await cardinalApi(getState))?.entityTemplate
        return guard([entityTemplateApi], async ([entityTemplateApi]): Promise<EntityTemplate | undefined> => {
          const prescriptionTemplate = await entityTemplateApi?.createEntityTemplate(entityTemplate)

          if (!prescriptionTemplate) {
            throw new Error('Error while creating prescription template')
          }

          return prescriptionTemplate
        })
      },

      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'EntityTemplate', id: 'all' },
              { type: 'EntityTemplate', id: result.id },
            ]
          : [],
    }),
    modifyEntityTemplate: builder.mutation<EntityTemplate | undefined, EntityTemplate>({
      async queryFn(documentTemplate, { getState }) {
        const entityTemplateApi = (await cardinalApi(getState))?.entityTemplate
        return guard([entityTemplateApi], async ([entityTemplateApi]): Promise<EntityTemplate | undefined> => {
          const prescriptionTemplate = await entityTemplateApi?.modifyEntityTemplate(documentTemplate)

          if (!prescriptionTemplate) {
            throw new Error('Error while creating prescription template')
          }

          return prescriptionTemplate
        })
      },

      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'EntityTemplate', id: 'all' },
              { type: 'EntityTemplate', id: result.id },
            ]
          : [],
    }),
    getEntityTemplate: builder.query<EntityTemplate | undefined, string>({
      async queryFn(documentTemplateId, { getState }) {
        const entityTemplateApi = (await cardinalApi(getState))?.entityTemplate
        return guard([entityTemplateApi], async ([entityTemplateApi]): Promise<EntityTemplate | undefined> => {
          return await entityTemplateApi?.getEntityTemplate(documentTemplateId)
        })
      },
      providesTags: (res) => (res ? [{ type: 'EntityTemplate', id: res.id }] : []),
    }),
    listEntityTemplatesBy: builder.query<EntityTemplate[] | undefined, { userId: string; type: string }>({
      async queryFn({ userId, type }, { getState }) {
        const entityTemplateApi = (await cardinalApi(getState))?.entityTemplate
        return guard([entityTemplateApi], async ([entityTemplateApi]): Promise<Array<EntityTemplate> | undefined> => {
          return await entityTemplateApi?.listEntityTemplatesBy(userId, type)
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'EntityTemplate', id: 'all' },
              ...res.map((entityTemplate) => {
                return {
                  type: 'EntityTemplate',
                  id: entityTemplate.id,
                } as { type: 'EntityTemplate'; id: string }
              }),
            ]
          : [],
    }),
    getEntityTemplates: builder.query<EntityTemplate[] | undefined, string[]>({
      async queryFn(templatesIds, { getState }) {
        const entityTemplateApi = (await cardinalApi(getState))?.entityTemplate
        return guard([entityTemplateApi], async ([entityTemplateApi]): Promise<Array<EntityTemplate> | undefined> => {
          return await entityTemplateApi?.getEntityTemplates(templatesIds)
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'EntityTemplate', id: 'all' },
              ...res.map((entityTemplate) => {
                return {
                  type: 'EntityTemplate',
                  id: entityTemplate.id,
                } as { type: 'EntityTemplate'; id: string }
              }),
            ]
          : [],
    }),
  }),
})

export const { useCreateEntityTemplateMutation, useModifyEntityTemplateMutation, useGetEntityTemplatesQuery, useListEntityTemplatesByQuery } = entityTemplateApiRtk
