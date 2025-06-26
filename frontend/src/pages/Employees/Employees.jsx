// src/pages/Employees.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeesList from "../../components/Employees/ListEmployees";
import "../Sales/Sales.css";
import "../Customers/Customers.css";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaUsersCog,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";

export default function Employees() {
  const navigate = useNavigate();

  return (
    <div className="employees-page">
      <div className="container">
        {/* Main content */}
        <main className="main-content">
          <header className="header">
            <h1>Empleados</h1>
            <div className="search-add-container">
              <input
                type="text"
                placeholder="Buscar empleados..."
                className="search-input"
              />
              <button
                className="add-button"
                onClick={() => navigate("/employeesRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          <EmployeesList />
        </main>
      </div>
    </div>
  );
}
