import React from "react";
import useDataEmployees from "./hooks/useDataEmployees.jsx";

export default function RegisterEmployeesfrom({ onSuccess }) {
  const {
    name, setName,
    LastName, setLastName,
    email, setEmail,
    password, setPassword,
    phone, setPhone,
    role, setRole,
    salary, setSalary,
    handleSubmit,
    loading,
    errorEmpleado,
    success,
  } = useDataEmployees();

  const onSubmit = async (e) => {
    await handleSubmit(e); // el hook ya maneja e.preventDefault()

    // si quieres manejar un callback externo cuando se registre
    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5"
      onSubmit={onSubmit}
    >
      <div className="form-group">
        <label>Nombres</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Wilfredo"
          required
        />
      </div>

      <div className="form-group">
        <label>Apellidos</label>
        <input
          name="LastName"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Granados"
          required
        />
      </div>

      <div className="form-group">
        <label>Correo electrónico</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="wilf@gmail.com"
          required
        />
      </div>

      <div className="form-group">
        <label>Teléfono</label>
        <input
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="9876-5432"
          required
        />
      </div>

      <div className="form-group">
        <label>Rol</label>
        <input
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Administrador"
          required
        />
      </div>

      <div className="form-group">
        <label>Salario</label>
        <input
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="600"
          required
        />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
      </div>

      {errorEmpleado && (
        <p className="text-red-500 mt-2">{errorEmpleado}</p>
      )}

      <button type="submit" className="save-btn" disabled={loading}>
        {loading ? "Guardando…" : "Guardar"}
      </button>
    </form>
  );
}
