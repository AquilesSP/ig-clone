import React from 'react'
import './Layout.css'
import LayoutMobile from './Mobile/LayoutMobile';
import LayoutDesktop from './Desktop/LayoutDesktop';
import { isMobile } from 'react-device-detect';

export default function Layout({children,...props}) {

  // const isMobile = isMobile;

  if(isMobile){
    return (
      <LayoutMobile children={children} {...props}/>
    )
  }

  return (
    <LayoutDesktop children={children} {...props}/>
  )
}
