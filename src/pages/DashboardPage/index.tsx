import React from 'react'
import { ModalRecoveryKey } from '../../components/authentication/ModalRecoveryKey'
import { Header } from '../../components/common/Header'
import { Patients } from '../../components/patient/Patients'

import './index.css'

export default function DashboardPage() {
  return (
    <div className="Dashboard">
      <Header />
      <Patients />
      <ModalRecoveryKey />
    </div>
  )
}
