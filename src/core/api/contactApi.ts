import { DecryptedContact, DecryptedPatient, Patient } from '@icure/cardinal-sdk/model.mjs'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cardinalApi, guard } from '../services/auth.api'
import { loadFromIterator, tagsByIds } from './utils'

export const contactApiRtk = createApi({
  reducerPath: 'contactApi',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createContact: builder.mutation<DecryptedContact | undefined, { patient: DecryptedPatient; contact: DecryptedContact }>({
      async queryFn({ patient, contact }, { getState }) {
        const contactApi = (await cardinalApi(getState))?.contact
        return guard([contactApi], async ([contactApi]): Promise<DecryptedContact | undefined> => {
          const contactWithMetadata = await contactApi?.withEncryptionMetadata(contact, patient)
          if (!contactWithMetadata) {
            throw new Error('Error while creating ContactWithMetadata')
          }
          return await contactApi?.createContact(contactWithMetadata)
        })
      },

      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'Contact', id: 'all' },
              { type: 'Contact', id: result.id },
            ]
          : [],
    }),
    modifyContact: builder.mutation<DecryptedContact | undefined, DecryptedContact>({
      async queryFn(contact, { getState }) {
        const contactApi = (await cardinalApi(getState))?.contact
        return guard([contactApi], async ([contactApi]): Promise<DecryptedContact | undefined> => {
          return await contactApi?.modifyContact(contact)
        })
      },

      invalidatesTags: (result) =>
        !!result
          ? [
              { type: 'Contact', id: 'all' },
              { type: 'Contact', id: result.id },
            ]
          : [],
    }),
    findContactsByHcPartyPatient: builder.query<DecryptedContact[] | undefined, { hcPartyId: string; patient: Patient }>({
      async queryFn({ hcPartyId, patient }, { getState }) {
        const contactApi = (await cardinalApi(getState))?.contact
        return guard([contactApi], async ([contactApi]): Promise<DecryptedContact[]> => {
          return await loadFromIterator(await contactApi.findContactsByHcPartyPatient(hcPartyId, patient), 1000)
        })
      },
      providesTags: tagsByIds('Contact', 'all'),
    }),
    findContactsWithFormIds: builder.query<DecryptedContact[] | undefined, { hcPartyId: string; formIds: string[] }>({
      async queryFn({ hcPartyId, formIds }, { getState }) {
        const contactApi = (await cardinalApi(getState))?.contact
        return guard([contactApi], async ([contactApi]): Promise<DecryptedContact[]> => {
          return await contactApi.listContactsByHCPartyAndFormIds(hcPartyId, formIds)
        })
      },
      providesTags: tagsByIds('Contact', 'all'),
    }),
  }),
})

export const { useCreateContactMutation, useModifyContactMutation, useFindContactsByHcPartyPatientQuery, useFindContactsWithFormIdsQuery } = contactApiRtk
