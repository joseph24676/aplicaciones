import React, { useState } from 'react';
import './Tablero.css'; // Archivo de estilos CSS
import solicitudImage from './profesor.png'; // Importa la imagen
import Solicitud from './Solicitud'; // Importa el componente de Solicitud
import Revision from './login'; // Importa el componente de revisión
import Historial from './historial'; // Ajusta la importación al nombre correcto
import Ayuda from './ayuda';
import Notificacion from './notificacion';
import Perfil from './perfil';
import Leer from './leer'; // Importa el componente Leer
import LoginForm from './LoginForm'; // Asegúrate de que esta importación esté correcta

const Tablero = () => {
  const [mostrarComponente, setMostrarComponente] = useState('inicio');

  const renderizarComponente = () => {
    switch (mostrarComponente) {
      case 'solicitud':
        return <Solicitud />;
      case 'revision':
        return <Revision/>;
      case 'login':
        return <LoginForm />; // Renderiza el componente de Login
      case 'requerimientos':
        return <div>Requerimientos</div>;
      case 'historial':
        return <Historial />;
      case 'ayuda':
        return <Ayuda />;
      case 'notificacion':
        return <Notificacion />;
      case 'perfil':
        return <Perfil />;
      case 'leer': // Nuevo caso para renderizar el componente Leer
        return <Leer />;
      case 'cerrarSesion':
        // Redirecciona a LoginForm.js al hacer clic en "Cerrar sesión"
        window.location.href = './LoginForm.js';
        return null; // Retorna null ya que no se renderizará ningún componente
      default:
        return (
          <div className="welcome-section">
            <h1>Bienvenidos estimados maestros</h1>
            <h1>En esta web podrás realizar tus solicitudes</h1>
            <img src={solicitudImage} alt="Solicitud de promoción" className="solicitud-image" />
            <div className="info-box">
              <h2>Información que te puede interesar</h2>
              <h2>Aquí podrás ver más información que puede llamarte la atención.</h2>
              <a href="#" onClick={handleLeerClick}>Leer más</a>
            </div>
          </div>
        );
    }
  };

  const handleLeerClick = () => {
    setMostrarComponente('leer'); // Cambia a 'leer' al hacer clic en "Leer más"
  };

  const handleRevisionClick = () => {
    setMostrarComponente('revision'); // Cambia a 'revision' al hacer clic en "Revisión y Validación"
  };

  return (
    <div className="tablero-container">
      <nav>
        <ul className="menu-horizontal">
          <li><a href="#" onClick={() => setMostrarComponente('inicio')}>Inicio</a></li>
          <li>
            <a href="#" onClick={() => setMostrarComponente('requerimientos')}>
              Requerimientos
            </a>
            <ul className="menu-vertical">
              <li>
                <a href="#" onClick={() => setMostrarComponente('solicitud')}>
                  Solicitud de promoción/Recategorización
                </a>
              </li>
              <li><a href="#" onClick={handleRevisionClick}>Revisión y Validación</a></li>
            </ul>
          </li>
          
          <li><a href="#" onClick={() => setMostrarComponente('historial')}>Historial de solicitudes</a></li>
          <li><a href="#" onClick={() => setMostrarComponente('ayuda')}>Ayuda y soporte técnico</a></li>
          <li><a href="#" onClick={() => setMostrarComponente('notificacion')}>Notificaciones</a></li>
          <li><a href="#" onClick={() => setMostrarComponente('perfil')}>Perfil de usuario</a></li>
          <li><a href="#" onClick={() => setMostrarComponente('cerrarSesion')}>Cerrar sesión</a></li>
        </ul>
      </nav>

      {/* Mostrar componente según el estado */}
      {renderizarComponente()}
    </div>
  );
};

export default Tablero;
