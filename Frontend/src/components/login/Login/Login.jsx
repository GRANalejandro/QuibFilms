import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
     const [username, setUsername] = ('')
     const [password, setPassword] = ('')
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/login', { //cambiar ip del mysql y python
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Manejar la autenticación exitosa
                alert('¡Inicio de sesión exitoso!');

                navigate('/');

            } else {
                // Manejar la autenticación fallida
                console.log('Login fallido');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <div>
            <div className="row1">
                <div>
                    <label htmlFor="">Usuario: </label>
                    <input type="email" name="username" id="" value={username} />
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password" id="" value={password}/>
                </div>
                <button className='Btn-Iniciar' onClick={handleLogin}>Iniciar sesión</button>
            </div>
        </div>
    );

}