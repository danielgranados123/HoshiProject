import React from "react";
import Button from "../Button";
import "./CarsCard.css";

const CardCar = ({ car, deleteCar, updateCar }) => {
  if (!car) {
    return <div style={{ textAlign: "center", color: "#6b7280" }}>Cargando...</div>;
  }

  return (
    <div className="card-car">
      {car.photos && car.photos.length > 0 && (
        <img src={car.photos[0]} alt="Auto" />
      )}

      <div className="card-car-body">
        <h2 className="card-car-title">{car.color}</h2>

        <div className="card-car-details">
          <p><span>Descripción:</span> {car.description}</p>
          <p><span>Precio:</span> ${car.price}</p>
          <p><span>Kilometraje:</span> {car.mileage} km</p>
          <p><span>A/C:</span> {car.airConditioning ? "Sí" : "No"}</p>
          <p><span>Radio:</span> {car.radio ? "Sí" : "No"}</p>
          <p><span>Cámara:</span> {car.camera ? "Sí" : "No"}</p>
          <p><span>Pantalla:</span> {car.screen ? "Sí" : "No"}</p>
        </div>

        <div className="card-car-actions">
          <Button
            label="Eliminar"
            actionButton={() => deleteCar(car._id)}
            colorClass="danger"
          />
          <Button
            label="Editar Información"
            actionButton={() => updateCar(car)}
            colorClass="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCar;