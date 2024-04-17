import React, { useState } from 'react'
import { Input, Button } from 'antd'
import Icon from '@ant-design/icons'

import { addIcn } from '../../../assets/CustomIcons'
import './index.css'
import { createPortal } from 'react-dom'
import { ModalPatientForm } from '../../ModalPatientForm'

const { Search } = Input
export const ActionsPanel = () => {
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false)

  return (
    <>
      <div className="actionsPanel">
        <Search placeholder="Search by Name, Email or Phone" enterButton size="large" />
        <Button type="primary" size="large" onClick={() => setPatientFormModalOpen(true)}>
          <Icon component={addIcn} />
          <span>Create patient</span>
        </Button>
      </div>
      {createPortal(<ModalPatientForm mode="create" isVisible={isPatientFormModalOpen} onClose={() => setPatientFormModalOpen(false)} />, document.body)}
    </>
  )
}
