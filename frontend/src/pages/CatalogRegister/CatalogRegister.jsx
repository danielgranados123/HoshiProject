import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../Sales/Sales.css";
import "./CatalogRegister.css";
import RegisterCars from "../../components/Cars/RegisterCars";
import useDataCars from "../../components/Cars/hooks/useDataCars";

import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";

export default function CatalogRegister() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const {
    id,
    price,
    setPrice,
    mileage,
    setMileage,
    color,
    setColor,
    description,
    setDescription,
    photos,
    setPhotos,
    airConditioning,
    setAirConditioning,
    radio,
    setRadio,
    camera,
    setCamera,
    screen,
    setScreen,
    handleSubmit,
    handleUpdate,
  } = useDataCars(); // Usamos directamente el hook

  return (
    <div className="container register">
      {/* Botón de menú para responsive */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <main className="main-content register-content">
        <header className="register-header">
          <button
            className="back-btn"
            onClick={() => navigate("/catalog-private")}
          >
            <FaArrowLeft />
          </button>
          <div className="title-container">
            <h1>Catálogo</h1>
            <span className="sub-title">Nuevo auto</span>
          </div>
        </header>

        <RegisterCars
          id={id}
          price={price}
          setPrice={setPrice}
          mileage={mileage}
          setMileage={setMileage}
          color={color}
          setColor={setColor}
          description={description}
          setDescription={setDescription}
          setPhotos={setPhotos}
          airConditioning={airConditioning}
          setAirConditioning={setAirConditioning}
          radio={radio}
          setRadio={setRadio}
          camera={camera}
          setCamera={setCamera}
          screen={screen}
          setScreen={setScreen}
          handleSubmit={(e) => {
            e.preventDefault();
            handleSubmit(); // esta función ya está completa en el hook
            toast.success("Auto registrado");
            navigate("/catalog-private");
          }}
          handleUpdate={(e) => {
            e.preventDefault();
            handleUpdate();
            toast.success("Auto actualizado");
            navigate("/catalog-private");
          }}
        />
      </main>
    </div>
  );
}
