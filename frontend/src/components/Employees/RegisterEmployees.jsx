import React from "react";
import Button from "../Button";

const RegisterEmployees = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  phone,
  setPhone,
  role,
  setRole,
  salary,
  setSalary,
  IdBranch,
  setIdBranch,

  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
      <h1 className="text-2xl hidden">Id a modificar {id}</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Emilio"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Apellido
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ramirez"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="emilio@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="********"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            className="w-full px-3 py-2 border rounded"
            placeholder="77556666"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Rol
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Administrador, Cajero, etc."
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
            Salario
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="500.00"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="IdBranch">
            ID Sucursal
          </label>
          <input
            type="text"
            id="IdBranch"
            name="IdBranch"
            value={IdBranch}
            onChange={(e) => setIdBranch(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Sucursal001"
          />
        </div>
      </div>

      {id ? (
        <Button
          type="submit"
          label={"Editar Información"}
          actionButton={(e) => handleUpdate(e)}
          colorClass={"warning"}
        />
      ) : (
        <Button
          type="submit"
          label={"Registrar"}
          actionButton={(e) => handleSubmit(e)}
          colorClass={"primary"}
        />
      )}
    </form>
  );
};

export default RegisterEmployees;
