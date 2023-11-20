import React from 'react'
import { Header } from '../../components/Header'
import { Patients } from '../../components/Patients'

import './index.css'
export default function DashboardPage() {
  return (
    <div className="Dashboard">
      <Header />
      <Patients />
    </div>
  )
}
