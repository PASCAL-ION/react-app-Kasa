import React from 'react'
import logo from '../../assets/logo.svg'
import style from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        <p className={style.text}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

