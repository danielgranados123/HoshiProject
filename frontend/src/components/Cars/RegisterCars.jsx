import React from "react";
import Button from "../Button";
import "./RegisterCars.css";

const RegisterCars = ({
  id,
  price,
  setPrice,
  mileage,
  setMileage,
  color,
  setColor,
  description,
  setDescription,
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
}) => {
  return (
    <section className="register-car-section">
      <h2 className="register-car-title">
        {id ? "Editar Auto" : "Registro de Nuevo Auto"}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          id ? handleUpdate(e) : handleSubmit(e); // ✅ evento e se pasa correctamente
        }}
        encType="multipart/form-data"
        className="register-car-form"
      >
        <InputField
          label="Precio"
          type="number"
          value={price}
          setValue={setPrice}
          placeholder="10000"
        />
        <InputField
          label="Kilometraje"
          type="number"
          value={mileage}
          setValue={setMileage}
          placeholder="50000"
        />
        <InputField
          label="Color"
          value={color}
          setValue={setColor}
          placeholder="Rojo"
        />
        <InputField
          label="Descripción"
          value={description}
          setValue={setDescription}
          placeholder="Auto compacto 2020, en excelente estado"
        />

        <div className="file-upload">
          <label>Fotos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setPhotos([...e.target.files])}
          />
        </div>

        <CheckboxField
          label="Aire acondicionado"
          checked={airConditioning}
          onChange={setAirConditioning}
        />
        <CheckboxField
          label="Radio"
          checked={radio}
          onChange={setRadio}
        />
        <CheckboxField
          label="Cámara"
          checked={camera}
          onChange={setCamera}
        />
        <CheckboxField
          label="Pantalla"
          checked={screen}
          onChange={setScreen}
        />

        <div className="form-actions">
          <Button
            type="submit"
            label={id ? "Editar Información" : "Registrar"}
            colorClass={id ? "warning" : "primary"}
          />
        </div>
      </form>
    </section>
  );
};

// ✅ Componente reutilizable para input
const InputField = ({ label, type = "text", value, setValue, placeholder = "", readOnly = false }) => (
  <div className="input-field">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  </div>
);

// ✅ Componente reutilizable para checkbox
const CheckboxField = ({ label, checked, onChange }) => (
  <div className="checkbox-field">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <label>{label}</label>
  </div>
);

export default RegisterCars;
