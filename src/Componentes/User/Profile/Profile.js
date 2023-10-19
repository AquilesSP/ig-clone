import React from 'react'
import './Profile.css'
import { FiMenu } from 'react-icons/fi'
import { uiSizes } from '../../Estilos/constantes'

export default function Profile() {
  return (
    <article>
      <section className="flex-row justify-between align-center">
        <h3>Omaaar_cito</h3>
        <FiMenu size={uiSizes.iconSizeMid}/>
      </section>

      <section className="flex-row justify-between align-center margin-top-16">
        <img
          className='b-radius-50'
          src="http://via.placeholder.com/64x64"
          alt=''
        />  
        <div className="flex-row align-center col-gap-16">
          <div className="flex-col align-center">
            <h1>230</h1>
            <small>Post</small>
          </div>
          <div className="flex-col align-center">
            <h1>230</h1>
            <small>Followers</small>
          </div>
          <div className="flex-col align-center">
            <h1>230</h1>
            <small>Following</small>
          </div>
        </div>
      </section>

      <section className='margin-top-16'>
        <h4>🤭 Omar Cito</h4>
        <i>Freelance Artist / Milenial </i>

        <p className='padding-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptates eaque at dignissimos rerum natus id, aliquid quidem sequi magni?
        </p>
      </section>

    </article>
  )
}
