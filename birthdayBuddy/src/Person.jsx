import React from 'react'

function Person({name,age,image}) {
  return (
    <article className='person' >
        <div><img src={image}/></div>
        <div><h4>{name}</h4><p>{age}</p></div>
        <div></div>

    </article>
  )
}

export default Person