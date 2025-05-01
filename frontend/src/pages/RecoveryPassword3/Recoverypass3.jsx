import './Recoverypass3.css';
import React from 'react';


export default function RecoveryPass3() {
  return (
    <div className="recoverypass3-container">

      <div className="recoveredpass1-image-section">
        <img
          src="/path-to-your-image.png"
         
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
            <label><span className="recoverypass3-bullet">●</span> Volver a escribir contraseña</label>
            <input type="password" placeholder="**********" />
          </div>
          <button type="submit" className="recoverypass3-button">Cambiar contraseña</button>
        </form>
      </div>
    </div>
  );
}
