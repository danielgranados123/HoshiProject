import React, { useState } from "react";
import useDataEmployees from "./hooks/useDataEmployees.jsx";
import "../../pages/EmployeesResgister/EmployeesRegister.jsx";

export default function RegisterEmployeesfrom({ onSuccess, loading }) {
 

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    salary: "",
    email: "",
    phone: "",
    role: "",
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
   
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5" onSubmit={onSubmit}>
      

      <div className="form-group">
        <label>Nombres</label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Wilfredo Granados"
          required
        />
      </div>
      <div className="form-group">
        <label>Apellidos</label>
        <input
          name="lastname"
          value={form.lastname}
          onChange={onChange}
          placeholder="Wilfredo Granados"
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
        <label>Rol</label>
        <input
          name="role"
          value={form.role}
          onChange={onChange}
          placeholder="12345678-9"
          required
        />
      </div>

      <div className="form-group">
        <label>Salary</label>
        <input
          name="salary"
          value={form.salary}
          onChange={onChange}
          placeholder="600"
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
};


