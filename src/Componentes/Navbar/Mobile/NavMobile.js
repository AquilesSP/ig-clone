import React from 'react'
import { FiCompass, FiHome, FiPlusSquare, FiUser, FiVideo, IconName } from "react-icons/fi";
import { uiSizes } from '../../Estilos/constantes';

export default function NavMobile() {
  return (
    <nav className='NavMobile'>
      <ul 
        className='flex-row justify-between align-center'
      >
        <li>
          <FiHome size={uiSizes.iconSizeMid}/>
        </li>
        <li>
          <FiCompass size={uiSizes.iconSizeMid}/>
        </li>
        <li>
          <FiVideo size={uiSizes.iconSizeMid}/>
        </li>
        <li>
          <FiPlusSquare size={uiSizes.iconSizeMid}/>
        </li>
        <li>
          <FiUser size={uiSizes.iconSizeMid}/>
        </li>
      </ul>
    </nav>
  )
}
