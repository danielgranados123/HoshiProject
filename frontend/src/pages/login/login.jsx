import React from "react";
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/path/to/your/image.png" alt="Car" className="login-image" />
        <div className="logo">HOSHI</div>
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

          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>

          <button type="submit" className="btn-login">Ingresar</button>

          <p className="register-text">
            ¿No tienes una cuenta?
            <a href="#" className="btn-register">Registrarme</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
