import React from 'react'
import { peopleInformation } from '../../data/info'
import { UserGInfo } from './UserGInfo'
//<div className="col-lg-6 col-md-12">

export const ContainerInfoPersonal = ({styles,title='Usuarios Gerenciales'}) => {
  return (
        <div className={`col-md-12 ${styles}`}>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        <div>
                            <h4 className="card-title"><span className="lstick"></span>{title}</h4>
                        </div>
                        <div className="ml-auto">
                        </div>
                    </div>
                    <div className="table-responsive m-t-20">
                        <table className="table vm no-th-brd no-wrap pro-of-month">
                            <thead>
                                <tr>
                                    <th colSpan="2">Nombre</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    peopleInformation.map(p=> <UserGInfo key={p.name} {...p} /> )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}
