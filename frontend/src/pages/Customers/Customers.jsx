// src/pages/Customers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomersList from "../../components/Customers/CustomersList";
import "../Sales/Sales.css";
import "../Customers/Customers.css";



export default function Customers() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // Estado para manejar la búsqueda

  // Maneja el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="customers-page">
      <div className="container">
        {/* Main content */}
        <main className="main-content">
          <header className="header">
            <h1>Clientes</h1>
            <div className="search-add-container">
              <input
                type="text"
                placeholder="Buscar clientes..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange} // Se actualiza el estado cuando cambia el valor del input
              />
              <button
                className="add-button"
                onClick={() => navigate("/CustomersRegister")}
              >
                ＋
              </button>
            </div>
          </header>

          {/* Pasamos searchTerm a CustomersList para filtrar los clientes */}
          <CustomersList searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
}