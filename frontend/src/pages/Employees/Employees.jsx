import React from "react";
import { useNavigate } from "react-router-dom";
import "../Employees/Employees.css"; 
import "../../components/Employees/ListEmployees"
import "../../components/Employees/hooks/useDataEmployees"
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

const employeesData = [

];

const Employees = () => {
  const navigate = useNavigate();

  return (
    <div className="employees-page">
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
              <li><FaUser /> Clientes</li>
              <li><FaBox /> Catálogo</li>
              <li className="active"><FaUsersCog /> Empleados</li>
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
            <h1>Empleados</h1>
            <div className="search-add-container">
              <input
                type="text"
                placeholder="Buscar empleados..."
                className="search-input"
              />
              <button
                className="add-button"
                title="Agregar empleado"
                onClick={() => navigate("/EmployeesRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          <section className="employees-section">
            <div className="employees-header">
              <span>Empleado</span>
              <span></span>
            </div>
            <div className="employees-scroll">
              <ul className="employees-list">
                {employeesData.map((e, idx) => (
                  <li key={idx} className="employee-item">
                    <div className="employee-name">{e.name}</div>
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

export default Employees;
