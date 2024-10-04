import React, { ReactElement } from 'react'
import Icon from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import { Typography } from 'antd'

import { CustomModal } from '../CustomModal'
import './index.css'
import { phoneIcn, emailIcn, locationIcn, userAvatarPlaceholderIcn } from '../../assets/CustomIcons'
import { getPatientDataFormated } from '../../helpers/patientDataManipulations'
import dayjs from 'dayjs'
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { getImgSRC } from '../../helpers/fileToBase64'

interface ModalPatientProfileProps {
  isVisible: boolean
  patient: DecryptedPatient
  onClose: () => void
  onEdit: () => void
  onDelete: () => void
  onAddConsultation: () => void
}
const { Text } = Typography

export const ModalPatientProfile = ({ isVisible, onClose, patient, onEdit, onDelete, onAddConsultation }: ModalPatientProfileProps): ReactElement => {
  const { id, picture, userNameOneString, userHomeAddressOneString, emailAddress, phoneNumber, gender, userDateOfBirthOneString, dateOfBirth } = getPatientDataFormated(patient)

  const patientAvatarSrc = getImgSRC(picture)
  const getAge = (date: number | undefined) => {
    if (!date) {
      return undefined
    }
    const years = dayjs(new Date()).diff(dayjs.unix(date), 'year')
    if (years !== 0) {
      return `${years} years`
    }

    const months = dayjs(new Date()).diff(dayjs.unix(date), 'month')
    if (months !== 0) {
      return `${months} months`
    }
    const days = dayjs(new Date()).diff(dayjs.unix(date), 'day')
    if (days !== 0) {
      return `${days} days`
    }
    return 'error'
  }

  const customModalFooter = () => (
    <div className="customFooter">
      <Popconfirm title="Delete the patient" description="Are you sure to delete this patient?" onConfirm={onDelete} okText="Yes" cancelText="No">
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
                    <p>-</p>
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
          <div className="modalPatienProfile__expandedInfo">
            <div className="modalPatienProfile__expandedInfo__item">
              <h5>Diagnosis:</h5>
              <p>-</p>
            </div>
            <div className="modalPatienProfile__expandedInfo__item">
              <h5>Complains:</h5>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
