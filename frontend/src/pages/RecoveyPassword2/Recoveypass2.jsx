import React from 'react';
import './Recoveypass2';

const RecoveredPassword2 = () => {
  return (
    <div className="recoveredpass1-container">
      <div className="recoveredpass1-image-section">
        <img
          src="/path-to-your-image.png"
         
          className="recoveredpass1-image"
        />
      </div>
      <div className="recoveredpass1-form-section">
        <h2 className="recoveredpass1-title">RECUPERAR CONTRASEÑA</h2>
        <form>
          <label className="recoveredpass1-label">
            Codigo de Verificación:<span>*</span>
            <input
              type="email"
              placeholder="danielgranados@gmail.com"
              className="recoveredpass1-input"
            />
          </label>
          <button type="submit" className="recoveredpass1-button">
            Cambiar Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoveredPassword2;
