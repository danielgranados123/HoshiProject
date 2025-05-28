// src/components/Customers/CustomersList.jsx
import React from "react";
import useCustomers from "./hooks/useCustomers";
import "../../pages/Customers/Customers.css";

export default function CustomersList() {
  const { customers, loading, error } = useCustomers();

  return (
    <section className="customers-section">
      <div className="customers-header">
        <span>Cliente</span>
        <span></span>
      </div>
      <div className="customers-scroll">
        {loading && <p>Cargando clientes…</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <ul className="customers-list">
            {customers.map((c) => (
              <li key={c._id} className="customer-item">
                <div className="customer-name">{c.name}</div>
                <span className="options">⋮</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
