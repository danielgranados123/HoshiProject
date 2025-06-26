// src/pages/Customers/CustomersRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
  const { loading  } = useDataEmployees();

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
          <button className="back-btn" onClick={() => navigate("/employees-private")}>
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Empleados</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

      
        <div className="register-grid">
          <RegisterEmployeesform loading={loading}
            onSuccess={() => navigate("/employees-private")}
          />
        </div>
      </main>
    </div>
  );
};


