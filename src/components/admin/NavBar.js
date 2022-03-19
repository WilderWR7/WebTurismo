import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="topbar">
    <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header">
            <a className="navbar-brand" href="index2.html">
                <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                <span>
                    <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                    <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                </span>
            </a>
        </div>
        <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"><i className="ti-menu"></i></a> </li>
                <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"><i className="ti-menu"></i></a> </li>
            </ul>
            <ul className="navbar-nav my-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg"
                            alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                        <ul className="dropdown-user">
                            <li>
                                <div className="dw-user-box">
                                    <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user"/></div>
                                    <div className="u-text">
                                        <h4>Steave Jobs</h4>
                                        <p className="text-muted">varun@gmail.com</p><a href="pages-profile.html"
                                            className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                    </div>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><Link to='/' ><i className="fa fa-power-off"></i> Logout</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
)
}
