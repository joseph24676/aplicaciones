import React, { useState } from 'react';
import './Solicitud.css'; // Importa tus estilos CSS aquí si los tienes en un archivo separado
import Carga from './carga'; // Ajusta el nombre del componente según sea necesario

const Solicitud = ({ actualizarHistorial }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarCarga, setMostrarCarga] = useState(false);
  const [mostrarMensajeExito, setMostrarMensajeExito] = useState(false); // Nuevo estado para el mensaje de éxito

  const handleSubmit = (event) => {
    event.preventDefault();

    const solicitud = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString(),
      estado: "En Revisión",
      nombre: nombre,
      apellido: apellido,
      email: email,
      mensaje: mensaje,
      comentarios: "En revisión"
    };

    // Guardar la solicitud en localStorage
    let historialSolicitudes = JSON.parse(localStorage.getItem('historialSolicitudes')) || [];
    historialSolicitudes.push(solicitud);
    localStorage.setItem('historialSolicitudes', JSON.stringify(historialSolicitudes));

    // Limpiar el formulario
    setNombre('');
    setApellido('');
    setEmail('');
    setMensaje('');

    // Actualizar el historial mostrado en el componente padre
    actualizarHistorial();

    // Mostrar el mensaje de éxito
    setMostrarMensajeExito(true);

    // Ocultar el mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setMostrarMensajeExito(false);
    }, 3000); // 3000 milisegundos = 3 segundos
  };

  const handleUploadClick = () => {
    setMostrarCarga(true);
  };

  return (
    <div className="solicitud-container">
      {mostrarCarga ? (
        <Carga /> // Muestra el componente Carga
      ) : (
        <>
          <h1>Solicitud de Promoción o Recategorización</h1>
          <p>Aquí, podrás crear una solicitud de promoción o recategorización, asegúrate de adjuntar correctamente tus documentos requeridos y proporcionar información adicional relevante para el proceso.</p>
          <form onSubmit={handleSubmit} className="solicitud-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombres:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellidos:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="button" className="upload-button" onClick={handleUploadClick}>Cargar documentos</button>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje adicional:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Enviar Solicitud</button>
          </form>
          {/* Mostrar el mensaje de éxito si mostrarMensajeExito es true */}
          {mostrarMensajeExito && (
            <div className="mensajeExito">
              Solicitud enviada con éxito
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Solicitud;
