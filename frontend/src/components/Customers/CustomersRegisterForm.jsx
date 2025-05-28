// src/components/Customers/CustomersRegisterForm.jsx
import React, { useState } from "react";
import useRegisterCustomer from "./hooks/useCostumersRegister";
import "../../pages/CustomersRegister/CustomersRegister.css";

export default function CustomersRegisterForm({ onSuccess }) {
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
    if (ok) {
      if(onSuccess) onSuccess();
    } else {
      alert(error || "Error desconocido");
    }
  };

  return (
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
  );
}
