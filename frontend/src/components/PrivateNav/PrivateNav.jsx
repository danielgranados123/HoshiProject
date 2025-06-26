import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaUsersCog,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./PrivateNav.css";

export default function Sidebar({ menuOpen }) {
  const navigate = useNavigate();
  const [dateInfo, setDateInfo] = useState({
    greeting: "",
    dateText: "",
    timeText: "",
  });

  useEffect(() => {
    const now = new Date();

    // Saludo según hora
    const hour = now.getHours();
    let greeting = "¡Buenos días!";
    if (hour >= 12 && hour < 18) greeting = "¡Buenas tardes!";
    else if (hour >= 18) greeting = "¡Buenas noches!";

    // Días y meses en español
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const dia = dias[now.getDay()];
    const fecha = `${dia} ${now.getDate()} de ${meses[now.getMonth()]}`;

    // Hora formateada
    const opcionesHora = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const horaTexto = now.toLocaleTimeString("es-ES", opcionesHora).toLowerCase();

    setDateInfo({
      greeting,
      dateText: fecha,
      timeText: horaTexto,
    });
  }, []);

  // Función para logout
  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: '¿Cerrar sesión?',
        text: "¿Estás seguro que quieres salir?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar',
      });

      if (!result.isConfirmed) return;

      const res = await fetch("/api/logout", { method: "POST", credentials: "include" });
      if (!res.ok) throw new Error("No se pudo cerrar sesión");

      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        timer: 1500,
        showConfirmButton: false,
      });

      // Redirigir a login
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Error al cerrar sesión",
      });
    }
  };

  return (
    <aside
      className={`sidebar ${
        menuOpen ? "open" : ""
      }`}
    >
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li onClick={() => navigate("/home-private")}>
            <FaHome /> Inicio
          </li>
          <li onClick={() => navigate("/sales-private")}>
            <FaShoppingCart /> Ventas
          </li>
          <li onClick={() => navigate("/customers-private")}>
            <FaUser /> Clientes
          </li>
          <li onClick={() => navigate("/catalog-private")}>
            <FaBox /> Catálogo
          </li>
          <li onClick={() => navigate("/employees-private")}>
            <FaUsersCog /> Empleados
          </li>
        </ul>
      </nav>
      <div className="bottom-section">
        <div className="greeting">
          <p>
            <strong>{dateInfo.greeting}</strong>
          </p>
          <p>{dateInfo.dateText}</p>
          <p className="time">{dateInfo.timeText}</p>
        </div>
        <ul>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>
            <FaSignOutAlt /> Salir
          </li>
        </ul>
        <p className="copyright">©2025–Hoshi</p>
      </div>
    </aside>
  );
}