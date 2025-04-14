import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/logo_animation.json';
import './LogoAnimation.css'

const LogoAnimation = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="logo-animation">
      <div className="logo-container">
        <Lottie animationData={animationData} loop={false} />
      </div>
    </div>
  );
};

export default LogoAnimation;