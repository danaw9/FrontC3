import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

const[usuario, setUsuario]= useState({
    name:'',
    pelicula:'',
})

const [show, setShow] = useState (false)
const[error, setError] = useState(false)


const handleSubmit = (event)=> {
    event.preventDefault()
    if(usuario.name.lenght >3 && usuario.pelicula.lenght >4 ){
      setShow (true)
    setError(false)
} else{
    setShow(false)
    setError(true)}
}




  return (
    
    <form onSubmit={handleSubmit}>
        
       <label> Ingresa tu nombre</label> 
       <input type="text" onChange={(event)=> setUsuario({...usuario, name: event.target.value})}/>
       <label> Ingressa tu pelicula favorita</label>
       <input type="text" onChange={(event)=> setUsuario({...usuario, pelicula: event.target.value})}/>
       <button> Enviar</button>

        {error && <h6>Por favor chequea que la información sea correcta</h6>}

      
     {show ? 

     <Card  name ={name} pelicula={pelicula}/>
     :null
     
   
   
  }
 
 

 
  </form>
    


  
       

  )

  }

export default Form