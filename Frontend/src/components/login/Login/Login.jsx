import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './login.scss'

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.success) {
        console.log('Login exitoso');
        navigate('/Preferencias');
        // Realizar acciones después de un inicio de sesión exitoso
      } else {
        console.log('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRegistro = () => {
    // Redirigir a la página de registro
    navigate('/Registro');
  };

  return (
    <div className="Login-2">
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="button_login" type="submit">
            Iniciar sesión
          </button>
          <button className="button_login" type="button" onClick={handleRegistro}>
            Registro
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;