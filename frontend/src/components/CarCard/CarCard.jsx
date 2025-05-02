import React from 'react';

const CarCard = ({ 
  imageUrl = "https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain",
  brandIcon = "https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain",
  title = "TOYOTA COROLLA 2019",
  price = "$12,800.00",
  details = "Gasolina • 117,000 km",
  infoRedirect = () => alert('Ir a más información')
}) => {
  return (
    <div className="car-card">
      <img src={imageUrl} alt={title} className="car-image" />
      <div className="car-info">
        <div className="car-brand-icon">
          <img src={brandIcon} alt="Toyota" className="brand-icon" />
        </div>
        <h2 className="car-title">{title}</h2>
        <p className="car-price">{price}</p>
        <p className="car-details">{details}</p>
        <button className="car-button" onClick={infoRedirect}>Más</button>
      </div>
    </div>
  );
};

export default CarCard;