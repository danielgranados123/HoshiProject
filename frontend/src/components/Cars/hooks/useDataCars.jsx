import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataCars = () => {
  const API_BASE = "http://localhost:4000/api/cars";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [airConditioning, setAirConditioning] = useState(false);
  const [radio, setRadio] = useState(false);
  const [camera, setCamera] = useState(false);
  const [screen, setScreen] = useState(false);
  const [cars, setCars] = useState([]);
  const [errorCar, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanData = () => {
    setId("");
    setPrice("");
    setMileage("");
    setColor("");
    setDescription("");
    setPhotos([]);
    setAirConditioning(false);
    setRadio(false);
    setCamera(false);
    setScreen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price || !mileage || !color || !description) {
      toast.error("Todos los campos son obligatorios");
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("price", price);
      formData.append("mileage", mileage);
      formData.append("color", color);
      formData.append("description", description);
      formData.append("airConditioning", airConditioning);
      formData.append("radio", radio);
      formData.append("camera", camera);
      formData.append("screen", screen);

      // Agregar imágenes
      photos.forEach((photo) => {
        formData.append("photos", photo);
      });

      const response = await fetch(API_BASE, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al registrar el auto");
      }

      toast.success("Auto registrado correctamente");
      setSuccess("Auto registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al registrar el auto");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error al obtener autos:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar auto");
      }

      toast.success("Auto eliminado correctamente");
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateCar = (dataCar) => {
    setId(dataCar._id);
    setPrice(dataCar.price);
    setMileage(dataCar.mileage);
    setColor(dataCar.color);
    setDescription(dataCar.description);
    setAirConditioning(dataCar.airConditioning);
    setRadio(dataCar.radio);
    setCamera(dataCar.camera);
    setScreen(dataCar.screen);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("price", price);
      formData.append("mileage", mileage);
      formData.append("color", color);
      formData.append("description", description);
      formData.append("airConditioning", airConditioning);
      formData.append("radio", radio);
      formData.append("camera", camera);
      formData.append("screen", screen);

      photos.forEach((photo) => {
        formData.append("photos", photo);
      });

      const response = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el auto");
      }

      toast.success("Auto actualizado correctamente");
      setSuccess("Auto actualizado correctamente");
      cleanData();
      setActiveTab("list");
      fetchData();
    } catch (error) {
      toast.error("Error al actualizar el auto");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
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
    cars,
    setCars,
    errorCar,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    cleanData,
    handleSubmit,
    fetchData,
    deleteCar,
    updateCar,
    handleUpdate,
  };
};

export default useDataCars;