// src/components/Customers/customersList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useCustomers from "./hooks/useCustomers";
import "../../pages/Customers/Customers.css";

export default function CustomersList() {
  const navigate = useNavigate();
  const { customers, loading, error, deleteCustomer } = useCustomers();

  if (loading) return <p>Cargando clientes…</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <section className="customers-section">
      <div className="customers-header">
        <span>Cliente</span>
        <span></span>
      </div>
      <div className="customers-scroll">
        <ul className="customers-list">
          {customers.map((c) => (
            <li key={c._id} className="customer-item">
              <div className="customer-name">{c.name}</div>
              <div className="options">
                {/* EDITAR en negro */}
                <FaEdit
                  color="#000"
                  style={{ marginRight: "0.5rem", cursor: "pointer" }}
                  onClick={() => navigate(`/customersEdit/${c._id}`)}
                />
                {/* BORRAR */}
                <FaTrashAlt
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteCustomer(c._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
