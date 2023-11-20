import React, { ReactElement, useState } from 'react'
import Icon from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Tooltip } from 'antd'
import { createPortal } from 'react-dom'

import { moreVerticalIcn, userIcn, deleteIcn, stethoscopeIcn, manageUserIcn } from '../../../assets/CustomIcons'
import { ModalPatientForm } from '../../ModalPatientForm'
import { ModalAddConsultation } from '../../ModalAddConsultation'
import { ModalPatienProfile } from '../../ModalPatienProfile'
import './index.css'

interface UserRowProps {
  picture: ReactElement
  name: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  diagnosis: string
}
export const UserRow = ({ picture, name, dateOfBirth, email, phoneNumber, diagnosis }: UserRowProps): JSX.Element => {
  const [isOverFlowMenuOpen, setOverFlowMenuOpen] = useState(false)
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)
  const [isAddConsultationModalOpen, setAddConsultationModalOpen] = useState(false)
  const [isPatientProfileModalOpen, setPatientProfileModalOpen] = useState(false)

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
      case 'delete_patient': {
        break
      }
    }
  }

  return (
    <>
      <div className="userRow">
        <div className="userRow__picture">{picture}</div>
        <div className="userRow__contentDesktop">
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--name">
            <span className="userRow__contentDesktop__item__title">Name:</span>
            <span className="userRow__contentDesktop__item__value userRow__contentDesktop__item__value--name">{name}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--dateOfBirth">
            <span className="userRow__contentDesktop__item__title">Date of birth:</span>
            <span className="userRow__contentDesktop__item__value">{dateOfBirth}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--phoneNumber">
            <span className="userRow__contentDesktop__item__title">Phone number:</span>
            <span className="userRow__contentDesktop__item__value">{phoneNumber}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--email">
            <span className="userRow__contentDesktop__item__title">E-mail address:</span>
            <span className="userRow__contentDesktop__item__value">{email}</span>
          </div>
          <div className="userRow__contentDesktop__item userRow__contentDesktop__item--diafnosis">
            <span className="userRow__contentDesktop__item__title">Diagnosis:</span>
            <span className="userRow__contentDesktop__item__value">{diagnosis}</span>
          </div>
        </div>
        <div className="userRow__contentMobile">
          <span className="userRow__contentMobile__name">{name}</span>
          <span className="userRow__contentMobile__value">{dateOfBirth + ', ' + diagnosis}</span>
        </div>
        <div className="userRow__btnGroup">
          <Tooltip title="Add consultation">
            <div className="userRow__btnGroup__item userRow__btnGroup__item--addConsultation" onClick={() => setAddConsultationModalOpen(true)}>
              <Icon component={stethoscopeIcn} />
            </div>
          </Tooltip>
          <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow onOpenChange={() => setOverFlowMenuOpen(!isOverFlowMenuOpen)}>
            <div className={`userRow__btnGroup__item ${isOverFlowMenuOpen && 'userRow__btnGroup__item--active'}`}>
              <Icon component={moreVerticalIcn} />
            </div>
          </Dropdown>
        </div>
      </div>
      {createPortal(
        <ModalPatientForm mode="edit" isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} onSubmit={() => console.log('hi')} />,
        document.body,
      )}
      {createPortal(
        <ModalAddConsultation isVisible={isAddConsultationModalOpen} onClose={() => setAddConsultationModalOpen(false)} onSubmit={() => console.log('hi')} />,
        document.body,
      )}
      {createPortal(<ModalPatienProfile isVisible={isPatientProfileModalOpen} onClose={() => setPatientProfileModalOpen(false)} />, document.body)}
    </>
  )
}
