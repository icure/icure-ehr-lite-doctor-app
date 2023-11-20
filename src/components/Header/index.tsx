import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Icon from '@ant-design/icons'

import './index.css'
import logo_horizontal from '../../assets/logo_horizontal.svg'
import userPicture from '../../assets/userPicture.png'
import { arrowDownIcn, logOutIcn } from '../../assets/CustomIcons'
import { useAppDispatch } from '../../core/app/hooks'
import { logout } from '../../services/auth.api'

const user = {
  name: 'Jacob Etterbeek',
  speciality: 'Cardiologist',
}

export const Header = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const items: MenuProps['items'] = [
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
      <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
        <div className="header__userDrowdown">
          <div className="header__userDrowdown__heading">
            <p className="header__userDrowdown__heading__name">{user.name}</p>
            <p className="header__userDrowdown__heading__speciality">{user.speciality}</p>
          </div>
          <div className="header__userDrowdown__picture">
            <img src={userPicture} alt={user.name} />
          </div>
          <div className="header__userDrowdown__arrow">
            <Icon component={arrowDownIcn} />
          </div>
        </div>
      </Dropdown>
    </div>
  )
}
