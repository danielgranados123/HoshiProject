import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// sidebar + hamburger styles
import "../Sales/Sales.css";
// form-specific styles
import "./CustomersRegister.css";
// IMPORT sin extensión, apuntando al hook que creamos:
import useRegisterCustomer from "../../components/CustomersRegister/hooks/useCostumersRegister";

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
  const { register, loading, error } = useRegisterCustomer();

  const [form, setForm] = useState({
    name: "",
    dni: "",
    email: "",
    phone: "",
    username: "",
    password: ""
  });

  const onChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await register(form);
    if (ok) navigate("/Customers");
    else alert(error || "Error desconocido");
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
            <li onClick={() => navigate("/Employees")}>
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
            onClick={() => navigate("/Customers")}
          >
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Clientes</h1>
            <span className="sub-title">Nuevo registro</span>
          </div>
        </header>

        {/* Form grid: 2 columns × 3 rows */}
        <div className="register-grid">
          <form className="register-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Wilfredo Granados"
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="9876-5432"
                required
              />
            </div>

            <div className="form-group">
              <label>DNI (Documento de identificación)</label>
              <input
                name="dni"
                value={form.dni}
                onChange={onChange}
                placeholder="12345678-9"
                required
              />
            </div>

            <div className="form-group">
              <label>Usuario</label>
              <input
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder="SS20240123"
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="wilf@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading ? "Guardando…" : "Guardar"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
