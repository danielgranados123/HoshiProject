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
import { FiPlusCircle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineStorefront } from "react-icons/md";

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
                    <img src='https://kia-greccomotors.s3.amazonaws.com/sportage_x_7ba7efe05f_e10688bfe0.webp' alt="Sobre Nosotros" />
                </div>
            </div>
            {/*Products section*/}
            <div className='catalog'>
                <div className='catalog-text'>
                    <h1 className='catalog-tittle'>Catálogo Destacado</h1>
                    <p className='catalog-subtittle'>LO MÁS VENDIDO</p>
                    <p className='catalog-txt'>Descubre autos ideales para toda la familia, con vehículos cómodos,<br />
                    seguros y amplios, perfectos para tus viajes y actividades diarias.<br />
                    Encuentra el que se ajuste a tus necesidades y empieza a disfrutar<br />
                    de cada recorrido.</p>
                        <br />
                    <button class="app-button">
                        Ver más<FiPlusCircle className="catalog-icon"/>
                    </button>
                </div>
                <div class="catalog-img">
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 1" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 2" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 3" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 4" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 5" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                    <div class="c-img">
                        <img src="https://www.passporttoyota.com/blogs/716/wp-content/uploads/2020/04/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg" alt="Catálogo 6" />
                        <div class="hover-text">Toyota Corolla 2022</div>
                    </div>
                </div>
            </div>
            {/*Extra information section*/}
            <div className='extra'>
                <div className='extra-text'>
                    <h1 className='extra-tittle'>¿Por qué comprar en Hoshi?</h1>
                    <p className='extra-subtittle'>DESCUBRE</p>
                </div>
                <div class="e-cards-container">
                    <div class="e-card">
                        <div class="e-icon-container">
                        <FaRegCheckCircle className="e-react-icon"/>
                        </div>
                        <p class="e-text"><strong>Garantizamos calidad y procedencia, </strong>ofreciéndote autos revisados y verificados para brindarte la mayor confianza en tu compra.</p>
                    </div>

                    <div class="e-card">
                        <div class="e-icon-container">
                            <MdSupportAgent className="e-react-icon" />
                        </div>
                        <p class="e-text"><strong>Te brindamos atención exclusiva </strong>y dedicada para que encuentres el vehículo que mejor se adapte a tus necesidades y preferencias.</p>
                    </div>

                    <div class="e-card">
                        <div class="e-icon-container">
                        <FaRegStar className="e-react-icon" />
                        </div>
                        <p class="e-text"><strong>Te ofrecemos toda la información </strong>de manera clara y sin sorpresas, para que tomes decisiones informadas y seguras.</p>
                    </div>

                    <div class="e-card">
                        <div class="e-icon-container">
                        <MdOutlineStorefront className="e-react-icon" />
                        </div>
                        <p class="e-text"><strong>Con nuestra tienda en línea, </strong>puedes comprar tu vehículo de forma rápida y sencilla, desde la comodidad de tu hogar, con opciones de pago flexibles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;