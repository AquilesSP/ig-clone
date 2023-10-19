import React, { Suspense } from 'react'
// import NavBuscador from '../../Buscador/NavBuscador'
import NavDesktop from '../../Navbar/Desktop/NavDesktop';

export default function LayoutDesktop({children}) {

  const Children = children;

  return (
    <Suspense fallback={'Cargando...'}>
      {/* <NavBuscador/> */}
      <div className="grid-desktop">
        <NavDesktop/>
        <Children/>
      </div>
    </Suspense>
  )
}