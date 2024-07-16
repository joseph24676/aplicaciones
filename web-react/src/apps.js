import React, { useState, useEffect } from 'react';
import Solicitud from './Solicitud';
import Historial from './historial';
import './App.css';

const App = () => {
  const [historialSolicitudes, setHistorialSolicitudes] = useState([]);

  // Cargar historial de localStorage al montar el componente
  useEffect(() => {
    const storedHistorial = JSON.parse(localStorage.getItem('historialSolicitudes')) || [];
    setHistorialSolicitudes(storedHistorial);
  }, []);

  // Función para actualizar el historial de solicitudes
  const actualizarHistorial = (nuevaSolicitud) => {
    const nuevoHistorial = [...historialSolicitudes, nuevaSolicitud];
    setHistorialSolicitudes(nuevoHistorial);
    localStorage.setItem('historialSolicitudes', JSON.stringify(nuevoHistorial));
  };

  return (
    <div className="App">
      <Solicitud actualizarHistorial={actualizarHistorial} />
      <Historial solicitudes={historialSolicitudes} />
    </div>
  );
};

export default App;
