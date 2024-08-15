import React, { useCallback, useState } from 'react'
import { Header } from '../../components/Header'
import { Input, Button, Form } from 'antd'

import './index.css'
import { createPortal } from 'react-dom'
import { CustomModal } from '../../components/CustomModal'
import { ModalAddAgendaForm } from '../../components/ModalAddAgendaForm'

//  TODO: move this form in its own component

export default function DashboardPage() {
  const [newAgendaModalOpen, setNewAgendaModalOpen] = useState(false)

  return (
    <div className="Dashboard">
      <Header />
      <>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>

        <Button type="primary" size="large" onClick={() => setNewAgendaModalOpen(true)}>
          Créer un agenda
        </Button>
        {newAgendaModalOpen && createPortal(<ModalAddAgendaForm isVisible={newAgendaModalOpen} onClose={() => setNewAgendaModalOpen(false)} />, document.body)}
      </>
    </div>
  )
}
