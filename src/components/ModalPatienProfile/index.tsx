import React from 'react'
import Icon from '@ant-design/icons'
import { Button } from 'antd'

import { CustomModal } from '../CustomModal'
import './index.css'
import patientPicture from '../../assets/patientPicture.jpg'
import { phoneIcn, emailIcn, locationIcn } from '../../assets/CustomIcons'

interface ModalPatienProfileProps {
  isVisible: boolean
  onClose: () => void
  patientId?: string
}

export const ModalPatienProfile = ({ isVisible, onClose }: ModalPatienProfileProps): JSX.Element => {
  const handleSubmit = () => {
    onClose()
  }
  const customModalFooter = () => (
    <div className="customFooter">
      <Button type="link" danger>
        Delete patient
      </Button>
      <div className="customFooter__btnGroup">
        <Button>Edit patient profile</Button>
        <Button type="primary">Add consultation</Button>
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
                <div className="modalPatienProfile__shortInfo__intro__photo">
                  <img src={patientPicture} alt="patientPicture" />
                </div>
                <h3 className="modalPatienProfile__shortInfo__name">Erin Lindford</h3>
              </div>
              <div className="modalPatienProfile__shortInfo__contactDetails">
                <h4>Contact Details:</h4>
                <div className="modalPatienProfile__shortInfo__contactDetails__itemsContainer">
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={phoneIcn} />
                    <p>+3289090909</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={emailIcn} />
                    <p>erin.lindford@gmail.com</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__contactDetails__item">
                    <Icon component={locationIcn} />
                    <p>Avenue Jacob-Daniel Maillard 31217 Meyrin, Suisse</p>
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
                    <p>HR78879975436G</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Date of birth:</h5>
                    <p>21/12/1989</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Age:</h5>
                    <p>Female</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Gender:</h5>
                    <p>35</p>
                  </div>
                </div>
              </div>
              <div className="modalPatienProfile__shortInfo__overview">
                <h4>Visit history:</h4>
                <div className="modalPatienProfile__shortInfo__overview__itemsWrap">
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Previous visit:</h5>
                    <p>10/10/2023</p>
                  </div>
                  <div className="modalPatienProfile__shortInfo__overview__item">
                    <h5>Next visit:</h5>
                    <p>16/12/2023</p>
                  </div>
                </div>
              </div>
              <div className="modalPatienProfile__shortInfo__overview"></div>
            </div>
          </div>
          <div className="modalPatienProfile__expandedInfo">
            <div className="modalPatienProfile__expandedInfo__item">
              <h5>Diagnosis:</h5>
              <p>Paranoid schizophrenia, major depressive disorder, single episode, gastroesophageal reflux disease (GERD), osteoarthritis of the right knee.</p>
            </div>
            <div className="modalPatienProfile__expandedInfo__item">
              <h5>Complains:</h5>
              <p>Headache, Acne, Breast tenderness, Сramps, Fatigue, Anxiety, Mood swings, Swelling of the body, Irritation, Changes in appetite.</p>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
