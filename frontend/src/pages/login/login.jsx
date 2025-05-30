import React, { useState, useEffect } from "react";
import './Login.css';
import LoginI from "../../assets/login.svg";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  // Simulación simple de login sin contexto
  const fakeLogin = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "daniel@gmail.com" && password === "20200008") {
          resolve({ success: true, user: { email, name: "Daniel" } });
        } else {
          resolve({ success: false, message: "Credenciales incorrectas" });
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (!email || !password) {
      toast.error("Por favor, complete todos los campos.");
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    const result = await fakeLogin(email, password);

    if (!result.success) {
      toast.error(result.message || "Credenciales incorrectas.");
      return;
    }

    // Guardar token o info en localStorage
    localStorage.setItem("authToken", "fakeToken123");
    toast.success("Inicio de sesión exitoso.");
    navigate("/Customers");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/Customers");
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={LoginI} alt="Car" className="login-image" />
      </div>

      <div className="form-section">
        <h2>INICIAR SESIÓN</h2>
        <p className="subtitle">Ingresa tus credenciales</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span className="bullet">●</span> Correo electrónico:
            <input
              id="email"
              type="text"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'input-error' : ''}
            />
          </label>

          <label htmlFor="password">
            <span className="bullet">●</span> Contraseña:
            <input
              id="password"
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'input-error' : ''}
            />
          </label>

          <a href="/recovery" className="forgot-password">¿Olvidaste tu contraseña?</a>

          <button type="submit" className="btn-login">Ingresar</button>

          <p className="register-text">
            ¿No tienes una cuenta?
            <a href="/register" className="btn-register">Registrarme</a>
          </p>
        </form>
        <Toaster toastOptions={{ duration: 2000 }} />
      </div>
    </div>
  );
};

export default Login;
