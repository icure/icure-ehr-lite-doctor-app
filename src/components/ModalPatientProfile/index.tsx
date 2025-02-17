import React, { ReactElement } from 'react'
import Icon from '@ant-design/icons'
import { Button, Popconfirm, Typography } from 'antd'
import { differenceInDays, differenceInMonths, differenceInYears, fromUnixTime } from 'date-fns'
import { createSelector } from '@reduxjs/toolkit'
import { DecryptedPatient } from '@icure/cardinal-sdk'

import { CustomModal } from '../CustomModal'
import { emailIcn, locationIcn, phoneIcn, userAvatarPlaceholderIcn } from '../../assets/CustomIcons'
import { getPatientDataFormated } from '../../helpers/patientDataManipulations'
import { getImgSRC } from '../../helpers/fileToBase64'
import { useFindContactsByHcPartyPatientQuery } from '../../core/api/contactApi'
import { CardinalApiState } from '../../core/services/auth.api'
import { useAppSelector } from '../../core/hooks'
import { SpinLoader } from '../SpinLoader'
import { formatTimestampToHumanReadable } from '../../helpers/dateFormaters'
import './index.css'
import { CommonPlaceholder } from '../CommonPlaceholder'
import { Consultation } from './Consultation'

interface ModalPatientProfileProps {
  isVisible: boolean
  patient: DecryptedPatient
  onClose: () => void
  onEdit: () => void
  onDelete: () => void
  onAddConsultation: () => void
}

const { Text } = Typography

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    healthcarePartyId: cardinalApi.user?.healthcarePartyId,
  }),
)

export const ModalPatientProfile = ({ isVisible, onClose, patient, onEdit, onDelete, onAddConsultation }: ModalPatientProfileProps): ReactElement => {
  const { healthcarePartyId } = useAppSelector(reduxSelector)
  const { id, picture, userNameOneString, userHomeAddressOneString, emailAddress, phoneNumber, gender, userDateOfBirthOneString, dateOfBirth } = getPatientDataFormated(patient)
  const { data: listOfContacts, isLoading: isListOfContactsLoading } = useFindContactsByHcPartyPatientQuery(
    {
      hcPartyId: healthcarePartyId ?? '',
      patient,
    },
    { skip: !healthcarePartyId },
  )

  const sortedContacts = [...(listOfContacts ?? [])]?.sort((a, b) => (b.openingDate ?? 0) - (a.openingDate ?? 0))

  const patientAvatarSrc = getImgSRC(picture)
  const getAge = (date: number | undefined): string | undefined => {
    if (!date) {
      return undefined
    }

    const now = new Date()
    const birthDate = fromUnixTime(date)

    const years = differenceInYears(now, birthDate)
    if (years !== 0) {
      return `${years} years`
    }

    const months = differenceInMonths(now, birthDate)
    if (months !== 0) {
      return `${months} months`
    }

    const days = differenceInDays(now, birthDate)
    if (days !== 0) {
      return `${days} days`
    }

    return 'error'
  }
  const customModalFooter = () => (
    <div className="customFooter">
      <Popconfirm title="Delete patient" description="Are you sure to delete this patient?" onConfirm={onDelete} okText="Yes" cancelText="No">
        <Button type="link" danger>
          Delete patient
        </Button>
      </Popconfirm>

      <div className="customFooter__btnGroup">
        <Button onClick={onEdit}>Edit patient profile</Button>
        <Button onClick={onAddConsultation} type="primary">
          Add consultation
        </Button>
      </div>
    </div>
  )
  return (
    <CustomModal width={1000} isVisible={isVisible} handleClose={onClose} okBtnTitle="Save" title="Patient profile" customFooter={customModalFooter()}>
      <div className="modalPatienProfile">
        {<SpinLoader /> && (isListOfContactsLoading || (listOfContacts?.length !== 0 && sortedContacts?.length === 0))}
        <div className="modalPatienProfile__innerContainer">
          <div className="modalPatienProfile__shortInfo">
            <div className="modalPatienProfile__shortInfo__leftBlock">
              <div className="modalPatienProfile__shortInfo__intro">
                {patientAvatarSrc ? (
                  <div className="modalPatienProfile__shortInfo__intro__photo">
                    <img src={patientAvatarSrc} alt="patientPicture" />
                  </div>
                ) : (
                  <div className="modalPatienProfile__shortInfo__intro__userAvatarPlaceholder">
                    <Icon component={userAvatarPlaceholderIcn} />
                  </div>
                )}
                <h3 className="modalPatienProfile__shortInfo__name">{userNameOneString}</h3>
              </div>
              <div className="modalPatienProfile__shortInfo__contactDetails">
                <h4>Contact Details:</h4>
                <div className="modalPatienProfile__shortInfo__contactDetails__itemsContainer">
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={phoneIcn} />
                    <p>{phoneNumber}</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={emailIcn} />
                    <p>{emailAddress}</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={locationIcn} />
                    <p>{userHomeAddressOneString}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modalPatienProfile__shortInfo__rightBlock">
              <div className="modalPatienProfile__shortInfo__overview">
                <h4>Overview:</h4>
                <div className="modalPatienProfile__shortInfo__overview__itemsWrap">
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Patient ID:</h5>
                    <div className="modalPatienProfile__shortInfo__overview__item__withChildren">
                      <p>{id}</p>
                      <Text copyable={{ text: id }} />
                    </div>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Date of birth:</h5>
                    <p>{userDateOfBirthOneString}</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Age:</h5>
                    <p>{getAge(dateOfBirth) ?? '-'}</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Gender:</h5>
                    <p>{gender}</p>
                  </div>
                </div>
              </div>
              <div className="modalPatienProfile__shortInfo__overview">
                <h4>Visit history:</h4>
                <div className="modalPatienProfile__shortInfo__overview__itemsWrap">
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Previous visit:</h5>
                    <p>{sortedContacts?.[0]?.openingDate ? formatTimestampToHumanReadable(sortedContacts[0].openingDate) : '-'}</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Next visit:</h5>
                    <p>-</p>
                  </div>
                </div>
              </div>
              <div className="modalPatienProfile__shortInfo__overview"></div>
            </div>
          </div>

          <h4 className="consultationsHeading">Consultations:</h4>

          {/*Consultations*/}
          {sortedContacts?.length !== 0 && sortedContacts?.map((contact, index) => <Consultation contact={contact} key={index} />)}

          {listOfContacts?.length === 0 && (
            <CommonPlaceholder title="No Consultations Available" content="This patient has no consultations recorded. Add a new consultation to get started!" />
          )}
        </div>
      </div>
    </CustomModal>
  )
}
