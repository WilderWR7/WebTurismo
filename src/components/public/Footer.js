import React from 'react'

export const Footer = () => {
return (
    <footer className="mt-4">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                    <div className="footer-item">
                        <h3 className="footer-logo"><span>Turismo</span></h3>
                        <ul>
                        <li><a href="#">Acerca de Nosotros</a></li>
                        <li><a href="#">Que servicios ofrecemos</a></li>
                        <li><a href="#">Hoteles</a></li>
                        <li><a href="#">Seguros</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="footer-item">
                        <h3>Mas</h3>
                        <ul>
                        <li><a href="#">Unete </a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="footer-item">
                        <h3>Nuestras Redes</h3>
                        <ul>
                        <li><a href="#"><i className="fab fa-facebook social-icon"></i> facebook</a></li>
                        <li><a href="#"><i className="fab fa-twitter social-icon"></i> twitter</a></li>
                        <li><a href="#"><i className="fab fa-instagram social-icon"></i> instagram</a></li>
                        <li><a href="#"><i className="fab fa-youtube social-icon"></i> youtube</a></li>
                        <li><a href="#"><i className="fab fa-linkedin social-icon"></i> linkedin</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="footer-bottom">
        <div className="container">
        <p className="m-0 py-4 text-center">Copyright &copy;2022 JoseEdsonWilder</p>
        </div>
    </div>
</footer>
)
}
