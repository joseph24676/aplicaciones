import React from 'react';
import './guia.css'; // Importar estilos CSS

const Guia = () => {
    return (
        <div>
            <header>
                <h1>Guías de Uso</h1>
            </header>
            <div className="container">
                <div className="section">
                    <h2>Documentación</h2>
                    <div className="docs">
                        <div className="doc"><a href="docs/DOC1.pdf" target="_blank" rel="noopener noreferrer">Guía 1</a></div>
                        <div className="doc"><a href="docs/DOC 2.pdf" target="_blank" rel="noopener noreferrer">Guía 2</a></div>
                        <div className="doc"><a href="docs/DOC 3.pdf" target="_blank" rel="noopener noreferrer">Guía 3</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guia;
