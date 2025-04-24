import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation_logo.json";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Llama a onFinish cuando se termina el tiempo
    }, 4000); // Duración de la Splash Screen

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonta
  }, [onFinish]);

  return (
    <div
      className="splash-screen" // Aquí definimos la clase para el estilo
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",  // Ocupa toda la ventana
        height: "100vh", // Ocupa toda la altura de la ventana
        backgroundColor: "white", 
        display: "flex", // Flexbox para centrar el contenido
        justifyContent: "center", // Centrado horizontal
        alignItems: "center", // Centrado vertical
        zIndex: 9999, // Asegura que esté por encima de todo
        pointerEvents: "auto", // Permitir interacción con la Splash Screen
      }}
    >
      <Lottie
        animationData={animationData}
        loop={false}
        style={{
          width: "100%",
          maxWidth: "300px", // Tamaño máximo del logo animado
          height: "auto",
        }}
      />
    </div>
  );
};

export default SplashScreen;