// src/pages/Customers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomersList from "../../components/Customers/CustomersList";
import "../Sales/Sales.css";
import "../Employees/Employees.css";
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

export default function Customers() {
  const navigate = useNavigate();

  return (
    <div className="customers-page">
      <div className="container">
        {/* Main content */}
        <main className="main-content">
          <header className="header">
            <h1>Clientes</h1>
            <div className="search-add-container">
              <input
                type="text"
                placeholder="Buscar clientes..."
                className="search-input"
              />
              <button
                className="add-button"
                onClick={() => navigate("/customersRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          <CustomersList />
        </main>
      </div>
    </div>
  );
}
