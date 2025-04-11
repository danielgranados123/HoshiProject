import Hoshi from "../../assets/hoshi.svg"
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io'


import "./Footer.css";

const Footer = () => { 
    return (
        <nav className="footer-container">
            <div className="content1"> 
                <div className="nav-logo">
                    <img src={Hoshi} className="logo-img"/>
                </div>
                <br />
                <h2 className="copy">&copy;2025 - Todos los derechos reservados<br/><a href="/terms">Términos y condiciones</a></h2>
            </div>
            <div className="content2">
                <ul className="footer-menu">
                    <li>
                        <a href="/" className="footer-link">Inicio</a>
                    </li>
                    <li>
                        <a href="/about" className="footer-link">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="/catalog" className="footer-link">Catálogo</a>
                    </li>
                </ul>
                <div className="social-media">
                    <a href="https://www.whatsapp.com/?lang=es_LA" target="blank"><FaWhatsapp className="social-icon" /></a>
                    <a href="https://www.facebook.com/" target="blank"><FaFacebook className="social-icon" /></a>
                    <a href="https://www.instagram.com/" target="blank"><FaInstagram className="social-icon" /></a>
                </div>
            </div>
            <div className="content3">
                <div class="form-container">
                <input type="text" className="input-field" placeholder="Escribe algo..." />
                <button class="submit-button">
                <IoMdSend className="social-icon-2" /> Empezar chat
                </button>
            </div>
            </div>
        </nav>
    );
};

export default Footer;
