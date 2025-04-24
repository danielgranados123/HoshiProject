import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation_logo.json";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 bg-white z-50"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={false}
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
        }}
      />
    </div>
  );
};

export default SplashScreen;