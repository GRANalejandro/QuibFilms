
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // Puedes agregar más campos para el registro como 'email', 'nombre', etc.
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        // Mostrar un mensaje de registro exitoso
        console.log(data.message);
        // Redirigir a la página de inicio o a donde sea necesario
        navigate('/dashboard'); // Cambia '/dashboard' a tu ruta deseada
      } else {
        // Mostrar un mensaje de error en el registro
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const handleCancelar = () => {
    navigate('/');
  };

  return (
    <div className='Login-1'>
      <form className="login" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <div className="buttons">
          <button className="button_login" type="submit">Registrarse</button>
          <button className="button_login" onClick={handleCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}