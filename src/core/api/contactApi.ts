import { ContactFilters } from '@icure/cardinal-sdk'
import { DecryptedContact, DecryptedPatient, Patient } from '@icure/cardinal-sdk/model.mjs'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cardinalApi, guard } from '../services/auth.api'
import { loadFromIterator, tagsByIds } from './utils'

const twoDaysAgo = () => {
  const date = new Date()
  date.setDate(date.getDate() - 2)
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return parseInt(`${y}${m}${d}`)
}

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
    currentContact: builder.query<DecryptedContact | undefined, { hcPartyId: string; patient: Patient }>({
      async queryFn({ hcPartyId, patient }, { getState }) {
        const contactApi = (await cardinalApi(getState))?.contact
        return guard([contactApi], async ([contactApi]): Promise<DecryptedContact | undefined> => {
          //get the date of two dqys ago formatted as yyyymmdd
          return (
            await (await contactApi.filterContactsBySorted(ContactFilters.byPatientsOpeningDateForDataOwner(hcPartyId, [patient], { from: 99991231, to: twoDaysAgo() }))).next(100)
          ).find((c) => !c.closingDate)
        })
      },
      providesTags: [{ type: 'Contact', id: 'all' }],
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
