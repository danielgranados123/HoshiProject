import React from "react"; 
import Shop from "";
import Account from "./assets/account.svg";
import "./Nav.css";

const Nav = () => { 
    return (
        <nav className="nav-container">
            <div className="nav-content"> 
                <div className="nav-logo">
                    <img src="/logo.png" alt="Logo" className="logo-img"/>
                </div>
    
                <ul className="nav-menu">
                    <li>
                        <a href="/" className="nav-link">Inicio</a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="/catalog" className="nav-link">Catálogo</a>
                    </li>
                    <li>
                        <a href="/shop" className="nav-link">
                            <Shop className="nav-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="/account" className="nav-link">
                            <Account className="nav-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
