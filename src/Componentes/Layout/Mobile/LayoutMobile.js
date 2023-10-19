import React, { Suspense } from 'react'
import NavBuscador from '../../Buscador/NavBuscador'
// import Home from '../../Home/Home'
import Navbar from '../../Navbar/Navbar'

export default function LayoutMobile({children}) {


  const Children = children;

  return (
    <Suspense fallback={'Cargando...'}>
      <NavBuscador/>
      <Children/>
      <Navbar/>
    </Suspense>
  )
}
