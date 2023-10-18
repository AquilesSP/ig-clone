import React, { Suspense } from 'react'
import NavBuscador from '../../Buscador/NavBuscador'
import Home from '../../Home/Home'
import Navbar from '../../Navbar/Navbar'

export default function LayoutMobile() {
  return (
    <Suspense fallback={'Cargando...'}>
      <NavBuscador/>
      <Home/>
      <Navbar/>
    </Suspense>
  )
}
