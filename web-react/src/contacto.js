import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessageVisible(true);

        setTimeout(() => {
            setSuccessMessageVisible(false);
        }, 3000);

        setFormValues({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>
            <header>
                <h1>Contacto</h1>
            </header>
            <div className="container">
                <div className="section">
                    <h2>Contacto</h2>
                    <p>Si tienes alguna pregunta o necesitas asistencia técnica con la página web para solicitud y validación de documentos para promociones y recategorizaciones para docentes ULEAM, por favor contáctanos.</p>
                    <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto:</label>
                            <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" rows="5" value={formValues.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    {successMessageVisible && <div id="successMessage" className="success-message">Mensaje enviado con éxito</div>}
                </div>
            </div>
        </div>
    );
};

export default Contacto;
