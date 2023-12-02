import React from 'react'
export default function Registro() {
  return (
    <div className='Login-1'>
       <form className="login" >
        <input type="text" placeholder="Nombre"/>
         <input type="text" placeholder="Apellido" />
         <input type="email" placeholder="Correo"  />
         <input type="password" placeholder="Contraseña" />
         <div className="buttons">
             <button className="button_login" type="submit">Registrarse</button>
             <button className="button_login" >Cancelar</button>
         </div>
     </form>
    </div>
  )
}
