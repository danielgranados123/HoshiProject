// SalesRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Reutilizamos Sales.css para sidebar + hamburger
import "../Sales/Sales.css";
import "./SalesRegister.css";
import ToyotaSvg from "../../assets/toyota.svg";

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

const SalesRegister = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [cliente, setCliente] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [precio, setPrecio] = useState("");
  const [metodo, setMetodo] = useState("");
  const [tipo, setTipo] = useState("");

  const handleGuardar = () => {
    // lógica de guardado...
    navigate("/Sales");
  };

  return (
    <div className="container register">
      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar idéntico al de Sales */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}> <FaHome /> Inicio </li>
            <li className="active"> <FaShoppingCart /> Ventas </li>
            <li> <FaUser /> Clientes </li>
            <li> <FaBox /> Catálogo </li>
            <li> <FaUsersCog /> Empleados </li>
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
        {/* Header con flecha + título + subtítulo abajo */}
        <header className="register-header">
          <button
            className="back-btn"
            onClick={() => navigate("/Sales")}
          >
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Ventas</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

        {/* Grid: Formulario + Vista previa */}
        <div className="register-grid">
          <form
            className="register-form"
            onSubmit={e => { e.preventDefault(); handleGuardar(); }}
          >
            <div className="form-group">
              <label>Cliente</label>
              <div className="input-plus">
                <input
                  type="text"
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}
                  placeholder="Selecciona cliente"
                  required
                />
                <button type="button" className="plus-btn">＋</button>
              </div>
            </div>

            <div className="form-group">
              <label>Vehículo</label>
              <select
                value={vehiculo}
                onChange={e => setVehiculo(e.target.value)}
                required
              >
                <option value="">SSV012546</option>
                <option value="ABC123">ABC123</option>
              </select>
            </div>

            <div className="form-group">
              <label>Precio</label>
              <input
                type="text"
                value={precio}
                onChange={e => setPrecio(e.target.value)}
                placeholder="$0.00"
                required
              />
            </div>

            <div className="form-group">
              <label>Método de pago</label>
              <select
                value={metodo}
                onChange={e => setMetodo(e.target.value)}
                required
              >
                <option>Tarjeta</option>
                <option>Efectivo</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tipo de pago</label>
              <select
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                required
              >
                <option>Un solo pago</option>
                <option>Financiamiento</option>
              </select>
            </div>

            <button type="submit" className="save-btn">
              Guardar
            </button>
          </form>

          <div className="car-card">
            <img
              src= {ToyotaSvg}
              alt="KIA RIO 2019"
            />
            <div className="card-content">
              <h3>KIA RIO 2019</h3>
              <p className="price">$13,500.00</p>
              <p className="details">Gasolina · 90,000 km</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesRegister;