import React from 'react'
import { NavLink } from 'react-router-dom'

export const LeftSidebarManagerial = () => {
  return (
    <aside className="left-sidebar">
            {/* <!-- Sidebar scroll--> */}
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <p className="waves-effect waves-dark ml-3 " ariaExpanded="false"><span className="hide-menu">Steave Jobs </span></p>
                        </li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">PERSONAL</li>
                            <ul ariaExpanded="true">
                                <li>
                                    <NavLink to="/managerial/hotels-crud">Crud Hotel</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/managerial/agencies-crud">Crud Agencia de Turismo</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/managerial/hotel-list">Crud Paquetes de Hoteles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/managerial/agencies-list">Crud Paquetes de Agencias de Turismo</NavLink>
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
