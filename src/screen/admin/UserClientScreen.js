import React from 'react'
import { ContainerInfoPersonal } from '../../components/admin/ContainerInfoPersonal'

export const UserClientScreen = () => {
  return (
    <div className="page-wrapper">
        {/*!-- ============================================================== --> */}
        <div className="container-fluid">
            {/* <!-- ============================================================== --> */}
            <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Usuarios Cliente</h3>
                </div>
            </div>
            {/* <!-- ============================================================== -->*/}
            {/* <div className="row">
                {
                    info.map(i=> <CardInfo key={i.name} {...i}/> )
                }
            </div> */}
            <div className='row'>
                <ContainerInfoPersonal/>
            </div>
        </div>
        <footer className="footer"> © 2022 JOSEEDSONWILDER </footer>
    </div>
  )
}
