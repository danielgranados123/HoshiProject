import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './CarInformation.css';

const MySwal = withReactContent(Swal);

const CarContainer = () => {
  const handleAgendarCita = () => {
    MySwal.fire({
      title: '<i class="fas fa-calendar-check"></i> Agendar Cita',
      html: `
        <div class="modal-form">
          <img src="https://link-a-tu-imagen.jpg" class="modal-car-img" alt="Auto"/>

          <div class="form-group">
            <label for="input-nombre">Nombre:</label>
            <input type="text" id="input-nombre" class="swal2-input custom-input" placeholder="Ej. Wilfredo Granados">
          </div>
          <div class="form-group">
            <label for="input-telefono">Teléfono:</label>
            <input type="text" id="input-telefono" class="swal2-input custom-input" placeholder="+503 1234–5678">
          </div>
          <div class="form-group">
            <label for="input-correo">Correo:</label>
            <input type="email" id="input-correo" class="swal2-input custom-input" placeholder="correo@example.com">
          </div>

          <div class="form-group">
            <label for="input-fecha">Fecha:</label>
            <input type="date" id="input-fecha" class="swal2-input custom-input">
          </div>
          <div class="form-group">
            <label for="input-hora">Hora:</label>
            <input type="time" id="input-hora" class="swal2-input custom-input">
          </div>

          <div class="form-group">
            <label for="input-metodo">Método de pago:</label>
            <select id="input-metodo" class="swal2-input custom-input">
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta">Tarjeta</option>
              <option value="Transferencia">Transferencia</option>
            </select>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#e40000',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const nombre = document.getElementById('input-nombre').value;
        const telefono = document.getElementById('input-telefono').value;
        const correo = document.getElementById('input-correo').value;
        const fecha = document.getElementById('input-fecha').value;
        const hora = document.getElementById('input-hora').value;
        const metodo = document.getElementById('input-metodo').value;

        if (!nombre || !telefono || !correo || !fecha || !hora || !metodo) {
          Swal.showValidationMessage('Por favor completa todos los campos.');
        }

        return { nombre, telefono, correo, fecha, hora, metodo };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Datos ingresados:', result.value);
        // Aquí puedes enviar los datos o mostrarlos en otra parte
        Swal.fire('Cita registrada', 'Tu cita ha sido agendada exitosamente.', 'success');
      }
    });
  };

  return (
    <div className="car-container">
      <button className="cta-button" onClick={handleAgendarCita}>
        Agendar cita
      </button>
    </div>
  );
};

export default CarContainer;
