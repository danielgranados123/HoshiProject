// src/pages/Customers/CustomersRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Sales/Sales.css";
import "./EmployeeesRegister.css";
import RegisterEmployeesform from "../../components/Employees/RegisterEmployeesform"

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
import useDataEmployees from "../../components/Employees/hooks/useDataEmployees";

export default function RegisterEmployeees() {
  const { register, loading, error } = useDataEmployees();

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
          <button className="back-btn" onClick={() => navigate("/Employees")}>
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Empleados</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

      
        <div className="register-grid">
          <RegisterEmployeesform loading={loading}
            onSuccess={() => navigate("/Employees")}
          />
        </div>

            <button
        type="submit"
        className="save-btn"
        disabled={loading}
      >
        {loading ? "Guardando…" : "Guardar"}
      </button>
          
      
      </main>
    </div>
  );
};


