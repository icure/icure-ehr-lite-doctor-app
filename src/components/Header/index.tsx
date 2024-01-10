import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Icon from '@ant-design/icons'

import './index.css'
import logo_horizontal from '../../assets/logo_horizontal.svg'
import userPicture from '../../assets/userPicture.png'
import { arrowDownIcn, logOutIcn, manageUserIcn } from '../../assets/CustomIcons'
import { useAppDispatch, useAppSelector } from '../../core/hooks'
import { logout } from '../../core/services/auth.api'
import { useGetPractitionerQuery } from '../../core/api/practitionerApi'

export const Header = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false)
  const dispatch = useAppDispatch()

  const { user, healthcarePartyId } = useAppSelector((s) => ({
    user: s.ehrLiteApi.user,
    healthcarePartyId: s.ehrLiteApi.user?.healthcarePartyId,
  }))

  const { data: practitioner, error: getPractitionerError, isFetching: isPractitionarFetching } = useGetPractitionerQuery(healthcarePartyId || '', { skip: !healthcarePartyId })

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
      case 'logout': {
        handleLogout()
        break
      }
    }
  }

  return (
    <div className="header">
      <div className="header__logoHolder">
        <img src={logo_horizontal} alt="petraCare logo" />
      </div>
      {!isPractitionarFetching && (
        <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow onOpenChange={(open: boolean) => setUserDropdownOpen(open)}>
          <div className={`header__userDrowdown ${isUserDropdownOpen && 'header__userDrowdown--active'}`}>
            <div className="header__userDrowdown__heading">
              <p className="header__userDrowdown__heading__name">{practitioner?.firstName + ' ' + practitioner?.lastName}</p>
              <p className="header__userDrowdown__heading__speciality">Your speciality</p>
            </div>
            <div className="header__userDrowdown__picture">
              <img src={userPicture} alt={user?.name ?? 'Dear User!'} />
            </div>
            <div className="header__userDrowdown__arrow">
              <Icon component={arrowDownIcn} />
            </div>
          </div>
        </Dropdown>
      )}
    </div>
  )
}
