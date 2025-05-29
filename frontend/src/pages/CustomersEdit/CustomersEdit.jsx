// src/pages/Customers/CustomersEdit.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Reutilizamos Sales.css para sidebar + hamburguesa
import "../Sales/Sales.css";
// Reutilizamos el CSS de registro para el formulario
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

export default function CustomersEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await fetch(`/api/customers/${id}`);
        if (!res.ok) throw new Error("Error al cargar cliente");
        const data = await res.json();
        setName(data.name || "");
        setDni(data.dni || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setUsername(data.username || "");
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    })();
  }, [id]);

  const handleGuardar = async () => {
    try {
      const res = await fetch(`/api/customers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lastName: "",
          dni,
          email,
          phone,
          username,
          password
        })
      });
      if (!res.ok) throw new Error("Error al actualizar cliente");
      navigate("/Customers");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="container register">
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
        <header className="register-header">
          <button className="back-btn" onClick={() => navigate("/Customers")}>
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Clientes</h1>
            <span className="sub-title">Editar cliente</span>
          </div>
        </header>

        <div className="register-grid">
          <form
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleGuardar();
            }}
          >
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>DNI</label>
              <input
                type="text"
                value={dni}
                onChange={e => setDni(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="save-btn">
              Actualizar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
