// src/components/Employees/EmployeesList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useDataEmployees from "./hooks/useDataEmployees";
import "../../pages/Employees/Employees.css"; 

export default function EmployeesList() {
  const navigate = useNavigate();
  const { employees, loading, errorEmpleado, deleteEmployee } = useDataEmployees();

  if (loading) return <p>Cargando empleados…</p>;
  if (errorEmpleado) return <p>Error: {errorEmpleado}</p>;

  return (
    <section className="employees-section">
      <div className="employees-header">
        <span>Nombre</span>
        <span>Email</span>
        <span>Teléfono</span>
        <span>Rol</span>
        <span></span>
      </div>
      <div className="employees-scroll">
        <ul className="employees-list">
          {employees.map((emp) => (
            <li key={emp._id} className="employee-item">
              <div>{emp.name} {emp.lastName}</div>
              <div>{emp.email}</div>
              <div>{emp.phone}</div>
              <div>{emp.role}</div>
              <div className="options">
                <FaEdit
                  color="#000"
                  style={{ marginRight: "0.5rem", cursor: "pointer" }}
                  onClick={() => navigate(`/employeesEdit/${emp._id}`)}
                />
                <FaTrashAlt
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteEmployee(emp._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}