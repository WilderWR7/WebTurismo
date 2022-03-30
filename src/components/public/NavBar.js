import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="header-main d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <Link to="/">turismo</Link>
                </div>
                <button type="button" className="header-hamburger-btn js-header-menu-toggler">
                    <span></span>
                </button>
                <div className="header-backdrop js-header-backdrop"></div>
                <nav className="header-menu js-header-menu">
                    <button type="button" className="header-close-btn js-header-menu-toggler">
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="menu">
                        <li className="menu-item"><Link to="/places">Lugares</Link></li>
                        <li className="menu-item menu-item-has-children">
                            <a href="#" className="js-toggle-sub-menu">Servicios <i className="fas fa-chevron-down"></i></a>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><Link to="/hotels">Hoteles</Link></li>
                                <li className="sub-menu-item"><Link to="/agencies">Agencias de Turismo</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="#" className="js-toggle-sub-menu">Ingresar <i className="fas fa-chevron-down"></i></a>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><Link to="/loginUsers">iniciar sesion</Link></li>
                                <li className="sub-menu-item"><Link to="/signUpUsers">registrarse</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item"><Link to="contact.html">contáctanos </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    )
}
