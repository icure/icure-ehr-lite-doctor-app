import { PrescribedMedicationType } from '@icure/cardinal-prescription-be-react'
import './index.css'
import { EntityTemplate, HealthcareParty } from '@icure/cardinal-sdk'
import { Button, Collapse, type CollapseProps } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useCreateEntityTemplateMutation, useGetEntityTemplatesQuery, useListEntityTemplatesByQuery, useModifyEntityTemplateMutation } from '../../../core/api/entityTemplateApi'
import { CustomModal } from '../../common/CustomModal'
import { SpinLoader } from '../../common/SpinLoader'
import { AddPrescriptionTemplateForm } from '../AddPrescriptionTemplateForm'

interface PrescriptionTemplatesProps {
  isVisible: boolean
  onClose: () => void
  userId: string
  practitioner?: HealthcareParty
}

export const PRESCRIPTION_ENTITY_TEMPLATE_TYPE = 'Prescription'

export const PrescriptionTemplates: FC<PrescriptionTemplatesProps> = ({ isVisible, onClose, userId, practitioner }) => {
  const [isAddTemplatesFormOpen, setAddTemplatesFormOpen] = useState(false)

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

  const ids = prescriptionTemplatesList?.map((template) => template.id)

  const { data: prescriptionTemplates, isFetching: isPractitionerTemplatesFetching } = useGetEntityTemplatesQuery(ids ?? [], { skip: ids === undefined || ids.length === 0 })

  const handleCreateEntity = (prescriptions: PrescribedMedicationType[]) => {
    const getDescription = () => {
      return prescriptions
        .map((el) => el.medication.medicinalProduct?.intendedname ?? el.medication.substanceProduct?.intendedname ?? el.medication.compoundPrescription)
        .join(', ')
    }
    createPrescriptionTemplate(
      new EntityTemplate({
        descr: getDescription(),
        keywords: ['Prescription', 'SAM', 'Medication'],
        entityType: PRESCRIPTION_ENTITY_TEMPLATE_TYPE,
        entity: prescriptions,
      }),
    )
  }

  useEffect(() => {
    if (isPrescriptionTemplateModifiedSuccessfully || isPrescriptionTemplateCreatedSuccessfully) {
      onClose()
    }
  }, [isPrescriptionTemplateCreatedSuccessfully, isPrescriptionTemplateModifiedSuccessfully])

  const items: CollapseProps['items'] = prescriptionTemplates?.map((template) => {
    const getDescription = () => {
      return template.entity
        .map((el) => el.medication.medicinalProduct?.intendedname ?? el.medication.substanceProduct?.intendedname ?? el.medication.compoundPrescription)
        .join(', ')
    }

    const getMedications = () => {
      console.log(template.entity)
      const getDurationFromDays = (numberOfDays: number) => {
        if (numberOfDays % 7 === 0) {
          return {
            duration: numberOfDays / 7,
            durationTimeUnit: numberOfDays / 7 === 1 ? 'week' : 'weeks',
          }
        } else {
          return {
            duration: numberOfDays,
            durationTimeUnit: numberOfDays === 1 ? 'day' : 'days',
          }
        }
      }
      return template.entity.map((el, index) => {
        return (
          <div className="prescriptionTemplate__medication" key={`medication-${index}`}>
            <div className="prescriptionTemplate__medication__content">
              <p>DCI group name:</p>
              <span>{el.medication.medicinalProduct?.intendedname ?? el.medication.substanceProduct?.intendedname ?? el.medication.compoundPrescription}</span>
            </div>
            <div className="prescriptionTemplate__medication__content">
              <p>Dosage:</p>
              <span>{el.medication.instructionForPatient}</span>
            </div>
            <div className="prescriptionTemplate__medication__content">
              <p>Duration:</p>
              <span>{getDurationFromDays(el.medication.duration.value).duration + ' ' + getDurationFromDays(el.medication.duration.value).durationTimeUnit}</span>
            </div>
          </div>
        )
      })
    }

    return {
      id: template.id,
      label: template.descr ?? getDescription(),
      children: (
        <div key={template.id} className="prescriptionTemplate">
          {getMedications()}
          <Button className="button" onClick={() => modifyPrescriptionTemplate(template)}>
            Modify
          </Button>
        </div>
      ),
    }
  })

  return (
    <>
      <CustomModal
        isVisible={isVisible}
        handleClose={onClose}
        secondaryBtnTitle="Close"
        title="Prescription Templates"
        handleClickPrimaryBtn={() => setAddTemplatesFormOpen(true)}
        primaryBtnTitle="Create template"
      >
        <div className="PrescriptionTemplates">
          {<SpinLoader /> &&
            (isPrescriptionTemplateModifyingoading || isPrescriptionTemplateCreatingLoading || isPractitionerTemplatesListFetching || isPractitionerTemplatesFetching)}

          <Collapse items={items} />
        </div>
      </CustomModal>
      {isAddTemplatesFormOpen &&
        createPortal(
          <AddPrescriptionTemplateForm
            isVisible={isAddTemplatesFormOpen}
            onClose={() => setAddTemplatesFormOpen(false)}
            practitioner={practitioner}
            handleCreateEntity={handleCreateEntity}
          />,
          document.body,
        )}
    </>
  )
}
