import React from 'react'
import './TimeLine.css'

export default function TimeLine({data}) {
  return (
    <li className={data.status ? 'TimeLine active': 'TimeLine'}>
      <article>
        <section className='TimeLine-head'>
          <h3>{data.legend}</h3>
        </section>
        <section className='TimeLine-body'>
          <p>{data.description}</p>

          {data.extra 
            ? <section className={data.extra.type}>
              <span>{data.extra.message}</span>
            </section>
            :null 
          }
        </section>



      </article>
    </li>
  )
}

function TimeLineContainer({children}) {
  return (
    <ol className='TimeLineContainer'>
      {children}
    </ol>
  )
}


export{TimeLineContainer}
