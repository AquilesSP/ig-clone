import React from 'react'
import './Home.css'
import { FiAward, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { uiSizes } from '../Estilos/constantes'

export default function Home() {
  const publicaciones = [{},{},{},{},{},{},{}]
  return (
    <article className='Home'>
      {publicaciones.map((publis, p)=> 
        <Post key={p}/>
      )}
    </article>
  )
}


function Post(){
  return(
    <section className='Post'>

      <div className='flex-row justify-between align-center'>
        <div className='flex-row align-center col-gap-8'>
          <img
            className='b-radius-50'
            src="http://via.placeholder.com/44x44"
            alt=''
          />
          <h4>Post</h4>
        </div>
        <FiMoreHorizontal size={uiSizes.iconSizeMid}/>

      </div>

      <img src="http://via.placeholder.com/640x360" alt=''/>

      <div className="flex-row justify-between margin-top-8">
        <div className="flex-row col-gap-8">
          <FiHeart size={uiSizes.iconSizeLit}/>
          <FiMessageCircle size={uiSizes.iconSizeLit}/>
          <FiSend size={uiSizes.iconSizeLit}/>
        </div>
        <FiAward size={uiSizes.iconSizeLit}/>
      </div>

      <p className='margin-top-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo similique distinctio temporibus architecto necessitatibus, soluta earum quibusdam reprehenderit vitae aliquam ad dicta deleniti, odit velit corrupti quo mollitia quod recusandae sit consequuntur minima harum natus! Voluptatibus fugiat asperiores facilis officiis et voluptatem quis nulla, ea magnam. Temporibus, officia architecto!
      </p>
    </section>
  )
}