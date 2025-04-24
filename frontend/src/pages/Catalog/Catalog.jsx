import React, { useState } from "react";
import './Catalog.css';
import AboutHeader from "../../assets/about_header.svg"
import Toyota from "../../assets/toyota.svg";

const Catalog = () => {
    const [marca, setMarca] = useState("");
    const [precio, setPrecio] = useState("");
    const [tipoVenta, setTipoVenta] = useState("");
    const [pais, setPais] = useState("");

    return (
        <div className='content'>
            {/*Header section*/}
            <div className='about1'>
                <div className='about-text'>
                    <p className='about-subtittle'>Descubre</p>
                    <h1 className='about1-tittle'>Nuestro<br />Catalogo</h1>
                    <p className='about-txt'><strong>Encuentra el auto perfecto para ti.</strong> <br />
                        Nos dedicamos a ofrecer vehículos de <br />
                        calidad con un servicio transparente y <br />
                        personalizado, para que encuentres el <br />
                        auto ideal de forma fácil y segura.<br /><br /></p>
                </div>
                <div className='about1-img'>
                    <img src={AboutHeader} alt="Sobre Nosotros" />
                </div>
            </div>

            <br /><br />

            {/* Selection section */}
            <p className='about-subtittle'>Sucursal</p>

            <div className="search-box">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Buscar" />
    </div>
            <div className="dropdown-container">

          


                
                
                <select value={marca} onChange={(e) => setMarca(e.target.value)} className="dropdown">
                    <option value="">Seleccione una marca</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Nissan">Nissan</option>
                </select>

                
                <select value={precio} onChange={(e) => setPrecio(e.target.value)} className="dropdown">
                    <option value="">Seleccione un precio</option>
                    <option value="1400">$1,400</option>
                    <option value="5000">$5,000</option>
                    <option value="4000">$4,000</option>
                </select>

                <label></label>
                <select value={tipoVenta} onChange={(e) => setTipoVenta(e.target.value)} className="dropdown">
                    <option value="">Seleccione tipo de venta</option>
                    <option value="Plazos">Plazos</option>
                    <option value="Contado">Contado</option>
                </select>

                
                <select value={pais} onChange={(e) => setPais(e.target.value)} className="dropdown">
                    <option value="">Seleccione un país</option>
                    <option value="Japon">Japón</option>
                    <option value="Americano">Americano</option>
                </select>

                
            </div>

            <div className="pagination-container">
  <p className="pagination-title">Ver más</p>
  <div className="pagination">
    <button className="pagination-arrow">{'<'}</button>
    <button className="pagination-page">1</button>
    <button className="pagination-page">2</button>
    <button className="pagination-page">3</button>
    <button className="pagination-page">4</button>
    <button className="pagination-page">5</button>
    <button className="pagination-page">6</button>
    <button className="pagination-arrow">{'>'}</button>
  </div>
</div>

<div className="car-grid">
<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>


<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>


<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>

<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>


<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>


<div className="car-card">
  <img src="https://th.bing.com/th/id/OIP.YfRDvqnagNYYPsVfW0foEQHaEo?rs=1&pid=ImgDetMain" alt="Toyota Corolla 2019" className="car-image" />

  <div className="car-info">
    <div className="car-brand-icon">
      <img src="https://th.bing.com/th/id/OIP.vdKspdNnUEqu4jTZvU7rkwAAAA?rs=1&pid=ImgDetMain" alt="Toyota" className="brand-icon" />
    </div>
    <h2 className="car-title">TOYOTA COROLLA 2019</h2>
    <p className="car-price">$12,800.<sup>00</sup></p>
    <p className="car-details">Gasolina • 117,000 km</p>
    <button className="car-button">Más</button>
  </div>
</div>
</div>
<div className="pagination-container">
  <p className="pagination-title">Ver más</p>
  <div className="pagination">
    <button className="pagination-arrow">{'<'}</button>
    <button className="pagination-page">1</button>
    <button className="pagination-page">2</button>
    <button className="pagination-page">3</button>
    <button className="pagination-page">4</button>
    <button className="pagination-page">5</button>
    <button className="pagination-page">6</button>
    <button className="pagination-arrow">{'>'}</button>
  </div>
</div>
        </div>
    );
};

export default Catalog;
