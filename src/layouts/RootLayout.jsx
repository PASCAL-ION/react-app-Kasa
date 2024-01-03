import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function RootLayout() {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/> {/* C'est ici que le contenu va s'afficher en fonction des routes */}
        </main>
    </>
  )
}
