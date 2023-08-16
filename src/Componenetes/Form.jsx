import React from 'react'
import { useState } from 'react'

const Form = () => {

const[usuario, setUsuario]= useState({
    nombre:'',
    pelicula:'',
})

const[error, setError] = useState(false)


const handleSubmit = (event)=> {
event.preventDefault()
if(usuario.nombre.lenght <3 && usuario.pelicula.lenght <4 ){
    setError(true)
} else{
    setError(false)}
}




  return (
    <>
    <form onSubmit={handleSubmit}>
       <label> Ingresa tu nombre</label> 
       <input type="text" onChange={(event)=> setUsuario({...usuario, nombre: event.target.value})}/>
       <label> Ingressa tu pelicula favorita</label>
       <input type="text" onChange={(event)=> setUsuario({...usuario, pelicula: event.target.value})}/>
       <button> Enviar</button>

    {error && <h6>Por favor chequea que la información sea correcta</h6>}

  </form>
  {nombre && pelicula && <Card nombre = {nombre} pelicula= {pelicula} />}
  </>

  )

  }

export default Form