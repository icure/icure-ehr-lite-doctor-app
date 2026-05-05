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
import { CodeStub, DecryptedContact, DecryptedContent, DecryptedPatient, DecryptedService, Identifier, Medication } from '@icure/cardinal-sdk'
import { createSelector } from '@reduxjs/toolkit'
import { Alert } from 'antd'
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useCreateContactMutation } from '../../../../core/api/contactApi'
import { useGetPractitionerQuery } from '../../../../core/api/practitionerApi'
import { fhcMedicationToCardinalMedication } from '../../../../core/api/utils'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks'
import { CardinalApiState, setEhealthCertificatePassword } from '../../../../core/services/auth.api'
import { getNumericDate } from '../../../../helpers/dateFormaters'

import { CustomModal } from '../../../common/CustomModal'
import './index.less'

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
    ehealthCertificatePassword: cardinalApi.ehealthCertificatePassword,
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
const FHC_URL = 'https://fhcacc.icure.cloud'
const CARDINAL_PRESCRIPTION_LANGUAGE = 'en'

export const ModalAddPrescriptionForm = ({ isVisible, onClose, patient }: modalAddConsultationFormFormProps) => {
  // Service instance refs

  const dispatch = useAppDispatch()
  const { healthcarePartyId, ehealthCertificatePassword } = useAppSelector(reduxSelector)

  const [certificateUploaded, setCertificateUploaded] = useState(false)
  const [isCertificateValid, setIsCertificateValid] = useState(false)
  const [errorWhileVerifyingCertificate, setErrorWhileVerifyingCertificate] = useState<string | undefined>()
  const [samVersion, setSamVersion] = useState<SamVersion | undefined>()
  const [cardinalSdkInstance, setCardinalSdkInstance] = useState<IccBesamv2Api | undefined>(undefined)
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false)
  const [medicationToPrescribe, setMedicationToPrescribe] = useState<MedicationType>()
  const [prescriptionToModify, setPrescriptionToModify] = useState<PrescribedMedicationType>()
  const [prescriptionModalMode, setPrescriptionModalMode] = useState<'create' | 'modify' | null>(null)
  const [prescriptions, setPrescriptions] = useState<PrescribedMedicationType[]>([])
  const [isPrescriptionPrintModalOpen, setISPrescriptionPrintModalOpen] = useState(false)

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
      const res = await validateDecryptedCertificate(practitioner as HealthcareParty, passphrase, FHC_URL)

      setIsCertificateValid(res.status)
      setErrorWhileVerifyingCertificate(res.error?.[CARDINAL_PRESCRIPTION_LANGUAGE])
      setCertificateUploaded(!res.error)
    } catch (error) {
      setIsCertificateValid(false)
      setErrorWhileVerifyingCertificate('Unexpected error')
      setCertificateUploaded(false)

      console.error('Error while validating certificate from the Demo App:', error)
    }
  }

  useEffect(() => {
    if (certificateUploaded && ehealthCertificatePassword) {
      validateCertificate(ehealthCertificatePassword).catch(console.error)
    } else {
      setIsCertificateValid(false)
      setErrorWhileVerifyingCertificate(undefined)
    }
  }, [ehealthCertificatePassword, certificateUploaded])

  // We do this if the certificate is uploaded, but the passphrase is not set
  const onDecryptCertificate = (passphrase: string) => {
    dispatch(setEhealthCertificatePassword({ password: passphrase }))
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
    dispatch(setEhealthCertificatePassword({}))
    setCertificateUploaded(false)
    setIsCertificateValid(false)
    setErrorWhileVerifyingCertificate(undefined)
  }

  const onCreatePrescription = (medication: MedicationType) => {
    setIsPrescriptionModalOpen(true)
    setPrescriptionModalMode('create')
    setMedicationToPrescribe(medication)
  }
  const onClosePrescriptionModal = () => {
    setPrescriptionModalMode(null)
    setMedicationToPrescribe(undefined)
    setPrescriptionToModify(undefined)
    setIsPrescriptionModalOpen(false)
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
    setIsPrescriptionModalOpen(true)
    setPrescriptionModalMode('modify')
    setPrescriptionToModify(prescription)
  }
  const onDeletePrescription = (prescription: PrescribedMedicationType) => {
    setPrescriptions((prev) => prev?.filter((item) => item.uuid !== prescription.uuid))
  }
  const onClosePrescriptionPrintModal = () => setISPrescriptionPrintModalOpen(false)
  const handleSendPrescriptions = async () => {
    console.log('click')
    const meds = await Promise.all(
      prescriptions
        .filter((m) => !m.rid)
        .map(async (med) => {
          try {
            if (!!samVersion?.version && !!ehealthCertificatePassword) {
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
                ehealthCertificatePassword,
                FHC_URL,
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
              return new Medication({ ...fhcMedicationToCardinalMedication(med.medication), commentForDelivery: res[0]?.rid })
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
      tags: [new CodeStub({ id: 'CD-ITEM|prescription|1' })],
      descr: `${practitioner?.speciality ?? 'Doctor'} prescription`,
      services: prescriptionServices,

      closingDate: getNumericDate(new Date()), // Closing the Examination
    })

    createContact({ patient, contact })
  }
  const handlePrintPrescriptions = async () => {
    await handleSendPrescriptions()
    setISPrescriptionPrintModalOpen(true)
  }

  const { data: practitioner } = useGetPractitionerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })

  const [createContact, { error: createContactError, isError: isCreateContactError }] = useCreateContactMutation()

  if (isCreateContactError) {
    console.error(createContactError)
  }

  const handleOnClose = () => {
    onClose()
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleOnClose}
      secondaryBtnTitle="Close"
      // handleClickPrimaryBtn={() => form.submit()}
      // primaryBtnTitle="Save"
      title="Add prescription"
    >
      <div className="modalAddConsultationForm">
        {samVersion?.version ? <Alert type="success" title={'SamVersion: ' + samVersion?.version} /> : <Alert type="error" title="SamVersion: Undefined" />}

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
