import React from 'react'

import { UserRow } from '../UserRow'
import { FAKE_PATIENTS } from '../../../helpers/fakeData'
import patientPicture from '../../../assets/patientPicture.jpg'
import './index.css'

export const UserTable = () => {
  return (
    <div className="userTable">
      {FAKE_PATIENTS.map((patient, index) => (
        <UserRow
          key={index}
          name={patient.name}
          email={patient.email}
          dateOfBirth={patient.dateOfBirth}
          diagnosis={patient.diagnosis}
          phoneNumber={patient.phoneNumber}
          picture={<img src={patientPicture} alt={patient.name + 'picture'} />}
        />
      ))}
    </div>
  )
}
