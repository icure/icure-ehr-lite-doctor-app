import React from 'react'
import { Header } from '../../components/common/Header'
import { Patients } from '../../components/patient-elements/Patients'

import './index.less'

export default function DashboardPage() {
  return (
    <div className="Dashboard">
      <Header />
      <Patients />
    </div>
  )
}
