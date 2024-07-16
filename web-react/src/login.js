import React, { useState } from 'react';
import './login.css'; // Asegúrate de que este archivo existe y tiene tus estilos
import Revision from './revision'; // Asegúrate de que la ruta y el nombre sean correctos

const Login = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene la recarga de la página al enviar el formulario

        // Verificar si las credenciales son correctas
        if (username === 'admin' && password === '123') {
            setIsLoggedIn(true); // Cambia el estado a true si las credenciales son correctas
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'); // Mensaje de error
        }
    };

    return (
        <div className="login-container">
            {isLoggedIn ? (
                <Revision /> // Muestra el componente Revision si el usuario ha iniciado sesión
            ) : (
                <form id="loginForm" onSubmit={handleSubmit}>
                    <h2>Iniciar Sesión</h2>
                    <label htmlFor="username">Usuario:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del nombre de usuario
                        required 
                    />
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                        required 
                    />
                    <button type="submit">Iniciar Sesión</button> {/* Botón para enviar el formulario */}
                </form>
            )}
        </div>
    );
};

export default Login;
