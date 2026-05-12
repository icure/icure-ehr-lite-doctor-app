import { CodeFilters, DecryptedPatient, intersection, Patient } from '@icure/cardinal-sdk'
import { ContactFilters, FormFilters, PatientFilters, union } from '@icure/cardinal-sdk/filters.mjs'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CUSTOM_TAG_TYPE } from '../../constants'
import { allPatientsTagsEnum } from '../../helpers/types'
import { cardinalApi, guard } from '../services/auth.api'
import { loadFromIterator } from './utils'

export const patientApiRtk = createApi({
  reducerPath: 'patientApi',
  tagTypes: ['Patient'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createOrUpdatePatient: builder.mutation<DecryptedPatient | undefined, DecryptedPatient>({
      async queryFn(patient, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        const userApi = (await cardinalApi(getState))?.user
        return guard([patientApi, userApi], async ([patientApi, userApi]): Promise<DecryptedPatient> => {
          const currentUser = await userApi?.getCurrentUser()
          const updatedPatient = patient.rev
            ? await patientApi?.modifyPatient(patient)
            : await patientApi?.createPatient(await patientApi.withEncryptionMetadata(patient, { user: currentUser }))
          console.log({ updatedPatient })
          if (!updatedPatient) {
            throw new Error('Patient does not exist')
          }
          return new DecryptedPatient(updatedPatient)
        })
      },

      invalidatesTags: (result, _, arg) =>
        !result?.rev
          ? []
          : result.rev.startsWith('1-')
            ? [
                {
                  type: 'Patient',
                  id: 'all',
                },
              ]
            : [{ type: 'Patient', id: arg.id }],
    }),
    createPatients: builder.mutation<DecryptedPatient[] | undefined, DecryptedPatient[]>({
      async queryFn(patients, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        const userApi = (await cardinalApi(getState))?.user

        return guard([patientApi, userApi], async (): Promise<Array<DecryptedPatient> | undefined> => {
          const currentUser = await userApi?.getCurrentUser()
          const patientsWithEncryptionMetadata = await Promise.all(patients.map(async (patient) => await patientApi?.withEncryptionMetadata(patient, { user: currentUser })))

          // Filter out undefined values
          const validPatients = patientsWithEncryptionMetadata.filter((patient): patient is DecryptedPatient => patient !== undefined)

          if (validPatients.length === 0) {
            throw new Error('No valid patients to create')
          }

          return await patientApi?.createPatients(validPatients)
        })
      },
      invalidatesTags: [{ type: 'Patient', id: 'all' }],
    }),
    filterPatientsByDataOwner: builder.query<string[] | undefined, void>({
      async queryFn(_, { getState }) {
        const api = await cardinalApi(getState)

        return guard([api], async ([api]): Promise<string[]> => {
          const patientApi = api.patient
          const parentId = (await api.healthcareParty.getCurrentHealthcareParty()).parentId
          const filterForMatch = parentId ? union(PatientFilters.allPatientsForSelf(), PatientFilters.allPatientsForDataOwner(parentId)) : PatientFilters.allPatientsForSelf()
          const patientsList = await patientApi?.matchPatientsBy(filterForMatch)
          if (!patientsList) {
            throw new Error('Patients do not found')
          }

          return patientsList
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [{ type: 'Patient', id: 'all' }],
    }),
    filterPatientsByFuzzyNameForDataOwner: builder.query<
      string[] | undefined,
      {
        practitionerId: string
        searchString: string
      }
    >({
      async queryFn({ practitionerId, searchString }, { getState }) {
        const api = await cardinalApi(getState)
        const parentId = (await api?.healthcareParty.getCurrentHealthcareParty())?.parentId

        return guard([api], async ([api]): Promise<string[]> => {
          const patientApi = api.patient

          const customTags =
            (await loadFromIterator(await api.code.filterCodesBy(CodeFilters.byRegionTypeCodeVersion('be', { type: CUSTOM_TAG_TYPE })), 1000))
              ?.map((c) => c.code)
              .filter((c) => !!c) || []

          const predicates = searchString
            .trim()
            .split(/\s+/)
            .map((word) => {
              const matchingTags = ([...allPatientsTagsEnum, ...customTags] as string[])
                .filter((e) => e.toLowerCase().includes(word.toLowerCase()))
                .map((c) =>
                  parentId
                    ? union(PatientFilters.byTagForSelf(CUSTOM_TAG_TYPE, c), PatientFilters.byTagForDataOwner(parentId, CUSTOM_TAG_TYPE, c))
                    : PatientFilters.byTagForSelf(CUSTOM_TAG_TYPE, c),
                )
              const practitionerAndParentFilterByFuzzyName = parentId
                ? union(PatientFilters.byFuzzyNameForDataOwner(parentId, word), PatientFilters.byFuzzyNameForDataOwner(practitionerId, word))
                : PatientFilters.byFuzzyNameForDataOwner(practitionerId, word)
              const practitionerAndParentFilterByAddressPostalCodeHouseNumber = parentId
                ? union(PatientFilters.byAddressPostalCodeHouseNumberForDataOwner(parentId, '', word), PatientFilters.byAddressPostalCodeHouseNumberForSelf('', word))
                : PatientFilters.byAddressPostalCodeHouseNumberForSelf('', word)

              const partialFilterByFuzzyName = matchingTags.length
                ? union(practitionerAndParentFilterByFuzzyName, matchingTags.length == 1 ? matchingTags[0] : union(matchingTags[0], matchingTags[1], ...matchingTags.slice(2)))
                : practitionerAndParentFilterByFuzzyName

              return word.match(/[0-9]+/) ? union(partialFilterByFuzzyName, practitionerAndParentFilterByAddressPostalCodeHouseNumber) : partialFilterByFuzzyName
            })

          const patientsList = await patientApi?.matchPatientsBy(predicates.length == 1 ? predicates[0] : intersection(predicates[0], predicates[1], ...predicates.slice(2)))
          if (!patientsList) {
            throw new Error('Patients do not found')
          }

          return patientsList
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [{ type: 'Patient', id: 'all' }],
    }),
    getPatientsByIds: builder.query<DecryptedPatient[] | undefined, string[]>({
      async queryFn(patientsIds, { getState }) {
        if (!patientsIds.length) {
          return { data: [] }
        }
        const patientApi = (await cardinalApi(getState))?.patient
        return guard([patientApi], async ([patientApi]): Promise<DecryptedPatient[]> => {
          const patientsList = (await patientApi!.tryAndRecover.getPatients(patientsIds)).filter((p): p is DecryptedPatient => !!p)
          if (!patientsList) {
            throw new Error('Patients do not found')
          }
          return patientsList
        })
      },
      providesTags: (res) =>
        res
          ? [
              { type: 'Patient', id: 'all' },
              ...res.map((patient) => {
                return {
                  type: 'Patient',
                  id: patient.id,
                } as { type: 'Patient'; id: string }
              }),
            ]
          : [],
    }),
    deletePatient: builder.mutation<string | undefined, Patient>({
      async queryFn(patient, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        const formApi = (await cardinalApi(getState))?.form
        const contactApi = (await cardinalApi(getState))?.contact
        const healthcarePartyApi = (await cardinalApi(getState))?.healthcareParty
        return guard([patientApi, formApi, contactApi, healthcarePartyApi], async ([patientApi, formApi, contactApi, healthcarePartyApi]) => {
          const hcp = await healthcarePartyApi.getCurrentHealthcareParty()
          const forms = await loadFromIterator(await formApi.filterFormsBy(FormFilters.byPatientsOpeningDateForDataOwner(hcp.id, [patient])), 100000)
          const contacts = await loadFromIterator(await contactApi.filterContactsBy(ContactFilters.byPatientsForDataOwner(hcp.id, [patient])), 100000)
          if (forms.length > 0) {
            await formApi.deleteForms(forms)
          }
          if (contacts.length > 0) {
            await contactApi.deleteContacts(contacts)
          }

          const result = await patientApi?.deletePatient(patient)
          if (!result) {
            throw new Error('Patient can`t be deleted')
          }
          return result.id
        })
      },
      invalidatesTags: (id) => [{ type: 'Patient', id: id }],
    }),
    deletePatients: builder.mutation<(string | undefined)[] | undefined, Patient[]>({
      async queryFn(patients, { getState }) {
        const patientApi = (await cardinalApi(getState))?.patient
        const formApi = (await cardinalApi(getState))?.form
        const contactApi = (await cardinalApi(getState))?.contact
        const healthcarePartyApi = (await cardinalApi(getState))?.healthcareParty
        return guard([patientApi, formApi, contactApi, healthcarePartyApi], async ([patientApi, formApi, contactApi, healthcarePartyApi]) => {
          const hcp = await healthcarePartyApi.getCurrentHealthcareParty()
          await patients.reduce(async (pr, p) => {
            await pr

            const forms = await loadFromIterator(await formApi.filterFormsBy(FormFilters.byPatientsOpeningDateForDataOwner(hcp.id, [p])), 100000)
            const contacts = await loadFromIterator(await contactApi.filterContactsBy(ContactFilters.byPatientsForDataOwner(hcp.id, [p])), 100000)

            if (forms.length > 0) {
              await formApi.deleteForms(forms)
            }
            if (contacts.length > 0) {
              await contactApi.deleteContacts(contacts)
            }
            return true
          }, Promise.resolve(true))

          const results = await patientApi?.deletePatients(patients)
          if (!results) {
            throw new Error('Patients can`t be deleted')
          }
          const r = results.map((res) => res.id)
          console.log(r)

          return r
        })
      },
      invalidatesTags: (res) => [
        ...(res?.map((id) => {
          return { type: 'Patient', id } as { type: 'Patient'; id: string }
        }) || []),
      ],
    }),

    sharePatientWith: builder.mutation<
      DecryptedPatient | undefined,
      {
        patient: DecryptedPatient
        delegateId: string
      }
    >({
      async queryFn({ patient, delegateId }, { getState }) {
        const { patient: patientApi, form: formApi, contact: contactApi, healthcareParty: healthcarePartyApi } = (await cardinalApi(getState)) ?? {}
        return guard([patientApi, formApi, contactApi, healthcarePartyApi], async ([patientApi, formApi, contactApi, healthcarePartyApi]): Promise<DecryptedPatient> => {
          const currentHcp = await healthcarePartyApi?.getCurrentHealthcareParty()
          if (!currentHcp) {
            throw new Error('Cannot share patient-elements with delegate, current healthcare party not found')
          }

          const updatedPatient = await patientApi?.shareWith(delegateId, patient)
          if (!updatedPatient) {
            throw new Error('Patient does not exist')
          }

          const formsIt = await formApi?.filterFormsBy(FormFilters.byPatientsOpeningDateForDataOwner(currentHcp.id, [updatedPatient]))
          if (formsIt) {
            while (true) {
              const forms = await formsIt.next(5)
              if (forms.length === 0) {
                break
              }
              await Promise.all(forms.map((form) => formApi?.shareWith(delegateId, form)))
            }
          }

          const contactsIt = await contactApi?.filterContactsBy(ContactFilters.byPatientsForDataOwner(currentHcp.id, [updatedPatient]))
          if (contactsIt) {
            while (true) {
              const contacts = await contactsIt.next(5)
              if (contacts.length === 0) {
                break
              }
              await Promise.all(contacts.map((contact) => contactApi?.shareWith(delegateId, contact)))
            }
          }

          return new DecryptedPatient(updatedPatient)
        })
      },

      invalidatesTags: (result, error, arg) =>
        !result?.rev
          ? []
          : result.rev.startsWith('1-')
            ? [
                {
                  type: 'Patient',
                  id: 'all',
                },
              ]
            : [{ type: 'Patient', id: arg.patient.id }],
    }),
  }),
})

export const {
  useCreateOrUpdatePatientMutation,
  useFilterPatientsByDataOwnerQuery,
  useFilterPatientsByFuzzyNameForDataOwnerQuery,
  useGetPatientsByIdsQuery,
  useDeletePatientMutation,
  useDeletePatientsMutation,
  useSharePatientWithMutation,
  useCreatePatientsMutation,
} = patientApiRtk
