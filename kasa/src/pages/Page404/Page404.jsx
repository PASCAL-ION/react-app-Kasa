import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import style from './Page404.module.scss'

export default function Page404() {
  return (
    <>
        <Navbar />
        <div className={style.container}>
          <h1 className={style.errorCode}>404</h1>
          <p className={style.errorMessage}>Oups! La page que vous demandez n'existe pas</p>
          <NavLink to='/' element={<Home />}>
            <p className={style.redirectLink}>Retourner sur la page d’accueil</p>
          </NavLink>
        </div>
        <Footer />
    </>
  )
}
