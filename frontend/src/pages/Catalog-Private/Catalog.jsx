import React from "react";
import { useNavigate } from "react-router-dom";
import ListCars from "../../components/Cars/ListCars";
import "../Sales/Sales.css";
import "../Employees/Employees.css"; // Usa los mismos estilos compartidos
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

export default function Cars() {
  const navigate = useNavigate();

  return (
    <div className="customers-page">
      <div className="container">
        {/* Main content */}
        <main className="main-content">
          <header className="header">
            <h1>Autos</h1>
            <div className="search-add-container">
              <input
                type="text"
                placeholder="Buscar autos..."
                className="search-input"
              />
              <button
                className="add-button"
                onClick={() => navigate("/catalogRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          <ListCars />
        </main>
      </div>
    </div>
  );
}
