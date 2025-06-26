import React from "react";
import CardCar from "./CarsCard";
import "./ListCars.css";

const ListCars = ({ deleteCar, updateCar, loading, cars }) => {
  // Aseguramos que cars sea siempre un array para evitar errores
  const carsArray = Array.isArray(cars) ? cars : [];

  return (
    <section className="list-cars-section">
      <h1 className="list-cars-title">Listado de Autos</h1>

      {loading ? (
        <div className="loading-text">Cargando autos...</div>
      ) : carsArray.length === 0 ? (
        <div className="empty-text">No hay autos registrados.</div>
      ) : (
        <div className="cars-grid">
          {carsArray.map((car) => (
            <CardCar
              key={car._id}
              car={car}
              deleteCar={deleteCar}
              updateCar={updateCar}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListCars;
