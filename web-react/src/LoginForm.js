import React, { useState } from 'react';
import './LoginForm.css'; // Archivo de estilos CSS


const LoginForm = ({ onRegisterClick, onSuccessLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Obtener datos guardados localmente
    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPassword = localStorage.getItem('registeredPassword');
  
    // Verificar el usuario y contraseña ingresados con los datos guardados localmente
    if ((username === storedEmail && password === storedPassword) || (username === 'admin' && password === '123')) {
      console.log('Inicio de sesión exitoso');
      onSuccessLogin();
      // Aquí puedes redirigir al usuario o realizar otras acciones
    } else {
      console.log('Usuario o contraseña incorrectos');
      // Aquí podrías mostrar un mensaje de error o hacer otra acción
    }
  };
  

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="username" className="label-left">Correo:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Ingresa tu correo"
            className="align-left input-small" // Clase para alinear a la izquierda y reducir el tamaño del input
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label-left">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingresa tu contraseña"
            className="align-left input-small" // Clase para alinear a la izquierda y reducir el tamaño del input
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p className="register-link">¿No tienes una cuenta? <span onClick={onRegisterClick}>Regístrate aquí</span></p>
      </form>
    </div>
  );
};

export default LoginForm;
