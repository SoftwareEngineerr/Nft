import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../asessts/images/logo/logo.png'
import { Sidemenuitems } from './compoents/Sidemenuitems'
import notifications from '../../../asessts/images/icons/notifications.png'

export const Sidemenu = (props) => {
  return (
    <div className='Sidemenu'>
        <div className='child'>
          <img src={logo} />
          <Sidemenuitems />
          <div>
            <img src={notifications} />
          </div>

        </div>
    </div>
  )
}
