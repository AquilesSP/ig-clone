import React from 'react'
import NavMobile from './Mobile/NavMobile';
import NavDesktop from './Desktop/NavDesktop';
import './Navbar.css'

export default function Navbar() {
  const isMobile = true;

  if(isMobile){
    return (
      <NavMobile/>
    )
  }

  return (
    <NavDesktop/>
  )
}
