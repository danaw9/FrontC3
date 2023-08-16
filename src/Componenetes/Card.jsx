import React from 'react'

const Card = ({nombre, pelicula}) => {
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <h2>Sabemos que tu pelicula favorita es {pelicula}</h2>

    </div>
  )
}

export default Card