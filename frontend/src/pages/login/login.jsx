import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errores visuales
    setEmailError(false);
    setPasswordError(false);

    // Validación de campos vacíos
    if (!email || !password) {
      toast.error("Por favor, complete todos los campos.");
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Habilita cookies HTTP
        body: JSON.stringify({ email, password }), // email puede ser también username
      });

      const data = await res.json();

      if (!res.ok || data.message !== "Inicio de sesión exitoso") {
        throw new Error(data.message || "Credenciales incorrectas");
      }

      toast.success("Inicio de sesión exitoso");

      // Redirige según el tipo de usuario
      setTimeout(() => {
        switch (data.userType) {
          case "admin":
            navigate("/employees-private");
            break;
          case "employee":
            navigate("/employees-private");
            break;
          case "customer":
            navigate("/");
            break;
          default:
            navigate("/");
        }
      }, 800);
    } catch (err) {
      toast.error(err.message || "No se pudo iniciar sesión.");
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={LoginI} alt="Login visual" className="login-image" />
      </div>

      <div className="form-section">
        <h2>INICIAR SESIÓN</h2>
        <p className="subtitle">Ingresa tus credenciales</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span className="bullet">●</span> Correo o usuario:
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
