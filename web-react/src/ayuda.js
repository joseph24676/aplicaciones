import React, { useState } from 'react';
import './ayuda.css'; // Importar estilos CSS
import Uso from './uso'; // Importar el componente Uso desde uso.js
import Preguntas from './preguntas'; // Importar el componente Preguntas desde preguntas.js
import Contacto from './contacto';

const Ayuda = () => {
    const [mostrarContenido, setMostrarContenido] = useState(null);

    const handleUsoClick = () => {
        setMostrarContenido('uso');
    };

    const handlePreguntasClick = () => {
        setMostrarContenido('preguntas');
    };
    const handleContactoClick = () => {
        setMostrarContenido('contacto');
    };

    return (
        <div>
            <header>
                <h1>Ayuda y Soporte Técnico</h1>
            </header>
            <div className="container">
                <div className="section">
                    <h2>Guías de Uso</h2>
                    <p>Consulta nuestras guías detalladas para aprender a utilizar todas las funciones de nuestra plataforma.</p>
                    {/* Cambia el <a> por un onClick para manejar la navegación internamente */}
                    <button onClick={handleUsoClick}>Ver Guías</button>
                </div>
                <div className="section">
                    <h2>Preguntas Frecuentes</h2>
                    <p>Encuentra respuestas a las preguntas más comunes que puedas tener sobre nuestro servicio.</p>
                    {/* Aquí puedes mantener el <a> original o cambiarlo de la misma manera si necesitas */}
                    <button onClick={handlePreguntasClick}>Ver Preguntas</button>
                </div>
                <div className="section">
                    <h2>Contacto</h2>
                    <p>¿Necesitas ayuda adicional? Ponte en contacto con nuestro equipo de soporte técnico.</p>
                    {/* Aquí puedes mantener el <a> original o cambiarlo de la misma manera si necesitas */}
                    <button onClick={handleContactoClick}>Contactanos</button>
                </div>
            </div>
            {/* Renderizar el componente según el valor de mostrarContenido */}
            {mostrarContenido === 'uso' && <Uso />}
            {mostrarContenido === 'preguntas' && <Preguntas />}
            {mostrarContenido === 'contacto' && <Contacto/>}
        </div>
    );
}

export default Ayuda;
