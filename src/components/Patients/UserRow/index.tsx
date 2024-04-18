import React, { ReactElement, useState } from 'react'
import Icon from '@ant-design/icons'
import { MenuProps, Popconfirm } from 'antd'
import { Dropdown, Tooltip } from 'antd'
import { createPortal } from 'react-dom'
import { Patient, User } from '@icure/ehr-lite-sdk'

import { moreVerticalIcn, userIcn, deleteIcn, stethoscopeIcn, manageUserIcn, sendIcn, userAvatarPlaceholderIcn } from '../../../assets/CustomIcons'
import { ModalPatientForm } from '../../ModalPatientForm'
import { ModalAddConsultationForm } from '../../ModalAddConsultationForm'
import { ModalPatienProfile } from '../../ModalPatienProfile'
import './index.css'
import { getPatientDataFormated } from '../../../helpers/patientDataManipulations'
import { ModalConfirmAction } from '../../ModalConfirmAction'

interface UserRowProps {
  patient: Patient
  invitePatient: () => void
  deletePatient: () => void
  editPatient?: (editedPatient: Patient) => void
}
export const UserRow = ({ patient, invitePatient, deletePatient, editPatient }: UserRowProps): JSX.Element => {
  const [isOverFlowMenuOpen, setOverFlowMenuOpen] = useState(false)
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)
  const [isAddConsultationModalOpen, setAddConsultationModalOpen] = useState(false)
  const [isPatientProfileModalOpen, setPatientProfileModalOpen] = useState(false)
  const [isPatientToBeDeleted, setPatientToBeDeleted] = useState(false)

  const items: MenuProps['items'] = [
    {
      key: 'add_consultation',
      label: (
        <div className="userRow__btnGroup__item__dropdownRow">
          <div className="userRow__btnGroup__item__dropdownRow__icn">
            <Icon component={stethoscopeIcn} />
          </div>
          <span>Add consultation</span>
        </div>
      ),
    },
    {
      key: 'view_profile',
      label: (
        <div className="userRow__btnGroup__item__dropdownRow">
          <div className="userRow__btnGroup__item__dropdownRow__icn">
            <Icon component={userIcn} />
          </div>
          <span>View Profile</span>
        </div>
      ),
    },
    {
      key: 'edit_patient',
      label: (
        <div className="userRow__btnGroup__item__dropdownRow">
          <div className="userRow__btnGroup__item__dropdownRow__icn">
            <Icon component={manageUserIcn} />
          </div>
          <span>Edit Patient</span>
        </div>
      ),
    },
    {
      key: 'invite_patient',
      label: (
        <div className="userRow__btnGroup__item__dropdownRow">
          <div className="userRow__btnGroup__item__dropdownRow__icn">
            <Icon component={sendIcn} />
          </div>
          <span>Send Invitation Email</span>
        </div>
      ),
    },
    {
      key: 'delete_patient',
      danger: true,
      label: (
        <div className="userRow__btnGroup__item__dropdownRow userRow__btnGroup__item__dropdownRow--danger">
          <div className="userRow__btnGroup__item__dropdownRow__icn">
            <Icon component={deleteIcn} />
          </div>
          <span>Delete Patient</span>
        </div>
      ),
    },
  ]
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'add_consultation': {
        setAddConsultationModalOpen(true)
        break
      }
      case 'view_profile': {
        setPatientProfileModalOpen(true)
        break
      }
      case 'edit_patient': {
        setPatientFormModalOpen(true)
        break
      }
      case 'invite_patient': {
        invitePatient()
        break
      }
      case 'delete_patient': {
        setPatientToBeDeleted(true)
        break
      }
    }
  }

  const { picture, userDateOfBirthOneString, userNameOneString, phoneNumber, emailAddress, userHomeAddressOneString } = getPatientDataFormated(patient)

  return (
    <>
      <div className="userRow" onClick={() => setPatientProfileModalOpen(true)}>
        {picture ? (
          <div className="userRow__picture">{picture}</div>
        ) : (
          <div className="userRow__userAvatarPlaceholder">
            <Icon component={userAvatarPlaceholderIcn} />
          </div>
        )}
        <div className="userRow__contentDesktop">
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--name">
            <span className="userRow__contentDesktop__item__title">Name:</span>
            <span className="userRow__contentDesktop__item__value userRow__contentDesktop__item__value--name">{userNameOneString}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--dateOfBirth">
            <span className="userRow__contentDesktop__item__title">Date of birth:</span>
            <span className="userRow__contentDesktop__item__value">{userDateOfBirthOneString}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--phoneNumber">
            <span className="userRow__contentDesktop__item__title">Phone number:</span>
            <span className="userRow__contentDesktop__item__value">{phoneNumber}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--email">
            <span className="userRow__contentDesktop__item__title">E-mail address:</span>
            <span className="userRow__contentDesktop__item__value">{emailAddress}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--diagnosis">
            <span className="userRow__contentDesktop__item__title">Home address:</span>
            <span className="userRow__contentDesktop__item__value">{userHomeAddressOneString}</span>
          </div>
        </div>
        <div className="userRow__contentMobile">
          <span className="userRow__contentMobile__name">{userNameOneString}</span>
          <span className="userRow__contentMobile__value">{userDateOfBirthOneString + ', ' + phoneNumber + ', ' + emailAddress + ', ' + userHomeAddressOneString}</span>
        </div>
        <div className="userRow__btnGroup" onClick={(e) => e.stopPropagation()}>
          <Tooltip title="Add consultation">
            <div className="userRow__btnGroup__item userRow__btnGroup__item--addConsultation" onClick={() => setAddConsultationModalOpen(true)}>
              <Icon component={stethoscopeIcn} />
            </div>
          </Tooltip>
          <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow onOpenChange={(open: boolean) => setOverFlowMenuOpen(open)}>
            <div className={`userRow__btnGroup__item ${isOverFlowMenuOpen && 'userRow__btnGroup__item--active'}`}>
              <Icon component={moreVerticalIcn} />
            </div>
          </Dropdown>
        </div>
      </div>
      {isPatientFormModalOpen &&
        createPortal(<ModalPatientForm mode="edit" patientToEdit={patient} isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} />, document.body)}
      {isAddConsultationModalOpen &&
        createPortal(
          <ModalAddConsultationForm isVisible={isAddConsultationModalOpen} onClose={() => setAddConsultationModalOpen(false)} onSubmit={() => console.log('hi')} />,
          document.body,
        )}
      {isPatientProfileModalOpen &&
        createPortal(
          <ModalPatienProfile
            patient={patient}
            isVisible={isPatientProfileModalOpen}
            onClose={() => setPatientProfileModalOpen(false)}
            onEdit={() => setPatientFormModalOpen(true)}
            onDelete={() => deletePatient()}
            onAddConsultation={() => setAddConsultationModalOpen(true)}
          />,
          document.body,
        )}
      {isPatientToBeDeleted &&
        createPortal(
          <ModalConfirmAction
            title="Delete the patient"
            description="Are you sure you want to delete this patient? Once deleted, their information can't be recovered, so it's a permanent action."
            yesBtnTitle="Delete"
            noBtnTitle="Close"
            onYesClick={() => {
              deletePatient()
              setPatientToBeDeleted(false)
            }}
            onNoClick={() => setPatientToBeDeleted(false)}
            isVisible={isPatientToBeDeleted}
            mode="danger"
          />,
          document.body,
        )}
    </>
  )
}
