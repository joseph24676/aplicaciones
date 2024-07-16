import React, { useEffect, useState } from 'react';
import './historial.css'; // Importar el archivo CSS

const Historial = () => {
    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        cargarHistorial();
    }, []);

    // Función para cargar el historial de solicitudes desde localStorage
    const cargarHistorial = () => {
        let solicitudesGuardadas = JSON.parse(localStorage.getItem('historialSolicitudes')) || [];
        setSolicitudes(solicitudesGuardadas);
    }

    // Función para eliminar el historial de solicitudes
    const eliminarHistorial = () => {
        localStorage.removeItem('historialSolicitudes');
        setSolicitudes([]);
    }

    return (
        <div className="container">
            <header>
                <h1>Historial de solicitudes</h1>
                <button id="eliminarHistorialBtn" onClick={eliminarHistorial}>Eliminar Historial</button>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>ID de Solicitud</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo Electrónico</th>
                        <th>Mensaje</th>
                        <th>Fecha de Solicitud</th>
                        <th>Estado</th>
                        <th>Comentarios de Revisión</th>
                    </tr>
                </thead>
                <tbody id="solicitudesBody">
                    {solicitudes.map((solicitud, index) => (
                        <tr key={index}>
                            <td>{solicitud.id}</td>
                            <td>{solicitud.nombre}</td>
                            <td>{solicitud.apellido}</td>
                            <td>{solicitud.email}</td>
                            <td>{solicitud.mensaje}</td>
                            <td>{solicitud.fecha}</td>
                            <td className={solicitud.estado.toLowerCase().replace(' ', '-')}>{solicitud.estado}</td>
                            <td>{solicitud.comentarios}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Historial;

