import React, { useState } from 'react';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const [vista, setVista] = useState('finalizado');

  const comprasFinalizadas = [
    {
      id: 1,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg/1200px-2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg',
      marca: 'Toyota',
      precio: '$10,000',
      detalle: 'Pago único',
      fecha: '25 de abril, 2025',
    },
  ];

  const comprasPorPagar = [
    {
      id: 2,
      imagen: 'https://photos.prnewswire.com/prnfull/20160202/328702',
      marca: 'Honda',
      precio: '$12,500',
      detalle: '3 cuotas restantes',
      fecha: 'Próximo pago: 3 de mayo, 2025',
    },
  ];

  const compras = vista === 'finalizado' ? comprasFinalizadas : comprasPorPagar;

  return (
    <div className="purchaseContainer">
      <h1 className='values-tittle h1Purchase'>
        Historial de <br />
        <span>compras</span>
      </h1>

      <nav className="filter">
        <button className={`tab ${vista === 'finalizado' ? 'active' : ''}`} onClick={() => setVista('finalizado')}>
          Finalizado
        </button>
        <button className={`tab ${vista === 'por-pagar' ? 'active' : ''}`} onClick={() => setVista('por-pagar')}>
          Por pagar
        </button>
      </nav>

      {compras.map((compra) => (
        <div className="purchaseCard" key={compra.id}>
          <img src={compra.imagen} alt="Auto" className="imagen-auto" />
          <div className="info-auto">
            <div className="marca">
              <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Toyota.png" alt="Marca" className="brandIcon"/>
              <span>{compra.marca}</span>
            </div>
            <div className="precio">{compra.precio}</div>
            <div className="detalle">{compra.detalle}</div>
            <div className="fecha">{compra.fecha}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;