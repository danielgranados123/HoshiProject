import React from "react";
import { useNavigate } from "react-router-dom";
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
    <aside className="sidebar">
      {/* Sidebar */}
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
        <ul>
          <li><FaCog /> Ajustes</li>
          <li><FaSignOutAlt /> Salir</li>
        </ul>
        <p className="copyright">©2025–Hoshi</p>
      </div>
    </aside>
  );
}

