import React from "react";
import './About.css';

import AboutHeader from "../../assets/about_header.svg"
import AppImage from "../../assets/app.svg";
import Tomasu from "../../assets/tomasu.svg"

import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";


const About = () => {
    return (
<div className='content'>
            {/*Header section*/}
            <div className='about1'>
                <div className='about-text'>
                    <p className='about-subtittle'>CONÓCENOS</p>
                    <h1 className='about1-tittle'>Sobre<br />Nosotros</h1>
                    <p className='about-txt'><strong>Tu confianza nos impulsa.</strong> <br />
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
            {/*History section*/}
            <div className="history">
                <div className="circles1">
                    <div className="circles11">
                        <div className="circleh"></div><div className="circleh"></div><div className="circleh"></div>
                    </div>
                </div>
                <br />
                <h1 className='history-tittle'>Nuestra historia</h1>
                <br />
                <div className="history-content">
                    <p className="hitory-text">
                    <strong>Hoshi </strong> fue fundada en 2010 por el mecánico japonés
                    <span className="hover-wrapper">
                    <strong className="name">Tōmasu Paromaresu</strong>
                    <span className="history-img">
                    <img src={Tomasu} alt="Tōmasu Paromaresu" />
                    </span>
                    </span> en El Salvador. <br /><br />Inspirada en la cultura
                            japonesa y su enfoque en la calidad, la empresa comenzó
                            como un pequeño negocio familiar de reparación de
                            vehículos, para luego expandirse a la importación y venta
                            de autos usados. La perseverancia y el compromiso con la
                            calidad permitieron a Hoshi ganar reconocimiento en el 
                            país.
                            El éxito de Hoshi se consolidó con la expansión a nuevas 
                            sucursales en El Salvador, Guatemala y Honduras. <br /><br />La 
                            empresa se ha destacado por sus <strong>procesos de inspección 
                            meticulosos, la integración de tecnología en el proceso de 
                            compra y una oferta variada de vehículos,</strong> manteniendo 
                            siempre la calidad y la transparencia como sus principales 
                            pilares.
                        </p>
                </div>
            </div>
            {/*Mision section*/}
            <div className="mision">
                <div className="mision-content">
                    <div className="mision-left">
                        <br />
                    <div className="circles2">
                        <div className="circles">
                        <div className="circleh"></div>
                        <div className="circleh"></div>
                        <div className="circleh"></div>
                        </div>
                    </div>
                    <h1 className="mision-tittle">Misión</h1>
                    <div className="mision-text1">
                        <p className="mision-text">
                        Comercializar vehículos usados de alta calidad, ofreciendo a los clientes seguridad, confianza y 
                        accesibilidad en cada compra, comprometiéndose a proporcionar una experiencia transparente y profesional, 
                        asegurando que cada vehículo cumpla con estándares de excelencia y representando una oportunidad confiable 
                        para quienes buscan movilidad con garantía y respaldo.
                        </p>
                    </div>
                    </div>
                    <div className="mision-img">
                    <img src="https://content.toyota.com.ph/uploads/vehicle_features/3/005_3_1723194115146_000.png" alt="Misión" />
                    </div>
                </div>
            </div>
            {/*Vision section*/}
            <div className="vision">
                <div className="vision-content">
                    <div className="vision-img">
                        <img src="https://img-ik.cars.co.za/news-site-za/images/2020/02/Kia-Seltos-7.jpg?tr=w-1200,h-800" alt="Visión" />
                    </div>
                    <div className="vision-right">
                    <div className="circles22">
                        <div className="circles">
                        <div className="circleh"></div>
                        <div className="circleh"></div>
                        <div className="circleh"></div>
                        </div>
                    </div>
                    <h1 className="vision-tittle">Visión</h1>
                    <p className="vision-text">
                        Ser la empresa líder en la venta de autos usados a nivel de Centroamérica, 
                        reconocida por su transparencia, calidad y servicio excepcional. 
                        Transformar la percepción del mercado de vehículos usados, 
                        brindando confianza y facilidad a cada cliente, y 
                        expandiendo su presencia a través de la innovación 
                        y tecnología en el sector automotriz.
                    </p>
                    </div>
                </div>
            </div>
            {/*Values section*/}
            <div className="values">
                <div className="circles12">
                    <div className="circles123">
                        <div className="circleh"></div><div className="circleh"></div><div className="circleh"></div>
                    </div>
                </div>
                <br />
                <h1 className='values-tittle'>Nuestros Valores</h1>
                <br />
                <div className="values-content">
                    <div className="values-text">
                        <div class="v-icon-container">
                            <FaRegStar className="v-react-icon"/>
                        </div>
                        <p className="values-text">Calidad</p>
                    </div>
                    <div className="values-text">
                        <div class="v-icon-container">
                            <FaRegCheckCircle className="v-react-icon"/>
                        </div>
                        <p className="values-text">Transparencia</p>
                    </div>
                    <div className="values-text">
                        <div class="v-icon-container">
                            <MdOutlineLock className="v-react-icon"/>
                        </div>
                        <p className="values-text">Seguridad</p>
                    </div>
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
        </div>
    );
};

export default About;