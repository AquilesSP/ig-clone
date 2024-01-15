import React, { Suspense, useState } from 'react'
// import NavBuscador from '../../Buscador/NavBuscador'
import NavDesktop from '../../Navbar/Desktop/NavDesktop';
import Profile from '../../User/Profile/Profile';

export default function LayoutDesktop({children}) {

  const Children = children;
  const [showAsideRight, setShowAsideRight] = useState(false)

  return (
    <Suspense fallback={'Cargando...'}>
      {/* <NavBuscador/> */}
      <div className={showAsideRight ? "grid-desktop asideRightActive" :  "grid-desktop"}>
        <NavDesktop setShowAsideRight={setShowAsideRight} showAsideRight={showAsideRight}/>
        <Children/>

        <div className={showAsideRight ? "asideRight asideRightShow": "asideRight"}>
          <aside>
            <Profile/>
          </aside>
        </div>
      </div>
    </Suspense>
  )
}