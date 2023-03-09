import React from 'react'
import logo from '../assets/logo.svg'
import '../style/Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <img className='footer__logo' src={logo} alt="logo" />
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
