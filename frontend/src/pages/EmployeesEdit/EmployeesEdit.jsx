import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
// Reutilizamos estilos
import "../Sales/Sales.css";
import "../EmployeesResgister/EmployeeesRegister.css";

import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";

export default function EmployeesEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const res = await fetch(`/api/employees/${id}`);
        if (!res.ok) throw new Error("Error al cargar empleado");
        const data = await res.json();

        setName(data.name ?? "");
        setLastName(data.lastName ?? "");
        setEmail(data.email ?? "");
        setPhone(data.phone ?? "");
        setRole(data.role ?? "");
        setSalary(data.salary ?? "");
        setPassword("");
      } catch (error) {
        console.error(error);
        toast.error("No se pudo cargar el empleado");
      }
    })();
  }, [id]);

  const handleGuardar = async () => {
    // Validaciones personalizadas
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const phoneRegex = /^\d{8}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!name || !lastName || !email || !phone || !role || !salary) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    if (!nameRegex.test(name)) {
      toast.error("El nombre solo debe contener letras");
      return;
    }

    if (!nameRegex.test(lastName)) {
      toast.error("El apellido solo debe contener letras");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Correo electrónico no válido");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("El teléfono debe tener exactamente 8 dígitos");
      return;
    }

    const salaryNumber = Number(salary);
    if (isNaN(salaryNumber) || salaryNumber < 365) {
      toast.error("El salario debe ser mayor o igual a $365");
      return;
    }

    if (password && password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const bodyData = {
        name,
        lastName,
        email,
        phone,
        role,
        salary: salaryNumber,
      };

      if (password.trim() !== "") {
        bodyData.password = password;
      }

      const res = await fetch(`/api/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) throw new Error("Error al actualizar empleado");

      toast.success("Empleado actualizado correctamente");
      setTimeout(() => navigate("/employees-private"), 1500);
    } catch (err) {
      console.error(err);
      toast.error("Hubo un error al actualizar el empleado");
    }
  };

  return (
    <div className="container register">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <main className="main-content register-content">
        <header className="register-header">
          <button
            className="back-btn"
            onClick={() => navigate("/employees-private")}
          >
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Empleados</h1>
            <span className="sub-title">Editar empleado</span>
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
              <label>Nombres</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Apellidos</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                required
              />
            </div>

            <div className="form-group">
              <label>Rol</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Salario</label>
              <input
                type="number"
                min="0"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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
