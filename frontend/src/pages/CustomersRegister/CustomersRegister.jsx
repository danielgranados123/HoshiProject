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
      {/* Main content */}
      <main className="main-content register-content">
        {/* Header */}
        <header className="register-header">
          <button
            className="back-btn"
            onClick={() => navigate("/customers-private")}
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
            onSuccess={() => navigate("/customers-private")}
          />
        </div>
      </main>
    </div>
  );
}
