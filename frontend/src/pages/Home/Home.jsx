import React from 'react';
import './Home.css';
import Header from "../../assets/header.svg";
import Toyota from "../../assets/toyota.svg";
import Kia from "../../assets/kia.svg";
import Honda from "../../assets/honda.svg";
import Nissan from "../../assets/nissan.svg";
import Mitsubishi from "../../assets/mitsubishi.svg";
import Hyundai from "../../assets/hyundai.svg";
import Mazda from "../../assets/mazda.svg";
import AppImage from "../../assets/app.svg";

import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


const Home = () => {
    return (
        <div className='content'>
            {/*Header section*/}
            <div className='header'>
                <div className='text1-header'>
                    <h1 className='tittle1'>Tu próximo auto</h1>
                    <h2 className='tittle2'>ESTÁ AQUÍ</h2>
                    <button class="explore" href="/catalog">
                        Explorar <MdOutlineExplore className="explore-icon" />
                    </button>
                </div>
                <div className='text2-header'>
                    <p className='txt1'>Encuentra el vehículo<br />perfecto con las mejores<br />condiciones del mercado.</p>
                    <p className='txt2'><strong>Calidad · Transparencia · Seguridad</strong></p>
                </div>
            </div>
            <div className='header-img'>
                <img src={Header}/>
            </div>
            <div className="brands-container">
                <div className="brand">
                    <img src={Toyota} alt="Toyota"/>
                    <span className="brand-name">Toyota</span>
                </div>
                <div className="brand">
                    <img src={Kia} alt="Kia" />
                    <span className="brand-name">Kia</span>
                </div>
                <div className="brand">
                    <img src={Honda} alt="Honda" />
                    <span className="brand-name">Honda</span>
                </div>
                <div className="brand">
                    <img src={Nissan} alt="Nissan" />
                    <span className="brand-name">Nissan</span>
                </div>
                <div className="brand">
                    <img src={Mitsubishi} alt="Mitsubishi" />
                    <span className="brand-name">Mitsubishi</span>
                </div>
                <div className="brand">
                    <img src={Hyundai} alt="Hyundai" />
                    <span className="brand-name">Hyundai</span>
                </div>
                <div className="brand">
                    <img src={Mazda} alt="Mazda" />
                    <span className="brand-name">Mazda</span>
                </div>
            </div>
            {/*Mobile App section*/}
            <div className='app'>
                <div className='app-img'>
                    <img src={AppImage} alt="App Móvil" />
                </div>
                <div className='app-text'>
                    <h1 className='app-tittle'>Aplicación Móvil</h1>
                    <p className='app-subtittle'>OBTENER</p>
                    <p className='app-txt'><strong>¡Haz que la compra de tu próximo auto
                        sea más fácil que nunca!</strong><br />
                        Con nuestra app móvil, puedes explorar los mejores vehículos de<br />
                        las marcas más confiables, comparar precios, ver detalles de cada<br />
                        modelo y realizar tu compra en solo unos clics.<br /><br />
                        Además, tendrás acceso a promociones exclusivas y atención<br />
                        personalizada para resolver cualquier duda al instante.</p>
                        <br />
                    <button class="app-button">
                        Descargar<MdOutlineDownloadForOffline className="download-icon"/>
                    </button>
                </div>
            </div>
            {/*About us section*/}
            <div className='about'>
                <div className='about-text'>
                    <h1 className='about-tittle'>¿Quiénes<br />somos?</h1>
                    <p className='about-subtittle'>CONÓCENOS</p>
                    <p className='about-txt'><strong>En Hoshi </strong>no solo vendemos autos, ofrecemos<br />
                    confianza y calidad. Nos especializamos en marcas<br />
                    japonesas y coreanas reconocidas por su durabilidad,<br />
                    tecnología y seguridad.<br /><br />
                    Te brindamos una experiencia de compra sencilla, con<br />
                    opciones de financiamiento flexibles y un catálogo<br />
                    diseñado para satisfacer tus necesidades.<br /><br />
                    <strong>Descubre por qué miles de clientes confían en Hoshi.</strong></p>
                        <br />
                    <button class="app-button" href="/about">
                        Saber más<FaSearch className="about-icon"/>
                    </button>
                </div>
                <div className='about-img'>
                    <img src='https://kia-greccomotors.s3.amazonaws.com/sportage_x_7ba7efe05f_e10688bfe0.webp' alt="App Móvil" />
                </div>
            </div>
            {/*Products section*/}
            <div className='catalog'>
                <div className='catalog-text'>
                    <h1 className='catalog-tittle'>¿Quiénes somos?</h1>
                    <p className='catalog-subtittle'>CONÓCENOS</p>
                    <p className='catalog-txt'><strong>En Hoshi </strong>no solo vendemos autos, ofrecemos<br />
                    confianza y calidad. Nos especializamos en marcas<br />
                    japonesas y coreanas reconocidas por su durabilidad,<br />
                    tecnología y seguridad.<br /><br />
                    Te brindamos una experiencia de compra sencilla, con<br />
                    opciones de financiamiento flexibles y un catálogo<br />
                    diseñado para satisfacer tus necesidades.<br /><br />
                    <strong>Descubre por qué miles de clientes confían en Hoshi.</strong></p>
                        <br />
                    <button class="app-button">
                        Saber más<FaSearch className="catalog-icon"/>
                    </button>
                </div>
                <div className='catalog-img'>
                    <img src='https://kia-greccomotors.s3.amazonaws.com/sportage_x_7ba7efe05f_e10688bfe0.webp' alt="App Móvil" />
                </div>
            </div>
        </div>
    );
};

export default Home;