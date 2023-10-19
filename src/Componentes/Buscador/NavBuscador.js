import React from 'react'
import './NavBuscador.css'
import { FiHeart, FiInstagram, FiSearch } from "react-icons/fi";
import { uiSizes } from '../Estilos/constantes';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export default function NavBuscador() {

  const navigate = useNavigate();

  return (
    <nav className='NavBuscador flex-row justify-between align-center'>
      <FiInstagram size={uiSizes.iconSizeMid}/>
      <BuscadorInput/>
      {isMobile && 
        <button className='btn-heart' onClick={()=> navigate('/actividad')}>
          <FiHeart size={uiSizes.iconSizeMid}/>
        </button>
      }

      {/* <Link to='/actividad' className='btn-heart'>
        <FiHeart size={uiSizes.iconSizeMid}/>
      </Link> */}

    </nav>
  )
}

function BuscadorInput(){
  return(
    <fieldset className='BuscadorInput flex-row align-center'>
      <input type="text" placeholder='Buscar'/>
      <FiSearch size={uiSizes.iconSizeLit}/>
    </fieldset>
  )
}

export{BuscadorInput}