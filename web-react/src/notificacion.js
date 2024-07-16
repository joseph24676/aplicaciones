import React, { useState, useEffect } from 'react';
import './notificacion.css';

const Notificacion = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        // Simulación de mensajes recibidos iniciales
        setTimeout(() => addMessage('Mensaje recibido del revisor.', 'received'), 1000);
        setTimeout(() => addMessage('Por favor, suba los documentos requeridos.', 'received'), 3000);
    }, []);

    const addMessage = (text, type) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text, type }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (messageInput.trim() !== '') {
            addMessage(messageInput, 'sent');
            setMessageInput('');

            // Simulación de respuesta automática
            setTimeout(() => {
                addMessage('Muy buen día, creemos que tiene alguna inquietud. Por eso nos pondremos en contacto con usted en las próximas horas. Por favor, esté atento.', 'received');
            }, 1000);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="notifications-section">
                    <h2>Notificaciones</h2>
                    <ul className="notifications-list">
                        <li><i className="fas fa-info-circle"></i> Su solicitud ha sido aprobada.</li>
                        <li><i className="fas fa-info-circle"></i> Se necesita información adicional para su solicitud.</li>
                        {/* Agrega más notificaciones según sea necesario */}
                    </ul>
                </div>

                <div className="messages-section">
                    <h2>Mensajes</h2>
                    <div className="messages-list" id="messagesList">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.type}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form id="messageForm" onSubmit={handleSubmit}>
                        <textarea
                            id="messageInput"
                            placeholder="Escribe un mensaje..."
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notificacion;
