import React from 'react'
import './Lab.css'
import TimeLine, { TimeLineContainer } from './LabComponents/TimeLine/TimeLine'

export default function Lab() {


  const timeLineItem = [
    {
      legend: 'Procesado',
      status: 1,
      description:'Compra procesada con exito.',
      extra:null
    },
    {
      legend: 'Preparando',
      status: 1,
      description:'El vendedor esta preparando tu orden.',
      extra:null
    },
    {
      legend: 'En camino',
      status: 1,
      description:'Tu compra se dirige al domicilio de entrega.',
      extra:{
        type:'timeLineExtra-warning',
        message:'Tu envio llegará despues de las 12am'
      }
    },
    {
      legend: 'Entregada',
      status: 0,
      description:'Gracias por elegirnos',
      extra: null
    },

  ]
  

  return (
    <article className='Lab'>
      <h1>Lab</h1>

      <section className='LabSection'>
        <TimeLineContainer>
          {timeLineItem.map((item, i)=> <TimeLine key={i} data={item}/>)}
        </TimeLineContainer>
      </section>

    </article>
  )
}
