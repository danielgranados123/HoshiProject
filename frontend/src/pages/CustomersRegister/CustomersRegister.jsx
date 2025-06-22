// src/pages/CustomersRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomersRegisterForm from "../../components/Customers/CustomersRegisterForm";
// sidebar + hamburger styles
import "../Sales/Sales.css";
// form-specific styles
import "../CustomersRegister/CustomersRegister.css";

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

export default function CustomersRegister() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container register">
      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
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
            <li onClick={() => navigate("/Sales")}>
              <FaShoppingCart /> Ventas
            </li>
            <li className="active">
              <FaUser /> Clientes
            </li>
            <li onClick={() => navigate("/Catalog")}>
              <FaBox /> Catálogo
            </li>
            <li onClick={()=> navigate("/Employees")}>
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
          <button
            className="back-btn"
            onClick={() => navigate("/customers")}
          >
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Clientes</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

        {/* Register Form */}
        <div className="register-grid">
          <CustomersRegisterForm
            onSuccess={() => navigate("/customers")}
          />
        </div>
      </main>
    </div>
  );
}
