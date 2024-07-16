import React, { useEffect, useState } from 'react';
import './revision.css'; // Asegúrate de que los estilos estén en este archivo

const Revision = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [comments, setComments] = useState('');

    useEffect(() => {
        // Cargar solicitudes desde localStorage al inicio
        const storedSolicitudes = JSON.parse(localStorage.getItem("historialSolicitudes")) || [];
        setSolicitudes(storedSolicitudes);
    }, []);

    // Función para mostrar detalles de la solicitud seleccionada
    const showDetails = (doc) => {
        setSelectedDocument(doc);
    };

    // Función para aprobar la solicitud seleccionada
    const approveDocument = () => {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }

        const updatedSolicitudes = solicitudes.map(doc =>
            doc === selectedDocument ? { ...doc, estado: 'Aprobado', comentarios: comments } : doc
        );

        // Guardar historial actualizado en localStorage
        localStorage.setItem("historialSolicitudes", JSON.stringify(updatedSolicitudes));
        setSolicitudes(updatedSolicitudes);

        alert(`Documento de ${selectedDocument.nombre} aprobado con comentarios: "${comments}"`);
    };

    // Función para rechazar la solicitud seleccionada
    const rejectDocument = () => {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }

        const updatedSolicitudes = solicitudes.map(doc =>
            doc === selectedDocument ? { ...doc, estado: 'Rechazado', comentarios: comments } : doc
        );

        // Guardar historial actualizado en localStorage
        localStorage.setItem("historialSolicitudes", JSON.stringify(updatedSolicitudes));
        setSolicitudes(updatedSolicitudes);

        alert(`Documento de ${selectedDocument.nombre} rechazado con comentarios: "${comments}"`);
    };

    return (
        <div className="revision-container">
            <header className="revision-header">
                <h1>Revisión y Validación de Documentos</h1>
            </header>
            <main className="revision-main-content">
                <div className="revision-documents-list">
                    <h2>Documentos Pendientes de Revisión</h2>
                    <ul id="documents">
                        {solicitudes.map((doc, index) => (
                            <li key={index} className="revision-document-item" onClick={() => showDetails(doc)}>
                                {`${doc.nombre} ${doc.apellido} - Subido por: ${doc.email} el ${doc.fecha}`}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="revision-document-details">
                    <h2>Detalles del Documento</h2>
                    <div className="revision-details-box" id="details">
                        {selectedDocument ? (
                            <>
                                <p><strong>Nombre:</strong> {selectedDocument.nombre} {selectedDocument.apellido}</p>
                                <p><strong>Correo electrónico:</strong> {selectedDocument.email}</p>
                                <p><strong>Fecha de subida:</strong> {selectedDocument.fecha}</p>
                                {/* Aquí puedes agregar más detalles según lo necesites */}
                            </>
                        ) : (
                            <p>Seleccione un documento para ver los detalles.</p>
                        )}
                    </div>
                    <form className="revision-review-form" id="reviewForm">
                        <label className="revision-label" htmlFor="comments">Comentarios:</label>
                        <textarea
                            className="revision-textarea"
                            id="comments"
                            name="comments"
                            rows="4"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="Agregar comentarios o solicitar información adicional..."
                        ></textarea>
                        <div className="revision-buttons">
                            <button type="button" className="revision-approve-button" onClick={approveDocument}>Aprobar</button>
                            <button type="button" className="revision-reject-button" onClick={rejectDocument}>Rechazar</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Revision;
