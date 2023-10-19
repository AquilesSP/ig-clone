import React, { useEffect, useState } from 'react'
import { FiCompass, FiHeart, FiHome, FiInstagram, FiMenu, FiPlusSquare, FiSearch, FiUser, FiVideo, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { uiSizes } from '../../Estilos/constantes';
import './NavDesktop.css'
import { BuscadorInput } from '../../Buscador/NavBuscador';


export default function NavDesktop() {

  const [ showSidebar, setShowSidebar ] = useState(false)

  return (
    <nav className='NavDesktop'>
      <Sidebar showSidebar={showSidebar}/>
      <NavItems showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </nav>
  )
}


function NavItems({showSidebar, setShowSidebar}){
  const navigate = useNavigate();

  return(
    <article className='NavItems'>
      <button className='btn-toggle' onClick={()=> navigate('/')}>
        {showSidebar 
          ? <FiInstagram size={uiSizes.iconSizeBig}/>
          : <FiInstagram size={uiSizes.iconSizeBig}/>
        }
      </button>
      <section className='flex-col justify-between align-center row-gap-8'>
        <button onClick={()=> navigate('/actividad')}>
          <FiHeart size={uiSizes.iconSizeMid}/>
        </button>
        <button onClick={()=> setShowSidebar(!showSidebar)}>
          <FiSearch size={uiSizes.iconSizeMid}/>
        </button>
        <button>
          <FiCompass size={uiSizes.iconSizeMid}/>
        </button>
        <button>
          <FiVideo size={uiSizes.iconSizeMid}/>
        </button>
        <button>
          <FiPlusSquare size={uiSizes.iconSizeMid}/>
        </button>
        <button>
          <FiUser size={uiSizes.iconSizeMid}/>
        </button>
      </section>
    </article>
  )
}

function Sidebar({showSidebar}){
  return(
    <aside className={`${showSidebar && 'showSidebar'}`}>

      <h1>Buscar</h1>

      <BuscadorInput/>

      <hr />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, laudantium? Sit officia nam sequi beatae facilis quod nemo dolor, quas nulla non impedit mollitia, voluptate doloremque sapiente culpa quaerat! Possimus, repudiandae eaque obcaecati neque ad praesentium animi est nulla fugit exercitationem ab illum quis quo adipisci error doloremque deserunt. Eligendi, ut aliquid quidem repellendus hic nulla quis. Rem porro minus ex, labore id assumenda voluptates necessitatibus error aliquid quam hic laboriosam consectetur commodi inventore omnis tempora sunt quod quis, earum beatae incidunt? Animi ab et iure iste voluptatibus, fuga ratione doloribus! Architecto, aspernatur. Autem aperiam enim quo? Sit, enim iste?
      </p>
    </aside>
  )
}