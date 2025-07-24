import { HealthcareParty, Patient } from '@icure/be-fhc-lite-api'
import { CardinalBeSamApi, CardinalBeSamSdk, Credentials, SamV2Api, SamVersion } from '@icure/cardinal-be-sam-sdk'
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
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { Alert } from 'antd'
import React, { FC, useEffect, useState } from 'react'

import { useGetPractitionerQuery } from '../../../../../../core/api/practitionerApi'
import { SpinLoader } from '../../../../../common/SpinLoader'
import './index.css'

interface PrescriptionsProps {
  patient: DecryptedPatient
  healthcarePartyId?: string
}

const vendor = {
  vendorName: 'vendorName',
  vendorEmail: 'support@test.be',
  vendorPhone: '+3200000000',
}
const samPackage = {
  packageName: 'test[test/1.0]-freehealth-connector',
  packageVersion: '1.0]-freehealth-connector',
}

// To create new Credentials.UsernamePassword(), follow these steps:
// 1. Go to https://cockpit.icure.dev/ — the management platform for Cardinal.
// 2. Register and log in.
// 3. Create a solution, then a database, and then a healthcare professional (HCP).
// 4. For this HCP, generate an Active Authentication Token.
// 5. Use the HCP's email address as the username, and the token as the password.
const practitionerCredentials = {
  username: 'ls+230725@icure.com',
  password: '990a765c-387a-4c17-854d-b919d0e324cc',
}
const ICURE_URL = 'https://nightly.icure.cloud'
const CARDINAL_PRESCRIPTION_LANGUAGE = 'en'

export const Prescriptions: FC<PrescriptionsProps> = ({ patient, healthcarePartyId }) => {
  // Service instance refs
  const [certificateUploaded, setCertificateUploaded] = useState(false)
  const [isCertificateValid, setIsCertificateValid] = useState(false)
  const [errorWhileVerifyingCertificate, setErrorWhileVerifyingCertificate] = useState<string | undefined>()
  const [samVersion, setSamVersion] = useState<SamVersion | undefined>()
  const [passphrase, setPassphrase] = useState<string | undefined>()
  const [cardinalSdkInstance, setCardinalSdkInstance] = useState<SamV2Api | undefined>(undefined)
  const [isPrescriptionModalOpen, setPrescriptionModalOpen] = useState(false)
  const [medicationToPrescribe, setMedicationToPrescribe] = useState<MedicationType>()
  const [prescriptionToModify, setPrescriptionToModify] = useState<PrescribedMedicationType>()
  const [prescriptionModalMode, setPrescriptionModalMode] = useState<'create' | 'modify' | null>(null)
  const [prescriptions, setPrescriptions] = useState<PrescribedMedicationType[]>([])
  const [isPrescriptionPrintModalOpen, setPrescriptionPrintModalOpen] = useState(false)

  cardinalLanguage.setLanguage(CARDINAL_PRESCRIPTION_LANGUAGE)

  const { data: practitioner, isFetching: isPractitionerFetching } = useGetPractitionerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })

  // Initialize all backend services on mount
  useEffect(() => {
    const initializeAll = async () => {
      try {
        // Initialize Cardinal SDK (SAM)
        const cardinalBeSamAInstance: CardinalBeSamApi = await CardinalBeSamSdk.initialize(
          undefined,
          ICURE_URL,
          new Credentials.UsernamePassword(practitionerCredentials.username, practitionerCredentials.password),
        )

        setCardinalSdkInstance(cardinalBeSamAInstance.sam)
        setSamVersion(await fetchSamVersion(cardinalBeSamAInstance.sam))

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
    await Promise.all(
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
                practitioner as HealthcareParty,
                patient as Patient,
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
            }
          } catch (e) {
            console.error(e)
          }
        }),
    )
  }
  const handlePrintPrescriptions = async () => {
    await handleSendPrescriptions()
    setPrescriptionPrintModalOpen(true)
  }

  return (
    <div className="prescriptions">
      {<SpinLoader /> && isPractitionerFetching}

      {samVersion?.version ? <Alert type="success" message={'SamVersion: ' + samVersion?.version} /> : <Alert type="error" message="SamVersion: Undefined" />}

      <PractitionerCertificate
        certificateValid={isCertificateValid}
        certificateUploaded={certificateUploaded}
        errorWhileVerifyingCertificate={errorWhileVerifyingCertificate}
        onResetCertificate={onResetCertificate}
        onUploadCertificate={onUploadCertificate}
        onDecryptCertificate={onDecryptCertificate}
      />

      {cardinalSdkInstance && isCertificateValid && (
        <MedicationSearch sdk={cardinalSdkInstance} deliveryEnvironment="P" onAddPrescription={onCreatePrescription} disableInputEventsTracking={isPrescriptionModalOpen} />
      )}

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
        <PrescriptionModal onClose={onClosePrescriptionModal} onSubmit={onSubmitModifyPrescription} modalMood={prescriptionModalMode} prescriptionToModify={prescriptionToModify} />
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
  )
}
