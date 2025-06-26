import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Sales/Sales.css";
import "../CustomersRegister/CustomersRegister.css";
import toast from "react-hot-toast";

import {
  FaBars,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";

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
        setName(data.name ?? "");
        setDni(data.dni ?? "");
        setEmail(data.email ?? "");
        setPhone(data.phone ?? "");
        setUsername(data.username ?? "");
        setPassword("");
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    })();
  }, [id]);

  const handleGuardar = async () => {
    // 🔍 Validaciones
    if (!name || !dni || !email || !phone || !username) {
      toast.error("Todos los campos obligatorios deben completarse.");
      return;
    }

    if (/\d/.test(name)) {
      toast.error("El nombre no debe contener números.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Correo electrónico no válido.");
      return;
    }

    const phoneRegex = /^\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("El teléfono debe tener el formato 0000-0000.");
      return;
    }

    if (password && password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const res = await fetch(`/api/customers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lastName: "", // Por compatibilidad con el backend
          dni,
          email,
          phone,
          username,
          password,
        }),
      });

      if (!res.ok) throw new Error("Error al actualizar cliente");

      toast.success("Cliente actualizado correctamente");
      navigate("/customers-private");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="container register">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <main className="main-content register-content">
        <header className="register-header">
          <button className="back-btn" onClick={() => navigate("/customers-private")}>
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
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>DNI</label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0000-0000"
                required
              />
            </div>

            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Dejar en blanco para no cambiar"
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
