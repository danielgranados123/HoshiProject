// src/components/Customers/Customers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useCustomers from "../../components/Customers/hooks/useCustomers";
import "./Customers.css";
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
  const { customers, loading, error } = useCustomers();

  return (
    <div className="customers-page">
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <nav>
            <ul>
              <li><FaHome /> Inicio</li>
              <li><FaShoppingCart /> Ventas</li>
              <li className="active"><FaUser /> Clientes</li>
              <li><FaBox /> Catálogo</li>
              <li><FaUsersCog /> Empleados</li>
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
                onClick={() => navigate("/CustomersRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          <section className="customers-section">
            <div className="customers-header">
              <span>Cliente</span>
              <span></span>
            </div>
            <div className="customers-scroll">
              {loading && <p>Cargando clientes…</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {!loading && !error && (
                <ul className="customers-list">
                  {customers.map((c) => (
                    <li key={c._id} className="customer-item">
                      <div className="customer-name">{c.name}</div>
                      <span className="options">⋮</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
