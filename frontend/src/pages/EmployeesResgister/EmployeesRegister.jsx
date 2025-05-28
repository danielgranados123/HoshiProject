// src/pages/Customers/CustomersRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// sidebar + hamburger styles
import "../Sales/Sales.css";
// form-specific styles
import "./CustomersRegister.css";

import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaUsersCog,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaArrowLeft
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const CustomersRegister = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGuardar = () => {
    // aquí llamas a tu backend para guardar el cliente
    navigate("/Customers");
  };

  return (
    <div className="container register">
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>
              <FaHome /> Inicio
            </li>
            <li>
              <FaShoppingCart /> Ventas
            </li>
            <li className="active">
              <FaUser /> Clientes
            </li>
            <li>
              <FaBox /> Catálogo
            </li>
            <li>
              <FaUsersCog /> Empleados
            </li>
          </ul>
        </nav>
        <div className="bottom-section">
          <div className="greeting">
            <p><strong>¡Buenos días, Bryan!</strong></p>
            <p>Miércoles 26 de febrero</p>
            <p className="time">9:45 a.m.</p>
          </div>
          <ul>
            <li><FaCog /> Ajustes</li>
            <li><FaSignOutAlt /> Salir</li>
          </ul>
          <p className="copyright">©2025–Hoshi</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content register-content">
        {/* Header */}
        <header className="register-header">
          <button className="back-btn" onClick={() => navigate("/Customers")}>
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Clientes</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

        {/* Form grid: 2 columns × 3 rows */}
        <div className="register-grid">
          <form
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleGuardar();
            }}
          >
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Wilfredo Granados"
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9876-5432"
                required
              />
            </div>

            <div className="form-group">
              <label>DNI (Documento de identificación)</label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="12345678-9"
                required
              />
            </div>

            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="SS20240123"
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="wilf@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="save-btn">
              Guardar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CustomersRegister;
