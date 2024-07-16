import React, { useState } from 'react';
import './preguntas.css';

const Preguntas = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqData = [
        {
            section: "General",
            items: [
                {
                    question: "¿Qué es la página web para solicitud y validación de documentos para promociones y recategorizaciones?",
                    answer: "La página web es una plataforma digital diseñada para facilitar la solicitud y validación de documentos necesarios para las promociones y recategorizaciones de docentes en la Universidad Laica Eloy Alfaro de Manabí (ULEAM)."
                },
                {
                    question: "¿Quién puede utilizar esta página web?",
                    answer: "La página web está destinada a los docentes de ULEAM que desean solicitar promociones o recategorizaciones dentro de la universidad."
                }
            ]
        },
        {
            section: "Acceso y Registro",
            items: [
                {
                    question: "¿Cómo puedo acceder a la página web?",
                    answer: "Puedes acceder a la página web a través del portal oficial de ULEAM, utilizando tus credenciales institucionales."
                },
                {
                    question: "¿Qué hago si no puedo acceder a mi cuenta?",
                    answer: "Si tienes problemas para acceder a tu cuenta, puedes utilizar la opción 'Recuperar contraseña' en la página de inicio de sesión o contactar al soporte técnico de ULEAM para asistencia."
                }
            ]
        },
        {
            section: "Uso de la Página Web",
            items: [
                {
                    question: "¿Cómo solicito una promoción o recategorización?",
                    answer: "Una vez que hayas iniciado sesión, ve al apartado de solicitudes y selecciona 'Nueva solicitud'. Completa el formulario con la información requerida y adjunta los documentos necesarios."
                },
                {
                    question: "¿Qué documentos necesito para completar mi solicitud?",
                    answer: "Los documentos requeridos pueden incluir títulos académicos, certificados de cursos, publicaciones, cartas de recomendación, entre otros. La lista completa de documentos se especifica en la sección de requisitos de la página web."
                },
                {
                    question: "¿Puedo guardar mi solicitud y completarla más tarde?",
                    answer: "Sí, la página web permite guardar solicitudes incompletas para que puedas completarlas en otro momento antes de enviarlas."
                },
                {
                    question: "¿Cómo puedo verificar el estado de mi solicitud?",
                    answer: "Puedes verificar el estado de tu solicitud en la sección 'Mis solicitudes' dentro de la página web, donde se mostrará si está en revisión, aprobada o si requiere alguna acción adicional."
                }
            ]
        },
        {
            section: "Validación de Documentos",
            items: [
                {
                    question: "¿Quién valida los documentos que envío?",
                    answer: "Los documentos son validados por el comité de promociones y recategorizaciones de ULEAM, compuesto por miembros autorizados del personal administrativo y académico."
                },
                {
                    question: "¿Cuánto tiempo tarda la validación de documentos?",
                    answer: "El tiempo de validación puede variar dependiendo del volumen de solicitudes y la complejidad de los documentos presentados. Generalmente, el proceso puede tardar entre dos a cuatro semanas."
                }
            ]
        },
        {
            section: "Soporte Técnico",
            items: [
                {
                    question: "¿A quién contacto si tengo problemas con la página web?",
                    answer: "Si tienes algún problema técnico con la página web, puedes contactar al soporte técnico de ULEAM a través del correo electrónico soporte@uleam.edu.ec o llamando al número de atención al cliente proporcionado en el portal."
                },
                {
                    question: "¿La página web está disponible en dispositivos móviles?",
                    answer: "Sí, la página web es compatible con dispositivos móviles y puedes acceder a ella a través de cualquier navegador web en tu teléfono o tablet."
                }
            ]
        },
        {
            section: "Seguridad y Privacidad",
            items: [
                {
                    question: "¿Qué medidas de seguridad tiene la página web para proteger mis datos?",
                    answer: "La página web utiliza encriptación de datos y medidas de seguridad avanzadas para proteger la información personal y los documentos de los usuarios. Todos los datos se manejan conforme a las políticas de privacidad de ULEAM."
                },
                {
                    question: "¿Mis datos personales serán compartidos con terceros?",
                    answer: "No, tus datos personales y documentos no serán compartidos con terceros sin tu consentimiento. La información se utiliza exclusivamente para el proceso de promociones y recategorizaciones dentro de ULEAM."
                }
            ]
        }
    ];

    return (
        <div>
            <header>
                <h1>Preguntas Frecuentes</h1>
            </header>
            <div className="container">
                {faqData.map((section, sectionIndex) => (
                    <div className="section" key={sectionIndex}>
                        <h2>{section.section}</h2>
                        {section.items.map((item, itemIndex) => (
                            <div
                                className={`faq-item ${activeIndex === `${sectionIndex}-${itemIndex}` ? 'active' : ''}`}
                                key={itemIndex}
                                onClick={() => toggleFAQ(`${sectionIndex}-${itemIndex}`)}
                            >
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preguntas;
