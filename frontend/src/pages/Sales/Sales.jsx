// Sales.jsx
import React from "react";
// 1) Importa useNavigate
import { useNavigate } from "react-router-dom";
import "./Sales.css";
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

const salesData = [
  { date: "19 febrero, 2025", name: "Ricardo de Paz", car: "Toyota Corolla 2020" },
  { date: "18 febrero, 2025", name: "Emerson González", car: "Kia Rio 2021" },
  { date: "17 febrero, 2025", name: "Mirna Espinoza", car: "Toyota Corolla 2020" },
  { date: "16 febrero, 2025", name: "Daniel Hernández", car: "Kia Rio 2021" },
  { date: "15 febrero, 2025", name: "Bryan Rodríguez", car: "Toyota Corolla 2020" },
  { date: "14 febrero, 2025", name: "Eduardo Cornejo", car: "Kia Rio 2021" },
  { date: "13 febrero, 2025", name: "Alexander Gáldamez", car: "Toyota Corolla 2020" },
  { date: "12 febrero, 2025", name: "Isaac Cañas", car: "Kia Rio 2021" },
  { date: "11 febrero, 2025", name: "Juan Pérez", car: "Toyota Corolla 2020" },
  { date: "10 febrero, 2025", name: "José Martínez", car: "Kia Rio 2021" },
];

const Sales = () => {
  // 2) Inicializa useNavigate
  const navigate = useNavigate();
  const extendedData = [...salesData, ...salesData]; // Para probar scroll

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li><FaHome /> Inicio</li>
            <li className="active"><FaShoppingCart /> Ventas</li>
            <li><FaUser /> Clientes</li>
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

      <main className="main-content">
        <header className="header">
          <h1>Ventas</h1>
          <div className="search-add-container">
            <input
              type="text"
              placeholder="Buscar ventas..."
              className="search-input"
            />
            {/* 3) onClick navega a SalesRegister */}
            <button
              className="add-button"
              title="Agregar venta"
              onClick={() => navigate("/SalesRegister")}
            >
              ＋
            </button>
          </div>
        </header>

        <section className="sales-section">
          <div className="sales-header">
            <span>Fecha de venta</span>
            <span>Cliente</span>
            <span>Venta</span>
          </div>
          <div className="sales-scroll">
            <ul className="sales-list">
              {extendedData.map((sale, index) => (
                <li key={index} className="sale-item">
                  <div className="sale-date">{sale.date}</div>
                  <div className="sale-name">{sale.name}</div>
                  <div className="sale-car">{sale.car}</div>
                  <span className="options">⋮</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sales;
