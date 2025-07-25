import { EnsembleAuthenticationProvider, IccAuthApi, IccBesamv2Api, NoAuthenticationProvider, SamVersion } from '@icure/api'
import { HealthcareParty as HealthcareParty_FHC } from '@icure/be-fhc-lite-api'
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
  uploadAndEncryptCertificate,
  validateDecryptedCertificate,
} from '@icure/cardinal-prescription-be-react'
import './index.css'
import { HealthcareParty } from '@icure/cardinal-sdk'
import { Alert } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { CustomModal } from '../../common/CustomModal'

interface AddPrescriptionTemplateFormProps {
  isVisible: boolean
  onClose: () => void
  practitioner?: HealthcareParty
  handleCreateEntity: (prescriptions: PrescribedMedicationType[]) => void
}

const practitionerCredentials = {
  username: 'larisa.shashuk+medicationsTest@gmail.com',
  password: '5aa9d0f0-2fab-4f9f-9f6a-5d8244280873',
}
const ICURE_URL = 'https://api.icure.cloud'
const CARDINAL_PRESCRIPTION_LANGUAGE = 'fr'

export const AddPrescriptionTemplateForm: FC<AddPrescriptionTemplateFormProps> = ({ isVisible, onClose, handleCreateEntity, practitioner }) => {
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

  cardinalLanguage.setLanguage('en')

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
      const res = await validateDecryptedCertificate(practitioner as HealthcareParty_FHC, passphrase)

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

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={onClose}
      secondaryBtnTitle="Cancel"
      handleClickPrimaryBtn={() => handleCreateEntity(prescriptions)}
      primaryBtnTitle="Save"
      title="Create Prescription Temtplate"
    >
      <div className="AddPrescriptionTemplateForm">
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
            hideSectionsTitles={true}
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
      </div>
    </CustomModal>
  )
}
