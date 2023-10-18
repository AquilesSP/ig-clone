import React from 'react'
import './NavBuscador.css'
import { FiHeart, FiSearch } from "react-icons/fi";
import { uiSizes } from '../Estilos/constantes';

export default function NavBuscador() {
  return (
    <nav className='NavBuscador flex-row justify-between align-center'>
      <h4>Ig Clone</h4>
      <BuscadorInput/>
      <button className='btn-heart'>
        <FiHeart size={uiSizes.iconSizeMid}/>
      </button>
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