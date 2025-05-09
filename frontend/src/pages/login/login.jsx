import React from "react";
import './Login.css';
import LoginI from "../../assets/login.svg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={LoginI} alt="Car" className="login-image" />
      </div>

      <div className="form-section">
        <div ></div>
        <h2>INICIAR SESIÓN</h2>
        <p className="subtitle">Ingresa tus credenciales</p>

        <form>
          <label>
            <span className="bullet">●</span> Usuario:
            <input type="text" placeholder="Wilfredo Granados" />
          </label>

          <label>
            <span className="bullet">●</span> Contraseña:
            <input type="password" placeholder="************" />
          </label>

          <a href="/recovery" className="forgot-password">¿Olvidaste tu contraseña?</a>

          <button type="submit" className="btn-login" onClick={handleLoginRedirect}>Ingresar</button>

          <p className="register-text">
            ¿No tienes una cuenta?
            <a href="/register" className="btn-register">Registrarme</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
