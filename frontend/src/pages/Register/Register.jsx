import React from 'react';
import './Register.css';
import LoginI from "../../assets/login.svg";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-image-section">
        <img
          src={LoginI}
          alt="Car interior"
          className="register-car-image"
        />
      </div>
      <div className="register-form-section">
        <h2 className="register-title">REGISTRARME</h2>
        <p className="register-subtitle">Crea una cuenta con tus datos</p>
        <form>
          <label className="register-label">
            Nombre completo:<span>*</span>
            <input type="text" placeholder="Wilfredo Granados" className="register-input" />
          </label>
          <label className="register-label">
            DNI:<span>*</span>
            <input type="text" placeholder="12345678-9" className="register-input" />
          </label>
          <label className="register-label">
            Teléfono:<span>*</span>
            <input type="text" placeholder="1234-5678" className="register-input" />
          </label>
          <label className="register-label">
            Correo electrónico:<span>*</span>
            <input type="email" placeholder="will@gmail.com" className="register-input" />
          </label>
          <label className="register-label">
            Usuario:<span>*</span>
            <input type="text" placeholder="Wilfredo Granados" className="register-input" />
          </label>
          <label className="register-label">
            Contraseña:<span>*</span>
            <input type="password" placeholder="***************" className="register-input" />
          </label>
          <button type="submit" className="register-button">Registrarme</button>
        </form>
        <p className="register-login-text">¿Ya tienes una cuenta?</p>
        <button className="register-login-button">Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Register;
