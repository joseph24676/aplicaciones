import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [cedula, setCedula] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cedulaError, setCedulaError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [verifyPasswordError, setVerifyPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (/[^a-zA-Z\s]/.test(value)) {  // Permitir letras y espacios
      setNameError(true);
    } else {
      setNameError(false);
    }
    setUsername(value);
  };
  
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (/[^a-zA-Z\s]/.test(value)) {  // Permitir letras y espacios
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    setLastName(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(value);
  };

  const handleCedulaChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value.length !== 10) {
      setCedulaError(true);
    } else {
      setCedulaError(false);
    }
    setCedula(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value.length !== 10) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setPhoneNumber(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
    // Verificar al menos dos números y una mayúscula
    if (/(.*[0-9]){2,}/.test(value) && /[A-Z]/.test(value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 'weak';
    if (password.length < 4) {
      strength = 'weak';
    } else if (password.length >= 4 && password.length <= 7) {
      strength = 'medium';
    } else if (password.length >= 8 && password.length <= 10) {
      strength = 'strong';
    }
    setPasswordStrength(strength);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVerifyPasswordChange = (e) => {
    const value = e.target.value;
    setVerifyPassword(value);
    setVerifyPasswordError(value !== password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Verificar si hay errores
    if (
      nameError ||
      lastNameError ||
      emailError ||
      cedulaError ||
      phoneError ||
      passwordError ||
      verifyPasswordError
    ) {
      // Mostrar mensaje de error genérico
      setRegistrationMessage('No cumple con lo requerido');
      return;
    }
  
    // Crear un objeto con todos los datos del formulario
    const userData = {
      username,
      lastName,
      email,
      password,
      cedula,
      phoneNumber
    };
  
    // Guardar datos localmente
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('registeredEmail', email); // Guardar correo para inicio de sesión
    localStorage.setItem('registeredPassword', password); // Guardar contraseña para inicio de sesión
    
    // Mostrar mensaje de registro exitoso
    setRegistrationMessage('¡Registro realizado con éxito!');
    setTimeout(() => {
      setRegistrationMessage('');
    }, 3000); // Limpiar el mensaje después de 3 segundos
  
    // Limpiar los campos después del registro (si es necesario)
    setUsername('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVerifyPassword('');
    setCedula('');
    setPhoneNumber('');
  };
  
  

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleRegister}>
        <h2>Registro</h2>
        {registrationMessage && <p className="registration-message">{registrationMessage}</p>}
        <div className="form-group">
          <label>Nombres:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {nameError && <p className="error-message">Solo se admiten letras</p>}
        </div>
        <div className="form-group">
          <label>Apellidos:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          {lastNameError && <p className="error-message">Solo se admiten letras</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error-message">Se requiere "@" y ".com"</p>}
        </div>
        <div className="form-group">
          <label>Número de Cédula:</label>
          <input
            type="text"
            value={cedula}
            onChange={handleCedulaChange}
            required
          />
          {cedulaError && <p className="error-message">Solo se aceptan 10 dígitos numéricos</p>}
        </div>
        <div className="form-group">
          <label>Número de Teléfono:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && <p className="error-message">Solo se aceptan 10 dígitos numéricos</p>}
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message">Su contraseña debe tener 2 números y una Mayúscula</p>}
          <div className="password-strength-meter">
            <div
              className={`password-strength-bar password-strength-${passwordStrength}`}
              style={{ width: passwordStrength === 'weak' ? '33%' : passwordStrength === 'medium' ? '66%' : '100%' }}
            ></div>
          </div>
        </div>
        <div className="form-group">
          <label>Verificar Contraseña:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={verifyPassword}
            onChange={handleVerifyPasswordChange}
            required
          />
          {verifyPasswordError && <p className="error-message">Las contraseñas no coinciden</p>}
        </div>
        <div className="show-password-checkbox">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />
          <label htmlFor="showPassword">Mostrar contraseña</label>
        </div>
        <button type="submit">Registrarse</button>
        <p className="login-link">¿Ya tienes una cuenta? <button onClick={onLoginClick}>Inicia sesión aquí</button></p>
      </form>
    </div>
  );
};

export default RegistrationForm;
