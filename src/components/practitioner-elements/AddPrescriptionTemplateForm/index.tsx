import { EnsembleAuthenticationProvider, IccAuthApi, IccBesamv2Api, NoAuthenticationProvider } from '@icure/api'
import { cardinalLanguage, MedicationSearch, MedicationType, PrescribedMedicationType, PrescriptionList, PrescriptionModal } from '@icure/cardinal-prescription-be-react'
import './index.css'
import { HealthcareParty } from '@icure/cardinal-sdk'
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
const CARDINAL_PRESCRIPTION_LANGUAGE = 'en'

export const AddPrescriptionTemplateForm: FC<AddPrescriptionTemplateFormProps> = ({ isVisible, onClose, handleCreateEntity }) => {
  const [cardinalSdkInstance, setCardinalSdkInstance] = useState<IccBesamv2Api | undefined>(undefined)
  const [isPrescriptionModalOpen, setPrescriptionModalOpen] = useState(false)
  const [medicationToPrescribe, setMedicationToPrescribe] = useState<MedicationType>()
  const [prescriptionToModify, setPrescriptionToModify] = useState<PrescribedMedicationType>()
  const [prescriptionModalMode, setPrescriptionModalMode] = useState<'create' | 'modify' | null>(null)
  const [prescriptions, setPrescriptions] = useState<PrescribedMedicationType[]>([])

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
      } catch (error) {
        console.error('Initialization error:', error)
      }
    }
    initializeAll()
  }, [])

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
        {cardinalSdkInstance && (
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
