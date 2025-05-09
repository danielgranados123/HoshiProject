import './Recoverypass3.css';
import React from 'react';
import LoginI from "../../assets/login.svg";
import { useNavigate } from 'react-router-dom';


export default function RecoveryPass3() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  return (
    <div className="recoverypass3-container">

      <div className="recoveredpass1-image-section">
        <img
          src={LoginI}
         
          className="recoveredpass1-image"
        />
      
        <div className="recoverypass3-logo">HOSHI</div>
      </div>
      <div className="recoverypass3-right">
        <div className="recoverypass3-icon"></div>
        <h1 className="recoverypass3-title">RECUPERAR <br /> CONTRASEÑA</h1>
        <form className="recoverypass3-form">
          <div className="recoverypass3-input-group">
            <label><span className="recoverypass3-bullet">●</span> Escribir contraseña</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="recoverypass3-input-group">
            <label><span className="recoverypass3-bullet">●</span> Confirmar contraseña</label>
            <input type="password" placeholder="**********" />
          </div>
          <button type="submit" className="recoverypass3-button" onClick={handleLoginRedirect}>Cambiar contraseña</button>
        </form>
      </div>
    </div>
  );
}
