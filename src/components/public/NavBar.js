import React from 'react'

export const NavBar = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="header-main d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <a href="index.html">turismo</a>
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
                        <li className="menu-item"><a href="courses.html">Lugares</a></li>
                        <li className="menu-item menu-item-has-children">
                            <a href="#" className="js-toggle-sub-menu">Servicios <i className="fas fa-chevron-down"></i></a>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><a href="hotels.html">Hoteles</a></li>
                                <li className="sub-menu-item"><a href="agencies.html">Agencias de Turismo</a></li>
                                <li className="sub-menu-item"><a href="#">Promociones</a></li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="#" className="js-toggle-sub-menu">Ingresar <i className="fas fa-chevron-down"></i></a>
                            <ul className="sub-menu js-sub-menu">
                                <li className="sub-menu-item"><a href="log-in.html">iniciar sesion</a></li>
                                <li className="sub-menu-item"><a href="sign-up.html">registrarse</a></li>
                            </ul>
                        </li>
                        <li className="menu-item"><a href="contact.html">contáctanos </a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    )
}
