import React from 'react'
import { NavLink } from 'react-router-dom'

export const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
            {/* <!-- Sidebar scroll--> */}
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <p className="waves-effect waves-dark ml-3 " aria-expanded="false"><span className="hide-menu">Steave Jobs </span></p>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">PERSONAL</li>
                            <ul aria-expanded="true">
                                <li>
                                    <NavLink to="/login">Panel</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login/userg">Usuarios Gerenciales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login/userc">Usuarios Cliente</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login/userg">Solicitudes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login/usercrud">Sitios Turisticos</NavLink>
                                </li>
                            </ul>
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
        </aside>
  )
}
