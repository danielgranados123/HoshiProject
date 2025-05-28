import React from "react";
import Button from "../Button";

const CardEmployee = ({ employee, deleteEmployee, updateEmployee }) => {
  if (!employee) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {employee.name} {employee.LastName}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {employee.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Teléfono:</span> {employee.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Rol:</span> {employee.role}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Salario:</span> ${employee.salary}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Sucursal (ID):</span> {employee.IdBranch}
        </p>
        <p className="text-sm text-gray-400 mt-2">ID: {employee._id}</p>

        <div className="mt-4 flex justify-between gap-2">
          <Button 
            label="Eliminar"
            actionButton={() => deleteEmployee(employee._id)}
            colorClass="danger"
          />
          <Button 
            label="Editar Información"
            actionButton={() => updateEmployee(employee)}
            colorClass="warning"
          />
        </div>
      </div>
    </div>
  );
};

export default CardEmployee;
