import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ReactDOM from 'react-dom';

import RegistrationForm from './RegistrationForm';
import Tablero from './Tablero'; // Asegúrate de que la ruta sea correcta según la ubicación de Tablero.js


import './App.css'; // Archivo de estilos CSS

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
  };

  const handleSuccessfulLogin = () => {
    setShowLoginForm(false); // Oculta el formulario de inicio de sesión tras iniciar sesión correctamente
    ReactDOM.render(<Tablero />, document.getElementById('root')); // Renderiza el componente Tablero directamente
  };
  

  return (
    <div className="App">
      {showLoginForm ? (
        <LoginForm onRegisterClick={handleRegisterClick} onSuccessLogin={handleSuccessfulLogin} />
      ) : (
        <RegistrationForm onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;

