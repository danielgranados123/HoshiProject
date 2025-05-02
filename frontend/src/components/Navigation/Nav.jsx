import { useState } from "react";
import Shop from "../../assets/shop.svg";
import Account from "../../assets/account.svg";
import Logo from "../../assets/logo.svg";
import "./Nav.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-logo">
                    <img src={Logo} className="logo-img" alt="Logo" />
                </div>

                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
                    <li><a href="/" className="nav-link">Inicio</a></li>
                    <li><a href="/about" className="nav-link">Sobre Nosotros</a></li>
                    <li><a href="/catalog" className="nav-link">Catálogo</a></li>
                    <li><a href="/purchaseHistory" className="nav-link"><img src={Shop} alt="Shop" /></a></li>
                    <li><a href="/login" className="nav-link"><img src={Account} alt="Account" /></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

