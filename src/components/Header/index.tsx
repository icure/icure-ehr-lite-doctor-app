import React, { useMemo, useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Icon from '@ant-design/icons'

import './index.css'
import logo_horizontal from '../../assets/logo_horizontal.svg'
import userPicture from '../../assets/userPicture.png'
import { arrowDownIcn, logOutIcn, manageUserIcn, userIcn } from '../../assets/CustomIcons'
import { useAppDispatch, useAppSelector } from '../../core/hooks'
import { EHRLiteApiState, logout } from '../../core/services/auth.api'
import { useGetPractitionerQuery } from '../../core/api/practitionerApi'
import { ModalManageAccountForm } from '../ModalManageAccountForm'
import { createPortal } from 'react-dom'
import { createSelector } from '@reduxjs/toolkit'
import { PaginatedList, Patient, Practitioner } from '@icure/ehr-lite-sdk'
import { getImgSRC } from '../../helpers/fileToBase64'

const reduxSelector = createSelector(
  (state: { ehrLiteApi: EHRLiteApiState }) => state.ehrLiteApi,
  (ehrLiteApi: EHRLiteApiState) => ({
    user: ehrLiteApi.user,
    healthcarePartyId: ehrLiteApi.user?.healthcarePartyId,
  }),
)
export const Header = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false)
  const [isModalManageAccountFormOpen, setModalManageAccountFormOpen] = useState(false)
  const dispatch = useAppDispatch()

  const { user, healthcarePartyId } = useAppSelector(reduxSelector)

  const { data: practitioner, error: getPractitionerError, isFetching: isPractitionarFetching } = useGetPractitionerQuery(healthcarePartyId ?? '', { skip: !healthcarePartyId })

  const practitionerFromJSON = useMemo(() => {
    if (!!practitioner) {
      return new Practitioner(practitioner)
    }
    return undefined
  }, [practitioner])

  const userAvatarSrc = getImgSRC(practitionerFromJSON?.picture)

  const handleLogout = () => {
    dispatch(logout())
  }

  const items: MenuProps['items'] = [
    {
      key: 'manageAccount',
      label: (
        <div className="header__userDrowdown__item">
          <Icon component={manageUserIcn} />
          <span>Manage account</span>
        </div>
      ),
    },
    {
      key: 'logout',
      danger: true,
      label: (
        <div className="header__userDrowdown__item">
          <Icon component={logOutIcn} />
          <span>Log out</span>
        </div>
      ),
    },
  ]
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'manageAccount': {
        setModalManageAccountFormOpen(true)
        break
      }
      case 'logout': {
        handleLogout()
        break
      }
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__logoHolder">
          <img src={logo_horizontal} alt="petraCare logo" />
        </div>
        {!isPractitionarFetching && (
          <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow onOpenChange={(open: boolean) => setUserDropdownOpen(open)}>
            <div className={`header__userDrowdown ${isUserDropdownOpen && 'header__userDrowdown--active'}`}>
              <div className="header__userDrowdown__heading">
                <p className="header__userDrowdown__heading__name">{practitionerFromJSON?.firstName + ' ' + practitionerFromJSON?.lastName}</p>
                <p className="header__userDrowdown__heading__speciality">{practitionerFromJSON?.speciality}</p>
              </div>
              {userAvatarSrc ? (
                <div className="header__userDrowdown__picture">
                  <img src={userAvatarSrc} alt={user?.name ?? 'Dear User!'} />
                </div>
              ) : (
                <div className="header__userDrowdown__userAvatarPlaceholder">
                  <Icon component={userIcn} />
                </div>
              )}
              <div className="header__userDrowdown__arrow">
                <Icon component={arrowDownIcn} />
              </div>
            </div>
          </Dropdown>
        )}
      </div>
      {isModalManageAccountFormOpen &&
        createPortal(
          <ModalManageAccountForm isVisible={isModalManageAccountFormOpen} onClose={() => setModalManageAccountFormOpen(false)} practitionerToBeUpdated={practitionerFromJSON} />,
          document.body,
        )}
    </>
  )
}
