import React from "react";
import { useNavigate } from "react-router-dom";
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

const customersData = [
  { name: "Ricardo de Paz" },
  { name: "Emerson González" },
  { name: "Mirna Espinoza" },
  { name: "Daniel Hernández" },
  { name: "Bryan Rodríguez" },
  { name: "Eduardo Cornejo" },
  { name: "Alexander Gáldamez" },
  { name: "Isaac Cañas" },
  { name: "Juan Pérez" },
  { name: "José Martínez" }
];

const Customers = () => {
  const navigate = useNavigate();

  return (
    <div className="customers-page">    {/* Scope único */}
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
                title="Agregar cliente"
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
              <ul className="customers-list">
                {customersData.map((c, idx) => (
                  <li key={idx} className="customer-item">
                    <div className="customer-name">{c.name}</div>
                    <span className="options">⋮</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Customers;
