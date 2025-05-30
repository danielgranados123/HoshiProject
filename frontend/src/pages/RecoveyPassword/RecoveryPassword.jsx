import React from 'react';
import './RecoveryPassword.css';
import LoginI from "../../assets/login.svg";
import { useNavigate } from 'react-router-dom';

const RecoveredPassword1 = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/recoverypass2');
  };
  return (
    <div className="recoveredpass1-container">
      <div className="recoveredpass1-image-section">
        <img
          src={LoginI}
     
          className="recoveredpass1-image"
        />
      </div>
      <div className="recoveredpass1-form-section">
        <h2 className="recoveredpass1-title">RECUPERAR CONTRASEÑA</h2>
        <form>
          <label className="recoveredpass1-label">
            Correo electrónico:<span>*</span>
            <input
              type="email"
              placeholder="danielgranados@gmail.com"
              className="recoveredpass1-input"
            />
          </label>
          <button type="submit" className="recoveredpass1-button" onClick={handleLoginRedirect}>
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoveredPassword1;
