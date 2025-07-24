import Icon from '@ant-design/icons'
import { DecryptedPatient } from '@icure/cardinal-sdk'
import { Tag } from 'antd'
import React, { FC } from 'react'
import { emailIcn, locationIcn, phoneIcn, userAvatarPlaceholderIcn } from '../../../../../../assets/CustomIcons'
import { getImgSRC } from '../../../../../../helpers/fileToBase64'
import { getTagColor } from '../../../../../../helpers/getTagColor'
import { getPatientDataFormated } from '../../../../../../helpers/patientDataManipulations'
import './index.css'

interface OverviewProps {
  patient: DecryptedPatient
}

export const Overview: FC<OverviewProps> = ({ patient }) => {
  const { language, picture, userNameOneString, userHomeAddressOneString, emailAddress, phoneNumber, birthSex, userDateOfBirthOneString, tags, age } =
    getPatientDataFormated(patient)

  const patientAvatarSrc = getImgSRC(picture)

  return (
    <div className="patientOverviewTab">
      <div className="patientOverviewTab__leftBlock">
        <div className="patientOverviewTab__intro">
          {patientAvatarSrc ? (
            <div className="patientOverviewTab__intro__photo">
              <img src={patientAvatarSrc} alt="patientPicture" />
            </div>
          ) : (
            <div className="patientOverviewTab__intro__userAvatarPlaceholder">
              <Icon component={userAvatarPlaceholderIcn} />
            </div>
          )}
          <h3 className="patientOverviewTab__name">{userNameOneString}</h3>
        </div>
        <div className="patientOverviewTab__contactDetails">
          <h4>Contact Details:</h4>
          <div className="patientOverviewTab__contactDetails__itemsContainer">
            <div className="patientOverviewTab__contactDetails__item">
              <Icon component={phoneIcn} />
              <p>{phoneNumber ?? '-'}</p>
            </div>
            <div className="patientOverviewTab__contactDetails__item">
              <Icon component={emailIcn} />
              <p>{emailAddress ?? '-'}</p>
            </div>
            <div className="patientOverviewTab__contactDetails__item">
              <Icon component={locationIcn} />
              <p>{userHomeAddressOneString ?? '-'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="patientOverviewTab__rightBlock">
        <div className="patientOverviewTab__overview">
          <h4>Overview:</h4>
          <div className="patientOverviewTab__overview__itemsWrap">
            {userDateOfBirthOneString && (
              <div className="patientOverviewTab__overview__item">
                <h5>Date of birth:</h5>
                <p>{userDateOfBirthOneString}</p>
              </div>
            )}
            {age && (
              <div className="patientOverviewTab__overview__item">
                <h5>Age:</h5>
                <p>{age}</p>
              </div>
            )}
            {birthSex && (
              <div className="patientOverviewTab__overview__item">
                <h5>Sex at birth:</h5>
                <p>{birthSex}</p>
              </div>
            )}
            {language && (
              <div className="patientOverviewTab__overview__item">
                <h5>Language:</h5>
                <p>{language}</p>
              </div>
            )}
          </div>
        </div>

        <div className="patientOverviewTab__overview">
          <h4>Tags:</h4>
          <div className="patientOverviewTab__overview__tags">
            {tags && tags.length !== 0
              ? tags.map((tag, index) => (
                  <Tag key={index} color={getTagColor(tag.code)} bordered={false}>
                    {tag.code}
                  </Tag>
                ))
              : 'No tags provided'}
          </div>
        </div>
      </div>
    </div>
  )
}
