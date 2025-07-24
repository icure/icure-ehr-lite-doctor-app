import { Medication } from '@icure/be-fhc-lite-api'
import { PharmacistVisibilityType, PractitionerVisibilityType, PrescribedMedicationType } from '@icure/cardinal-prescription-be-react'
import { EntityTemplate } from '@icure/cardinal-sdk'
import { Form } from 'antd'
import React, { FC, useEffect } from 'react'
import { useCreateEntityTemplateMutation, useListEntityTemplatesByQuery, useModifyEntityTemplateMutation } from '../../../core/api/entityTemplateApi'
import { CustomModal } from '../../common/CustomModal'
import { SpinLoader } from '../../common/SpinLoader'
import './index.css'

interface PrescriptionTemplatesModalProps {
  isVisible: boolean
  onClose: () => void
  userId: string
}

export const PRESCRIPTION_ENTITY_TEMPLATE_TYPE = 'Prescription'

export const PrescriptionTemplatesModal: FC<PrescriptionTemplatesModalProps> = ({ isVisible, onClose, userId }) => {
  const [form] = Form.useForm()
  const [createPrescriptionTemplate, { isSuccess: isPrescriptionTemplateCreatedSuccessfully, isLoading: isPrescriptionTemplateCreatingLoading }] = useCreateEntityTemplateMutation()
  const [modifyPrescriptionTemplate, { isSuccess: isPrescriptionTemplateModifiedSuccessfully, isLoading: isPrescriptionTemplateModifyingoading }] =
    useModifyEntityTemplateMutation()
  const { data: prescriptionTemplatesList, isFetching: isPractitionerTemplatesListFetching } = useListEntityTemplatesByQuery(
    {
      userId,
      type: PRESCRIPTION_ENTITY_TEMPLATE_TYPE,
    },
    { skip: !userId },
  )

  const handleCreateEntity = () => {
    const medication: Medication = {}
    const fakePrescription: PrescribedMedicationType[] = [
      {
        uuid: 'string',
        medication: medication,
        rid: 'string',
        ampId: 'string',
        cnk: 'string',
        dmppProductId: 'string',
        prescriberVisibility: 'open' as PractitionerVisibilityType,
        pharmacistVisibility: null as PharmacistVisibilityType,
      },
    ]

    createPrescriptionTemplate(
      new EntityTemplate({
        keywords: ['Prescription', 'SAM', 'Medication'],
        entityType: PRESCRIPTION_ENTITY_TEMPLATE_TYPE,
        entity: [fakePrescription],
      }),
    )
  }

  useEffect(() => {
    if (isPrescriptionTemplateModifiedSuccessfully || isPrescriptionTemplateCreatedSuccessfully) {
      onClose()
    }
  }, [isPrescriptionTemplateCreatedSuccessfully, isPrescriptionTemplateModifiedSuccessfully])

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} secondaryBtnTitle="Cancel" handleClickPrimaryBtn={() => form.submit()} primaryBtnTitle="Save" title="Manage Account">
      <div className="modalManageAccountForm">{(isPrescriptionTemplateCreatingLoading || isPrescriptionTemplateModifyingoading) && <SpinLoader />}</div>
    </CustomModal>
  )
}
