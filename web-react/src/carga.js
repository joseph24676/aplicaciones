import React, { useState } from 'react';
import './carga.css'; // Asegúrate de que los estilos estén en este archivo

const Carga = () => {
    const [files, setFiles] = useState({
        experienciaProfesional: [],
        eventosAcademicos: [],
        otrosDocumentos: [],
        titulosAcademicos: [],
        certificadosCapacitacion: [],
        cvExperienciaDocente: [],
        cvExperienciaProfesional: [],
        cvPublicaciones: [],
        cvCongresos: []
    });

    const maxFileSize = 5 * 1024 * 1024; // 5MB

    const handleFileChange = (event, key) => {
        setFiles({
            ...files,
            [key]: Array.from(event.target.files)
        });
    };

    const handleUploadClick = () => {
        let valid = true;
        let missingFiles = [];

        for (const [key, fileArray] of Object.entries(files)) {
            if (fileArray.length === 0) {
                valid = false;
                missingFiles.push(key);
            } else {
                for (const file of fileArray) {
                    if (file.size > maxFileSize) {
                        alert(`El archivo ${file.name} supera el tamaño máximo permitido de 5MB.`);
                        valid = false;
                    }
                }
            }
        }

        if (!valid) {
            alert(`Faltan los siguientes documentos: ${missingFiles.join(', ')}`);
            return;
        }

        // Guardar archivos en localStorage
        const storedSolicitudes = JSON.parse(localStorage.getItem('historialSolicitudes')) || [];
        const newSolicitud = {
            files: files,
            nombre: 'Nombre', // Debes obtener estos datos del usuario
            apellido: 'Apellido', // Debes obtener estos datos del usuario
            email: 'email@example.com', // Debes obtener estos datos del usuario
            fecha: new Date().toLocaleDateString(),
            estado: 'Pendiente',
            comentarios: ''
        };
        storedSolicitudes.push(newSolicitud);
        localStorage.setItem('historialSolicitudes', JSON.stringify(storedSolicitudes));

        alert('Documentos cargados con éxito');
    };

    const renderDropZone = (label, key) => (
        <div className="form-group">
            <label>{label}:</label>
            <div 
                className="drop-zone" 
                onClick={() => document.getElementById(key).click()}
                onDrop={(e) => {
                    e.preventDefault();
                    handleFileChange(e, key);
                }}
                onDragOver={(e) => e.preventDefault()} // Previene el comportamiento por defecto
            >
                <p>Arrastra y suelta tus archivos aquí o haz clic para seleccionarlos.</p>
                <input
                    type="file"
                    id={key}
                    multiple
                    accept=".pdf,.doc,.docx"
                    hidden
                    onChange={(e) => handleFileChange(e, key)}
                />
                {files[key].length > 0 && (
                    <ul>
                        {files[key].map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

    return (
        <div className="container">
            <h1>Carga de Documentos</h1>
            <p>Bienvenido al sistema de carga de documentos para la solicitud o recategorización de profesores.</p>

            {renderDropZone('Documentación de Experiencia Profesional', 'experienciaProfesional')}
            {renderDropZone('Participación en Eventos Académicos', 'eventosAcademicos')}
            {renderDropZone('Otros Documentos Relevantes', 'otrosDocumentos')}
            {renderDropZone('Títulos Académicos', 'titulosAcademicos')}
            {renderDropZone('Certificados de Capacitación y Actualización', 'certificadosCapacitacion')}
            {renderDropZone('Currículum Vitae - Experiencia Docente', 'cvExperienciaDocente')}
            {renderDropZone('Currículum Vitae - Experiencia Profesional', 'cvExperienciaProfesional')}
            {renderDropZone('Currículum Vitae - Publicaciones y Trabajos de Investigación', 'cvPublicaciones')}
            {renderDropZone('Currículum Vitae - Participación en Congresos y Seminarios', 'cvCongresos')}

            <button type="button" id="cargarDocumentoBtn" onClick={handleUploadClick}>Cargar Documentos</button>
        </div>
    );
};

export default Carga;
