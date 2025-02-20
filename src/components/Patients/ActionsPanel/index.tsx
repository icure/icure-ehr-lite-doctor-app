import Icon from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import { addIcn, uploadIcn } from '../../../assets/CustomIcons'
import './index.css'
import { breakpoints, getWindowSize } from '../../../helpers/windowSize'
import { ModalImportPatients } from '../../ModalImportPatients'
import { ModalPatientForm } from '../../ModalPatientForm'

const { Search } = Input

export const ActionsPanel = () => {
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)
  const [isImportPatientsModalOpen, setImportPatientsModalOpen] = useState(false)

  const { innerWidth } = getWindowSize()

  const getComponentsSize = () => {
    if (innerWidth < breakpoints.lg) {
      return 'middle'
    } else {
      return 'large'
    }
  }

  return (
    <>
      <div className="actionsPanel">
        <Search placeholder="Search by Name, Email or Phone" enterButton size={getComponentsSize()} />
        <Button type="primary" size={getComponentsSize()} onClick={() => setPatientFormModalOpen(true)}>
          <Icon component={addIcn} />
          <span>Add</span>
        </Button>
        <Button type="primary" size={getComponentsSize()} onClick={() => setImportPatientsModalOpen(true)}>
          <Icon component={uploadIcn} />
          <span>Import</span>
        </Button>
      </div>
      {isPatientFormModalOpen && createPortal(<ModalPatientForm mode="create" isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} />, document.body)}
      {isImportPatientsModalOpen && createPortal(<ModalImportPatients isVisible={isImportPatientsModalOpen} onClose={() => setImportPatientsModalOpen(false)} />, document.body)}
    </>
  )
}
