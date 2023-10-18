import React from 'react'
import LayoutMobile from './Mobile/LayoutMobile';
import LayoutDesktop from './Desktop/LayoutDesktop';

export default function Layout() {

  const isMobile = true;

  if(isMobile){
    return (
      <LayoutMobile/>
    )
  }

  return (
    <LayoutDesktop/>
  )
}
