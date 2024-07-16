import React, { useState, useEffect } from 'react';
import './perfil.css';

const Perfil = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    idDocument: '',
    phone: '',
    nationality: ''
  });
  const [avatar, setAvatar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('userData'));
    const savedAvatar = localStorage.getItem('avatarImage');

    if (savedFormData) setFormData(savedFormData);
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setErrorMessage('');
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage('Solo se admiten archivos JPG o PNG.');
      setAvatar('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    localStorage.setItem('avatarImage', avatar);
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="profile-section">
        <h2>Mi Perfil</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="avatar">Foto de Perfil:</label>
            <div className="avatar-wrapper">
              {avatar && <img id="avatar-preview" className="avatar-preview" src={avatar} alt="Vista previa de la foto de perfil" />}
            </div>
            <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleFileChange} />
            {errorMessage && <div id="error-avatar">{errorMessage}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo:</label>
            <input type="text" id="name" name="name" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="idDocument">Número de Cédula:</label>
            <input type="text" id="idDocument" name="idDocument" value={formData.cedula} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Número de Teléfono:</label>
            <input type="tel" id="phone" name="phone" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nationality">Nacionalidad:</label>
            <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
          </div>
          {successMessage && <div id="success-message">Cambios guardados con éxito</div>}
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
