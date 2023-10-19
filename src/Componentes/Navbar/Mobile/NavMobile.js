import React from 'react'
import { FiCompass, FiHome, FiPlusSquare, FiUser, FiVideo } from "react-icons/fi";
import { uiSizes } from '../../Estilos/constantes';
import { useNavigate } from 'react-router-dom';

export default function NavMobile() {

  return (
    <nav className='NavMobile'>
      <NavItems/>
    </nav>
  )
}

function NavItems(){
  const navigate = useNavigate();

  return(
    <article>
      <ul className='flex-row justify-between align-center'>
        <li onClick={()=> navigate('/')}>
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
    </article>
  )
}