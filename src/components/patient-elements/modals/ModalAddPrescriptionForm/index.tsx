import { EnsembleAuthenticationProvider, IccAuthApi, IccBesamv2Api, NoAuthenticationProvider, SamVersion } from '@icure/api'
import { HealthcareParty, Patient } from '@icure/be-fhc-lite-api'
import {
  cardinalLanguage,
  deleteCertificate,
  fetchSamVersion,
  loadCertificateInformation,
  MedicationSearch,
  MedicationType,
  PractitionerCertificate,
  PrescribedMedicationType,
  PrescriptionList,
  PrescriptionModal,
  PrescriptionPrintModal,
  sendRecipe,
  uploadAndEncryptCertificate,
  validateDecryptedCertificate,
} from '@icure/cardinal-prescription-be-react'
import { DecryptedContact, DecryptedContent, DecryptedPatient, DecryptedService, Identifier, Medication } from '@icure/cardinal-sdk'
import { createSelector } from '@reduxjs/toolkit'
import { Alert, Select, SelectProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useCreateContactMutation } from '../../../../core/api/contactApi'
import { useGetEntityTemplatesQuery, useListEntityTemplatesByQuery } from '../../../../core/api/entityTemplateApi'
import { useGetPractitionerQuery } from '../../../../core/api/practitionerApi'
import { fhcMedicationToCardinalMedication } from '../../../../core/api/utils'
import { useAppSelector } from '../../../../core/hooks'
import { CardinalApiState } from '../../../../core/services/auth.api'
import { getNumericDate } from '../../../../helpers/dateFormaters'

import { CustomModal } from '../../../common/CustomModal'
import './index.css'
import { SpinLoader } from '../../../common/SpinLoader'
import { PRESCRIPTION_ENTITY_TEMPLATE_TYPE } from '../../../practitioner-elements/PrescriptionTemplates'

interface modalAddConsultationFormFormProps {
  isVisible: boolean
  onClose: () => void
  patient: DecryptedPatient
}

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    healthcarePartyId: cardinalApi.user?.healthcarePartyId,
    userId: cardinalApi.user?.id,
  }),
)

const vendor = {
  vendorName: 'vendorName',
  vendorEmail: 'support@test.be',
  vendorPhone: '+3200000000',
}
const samPackage = {
  packageName: 'test[test/1.0]-freehealth-connector',
  packageVersion: '1.0]-freehealth-connector',
}

const practitionerCredentials = {
  username: 'ls+230725@icure.com',
  password: '990a765c-387a-4c17-854d-b919d0e324cc',
}
const ICURE_URL = 'https://nightly.icure.cloud'
const CARDINAL_PRESCRIPTION_LANGUAGE = 'en'

export const ModalAddPrescriptionForm = ({ isVisible, onClose, patient }: modalAddConsultationFormFormProps) => {
  // Service instance refs
  const [certificateUploaded, setCertificateUploaded] = useState(false)
  const [isCertificateValid, setIsCertificateValid] = useState(false)
  const [errorWhileVerifyingCertificate, setErrorWhileVerifyingCertificate] = useState<string | undefined>()
  const [samVersion, setSamVersion] = useState<SamVersion | undefined>()
  const [passphrase, setPassphrase] = useState<string | undefined>()
  const [cardinalSdkInstance, setCardinalSdkInstance] = useState<IccBesamv2Api | undefined>(undefined)
  const [isPrescriptionModalOpen, setPrescriptionModalOpen] = useState(false)
  const [medicationToPrescribe, setMedicationToPrescribe] = useState<MedicationType>()
  const [prescriptionToModify, setPrescriptionToModify] = useState<PrescribedMedicationType>()
  const [prescriptionModalMode, setPrescriptionModalMode] = useState<'create' | 'modify' | null>(null)
  const [prescriptions, setPrescriptions] = useState<PrescribedMedicationType[]>([])
  const [isPrescriptionPrintModalOpen, setPrescriptionPrintModalOpen] = useState(false)
  const [selectedPrescriptionTemplateIds, setSelectedPrescriptionTemplateIds] = useState<string[] | undefined>(undefined)

  cardinalLanguage.setLanguage(CARDINAL_PRESCRIPTION_LANGUAGE)

  // Initialize all backend services on mount
  useEffect(() => {
    const initializeAll = async () => {
      try {
        // Initialize Cardinal SDK (SAM)
        const cardinalBeSamAInstance: IccBesamv2Api = new IccBesamv2Api(
          ICURE_URL,
          {},
          new EnsembleAuthenticationProvider(new IccAuthApi(ICURE_URL, {}, new NoAuthenticationProvider()), practitionerCredentials.username, practitionerCredentials.password),
        )
        setCardinalSdkInstance(cardinalBeSamAInstance)
        setSamVersion(await fetchSamVersion(cardinalBeSamAInstance))

        try {
          if (practitioner?.ssin) {
            const res = await loadCertificateInformation(practitioner?.ssin)
            setCertificateUploaded(!!res)
          }
        } catch {
          setCertificateUploaded(false)
        }
      } catch (error) {
        console.error('Initialization error:', error)
        setErrorWhileVerifyingCertificate('Initialization failed')
      }
    }
    initializeAll()
  }, [])

  const validateCertificate = async (passphrase: string) => {
    try {
      const res = await validateDecryptedCertificate(practitioner as HealthcareParty, passphrase)

      setIsCertificateValid(res.status)
      setErrorWhileVerifyingCertificate(res.error?.[CARDINAL_PRESCRIPTION_LANGUAGE])
      setCertificateUploaded(!res.error)
    } catch (error) {
      setIsCertificateValid(false)
      setErrorWhileVerifyingCertificate('Unexpected error')
      setCertificateUploaded(false)

      console.error('Error while validating certificate from the Demo App:', error)
    } finally {
    }
  }

  useEffect(() => {
    if (certificateUploaded && passphrase) {
      validateCertificate(passphrase).catch(console.error)
    } else {
      setIsCertificateValid(false)
      setErrorWhileVerifyingCertificate(undefined)
    }
  }, [passphrase, certificateUploaded])

  // We do this if the certificate is uploaded, but the passphrase is not set
  const onDecryptCertificate = (passphrase: string) => {
    setPassphrase(passphrase)
  }
  // We do this if no certificate is uploaded
  const onUploadCertificate = async (certificateData: ArrayBuffer, passphrase: string) => {
    if (!practitioner?.ssin) return

    try {
      await uploadAndEncryptCertificate(practitioner?.ssin, passphrase, certificateData)

      onDecryptCertificate(passphrase)
      setCertificateUploaded(true)
    } catch (error) {
      setCertificateUploaded(false)
      console.error('Error while uploading certificate from the Demo App:', error)
    }
  }
  const onResetCertificate = async (): Promise<void> => {
    if (!practitioner?.ssin) return
    await deleteCertificate(practitioner?.ssin)
    setPassphrase(undefined)
    setCertificateUploaded(false)
    setIsCertificateValid(false)
    setErrorWhileVerifyingCertificate(undefined)
  }

  const onCreatePrescription = (medication: MedicationType) => {
    setPrescriptionModalOpen(true)
    setPrescriptionModalMode('create')
    setMedicationToPrescribe(medication)
  }
  const onClosePrescriptionModal = () => {
    setPrescriptionModalMode(null)
    setMedicationToPrescribe(undefined)
    setPrescriptionToModify(undefined)
    setPrescriptionModalOpen(false)
  }
  const onSubmitCreatePrescription = (newPrescriptions: PrescribedMedicationType[]) => {
    setPrescriptions((prev) => [...prev, ...newPrescriptions])
    onClosePrescriptionModal()
  }
  const onSubmitModifyPrescription = (prescriptionsToModify: PrescribedMedicationType[]) => {
    setPrescriptions((prev) => prev?.map((item) => (item.uuid === prescriptionsToModify[0].uuid ? prescriptionsToModify[0] : item)))
    onClosePrescriptionModal()
  }
  const onModifyPrescription = (prescription: PrescribedMedicationType) => {
    setPrescriptionModalOpen(true)
    setPrescriptionModalMode('modify')
    setPrescriptionToModify(prescription)
  }
  const onDeletePrescription = (prescription: PrescribedMedicationType) => {
    setPrescriptions((prev) => prev?.filter((item) => item.uuid !== prescription.uuid))
  }
  const onClosePrescriptionPrintModal = () => setPrescriptionPrintModalOpen(false)
  const handleSendPrescriptions = async () => {
    console.log('click')
    const meds = await Promise.all(
      prescriptions
        .filter((m) => !m.rid)
        .map(async (med) => {
          try {
            if (!!samVersion?.version && !!passphrase) {
              const res = await sendRecipe(
                {
                  vendor,
                  samPackage,
                },
                samVersion.version,
                new HealthcareParty({
                  ...practitioner,
                  addresses: practitioner?.addresses?.map((a) => ({
                    ...a,
                    addressType: a.addressType?.toLowerCase() ?? 'work',
                    telecoms: a.telecoms.map((t) => ({ ...t, telecomType: t.telecomType?.toLowerCase() ?? 'email' })),
                  })),
                }),
                new Patient({
                  ...patient,
                  addresses: patient?.addresses?.map((a) => ({
                    ...a,
                    addressType: a.addressType?.toLowerCase() ?? 'home',
                    telecoms: a.telecoms.map((t) => ({ ...t, telecomType: t.telecomType?.toLowerCase() ?? 'email' })),
                  })),
                }),
                med,
                passphrase,
              )

              setPrescriptions((prev) =>
                prev.map((item) =>
                  item.uuid === med.uuid
                    ? {
                        ...item,
                        rid: res[0]?.rid,
                      }
                    : item,
                ),
              )
              return new Medication({ ...fhcMedicationToCardinalMedication(med.medication), prescriptionRID: res[0]?.rid })
            } else {
              return fhcMedicationToCardinalMedication(med.medication)
            }
          } catch (e) {
            console.error(e)
          }
        }),
    )
    const prescriptionServices = meds.map(
      (m) =>
        new DecryptedService({
          medicalLocationId: undefined,
          id: uuid(),
          label: 'Prescription',
          identifier: [new Identifier({ system: 'cardinal', value: 'prescription' })],
          content: {
            en: new DecryptedContent({
              medicationValue: m,
            }),
          },
        }),
    )

    const contact = new DecryptedContact({
      id: uuid(),
      descr: `${practitioner?.speciality ?? 'Doctor'} consultation`,
      services: prescriptionServices,

      closingDate: getNumericDate(new Date()), // Closing the Examination
    })

    createContact({ patient, contact })
  }
  const handlePrintPrescriptions = async () => {
    await handleSendPrescriptions()
    setPrescriptionPrintModalOpen(true)
  }

  const { healthcarePartyId, userId } = useAppSelector(reduxSelector)
  const { data: practitioner } = useGetPractitionerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })

  const { data: prescriptionTemplatesList, isFetching: isPractitionerTemplatesListFetching } = useListEntityTemplatesByQuery(
    {
      userId: userId ?? '',
      type: PRESCRIPTION_ENTITY_TEMPLATE_TYPE,
    },
    { skip: !userId },
  )

  const { data: prescriptionTemplates, isFetching: isPractitionerTemplatesFetching } = useGetEntityTemplatesQuery(selectedPrescriptionTemplateIds ?? [], {
    skip: selectedPrescriptionTemplateIds === undefined || selectedPrescriptionTemplateIds.length === 0,
  })

  const [createContact, { error: createContactError, isError: isCreateContactError }] = useCreateContactMutation()

  if (isCreateContactError) {
    console.error(createContactError)
  }

  useEffect(() => {
    if (prescriptionTemplates && prescriptionTemplates.length > 0) {
      const prescriptionsFromTemplates: PrescribedMedicationType[] = prescriptionTemplates.flatMap((template: { entity: PrescribedMedicationType[] }) => template.entity)

      console.log({ prescriptionTemplates, prescriptionsFromTemplates })

      setPrescriptions((prev: PrescribedMedicationType[]) => {
        const existingUuids = new Set(prev.map((p) => p.uuid))
        const newPrescriptions = prescriptionsFromTemplates.filter((p) => !existingUuids.has(p.uuid))
        return [...prev, ...newPrescriptions]
      })
    }
  }, [prescriptionTemplates])

  const handleOnClose = () => {
    onClose()
  }

  const options: SelectProps['options'] = prescriptionTemplatesList?.map((template) => {
    return {
      label: template.descr,
      value: template.id,
    }
  })

  const handleTemplateChange = (ids: string[]) => {
    console.log({ ids })
    setSelectedPrescriptionTemplateIds(ids)
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleOnClose}
      secondaryBtnTitle="Cancel"
      // handleClickPrimaryBtn={() => form.submit()}
      // primaryBtnTitle="Save"
      title="Add consultation"
    >
      <div className="modalAddConsultationForm">
        {(isPractitionerTemplatesListFetching || isPractitionerTemplatesFetching) && <SpinLoader />}
        {samVersion?.version ? <Alert type="success" message={'SamVersion: ' + samVersion?.version} /> : <Alert type="error" message="SamVersion: Undefined" />}

        <PractitionerCertificate
          certificateValid={isCertificateValid}
          certificateUploaded={certificateUploaded}
          errorWhileVerifyingCertificate={errorWhileVerifyingCertificate}
          onResetCertificate={onResetCertificate}
          onUploadCertificate={onUploadCertificate}
          onDecryptCertificate={onDecryptCertificate}
        />

        <div className="modalAddConsultationForm__form__inputs">
          {cardinalSdkInstance && isCertificateValid && (
            <>
              <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Prescription templates" onChange={handleTemplateChange} options={options} />

              <MedicationSearch sdk={cardinalSdkInstance!} deliveryEnvironment="P" onAddPrescription={onCreatePrescription} disableInputEventsTracking={isPrescriptionModalOpen} />
            </>
          )}
        </div>

        {prescriptions.length !== 0 && (
          <PrescriptionList
            handleDeletePrescription={onDeletePrescription}
            handleModifyPrescription={onModifyPrescription}
            prescribedMedications={prescriptions}
            handleSendPrescriptions={handleSendPrescriptions}
            handlePrintPrescriptions={handlePrintPrescriptions}
          />
        )}

        {prescriptionModalMode === 'create' && (
          <PrescriptionModal
            onClose={onClosePrescriptionModal}
            onSubmit={onSubmitCreatePrescription}
            modalMood={prescriptionModalMode}
            medicationToPrescribe={medicationToPrescribe}
          />
        )}
        {prescriptionModalMode === 'modify' && (
          <PrescriptionModal
            onClose={onClosePrescriptionModal}
            onSubmit={onSubmitModifyPrescription}
            modalMood={prescriptionModalMode}
            prescriptionToModify={prescriptionToModify}
          />
        )}
        {isPrescriptionPrintModalOpen && (
          <PrescriptionPrintModal
            prescribedMedications={prescriptions}
            prescriber={practitioner as HealthcareParty}
            patient={patient as Patient}
            closeModal={onClosePrescriptionPrintModal}
          />
        )}
      </div>
    </CustomModal>
  )
}
