import React from 'react'

import { ActionsPanel } from './ActionsPanel'
import { UserTable } from './UserTable'
import './index.css'

export const Patients = () => {
  return (
    <div className="patients">
      <h3>Patients</h3>
      <ActionsPanel />
      <UserTable />
    </div>
  )
}
