import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import React from 'react'
//pages
import HousingDetails from '../pages/HousingDetails/HousingDetails'
import Page404 from '../pages/Page404/Page404'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
//layout
import RootLayout from '../layouts/RootLayout'

export default function Routes({items}) {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout/>}>
            <Route path='/react-app-Kasa' element={<Home data={ items }/>} />
            <Route path='about' element={<About data={ items }/>} />
            <Route path='details/:id' element={<HousingDetails data={ items }/>} />
            <Route path='/*' element={<Page404 />}/>
          </Route>
        )
      )
  return (
    <RouterProvider router={router}/>
  )
}


