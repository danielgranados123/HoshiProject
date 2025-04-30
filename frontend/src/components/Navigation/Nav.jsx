import Shop from "../../assets/shop.svg";
import Account from "../../assets/account.svg";
import Logo from "../../assets/logo.svg";
import "./Nav.css";

const Nav = () => { 
    return (
        <nav className="nav-container">
            <div className="nav-content"> 
                <div className="nav-logo">
                    <img src={Logo} className="logo-img"/>
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
                        <a href="/purchaseHistory" className="nav-link">
                        <img src={Shop}/>
                        </a>
                    </li>
                    <li>
                        <a href="/account" className="nav-link">
                            <img src={Account}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
