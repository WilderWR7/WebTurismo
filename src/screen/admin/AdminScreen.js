import React from 'react'
import { CardInfo } from '../../components/admin/CardInfo'
import { ContainerInfoPersonal } from '../../components/admin/ContainerInfoPersonal'
import { info, requests } from '../../data/info'
import { useGetAdmin } from '../../hooks/useGetAdmin'

export const AdminScreen = () => {
    const {dataManagers,dataUsers,isLoading} = useGetAdmin()
    console.log(dataManagers)
    console.log(dataUsers)
    console.log(isLoading)
    return (
    <div className="page-wrapper"> 
        <div className="container-fluid">
                {/* <!-- Bread crumb and right sidebar toggle --> */}
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Panel de Administración</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        info.map(i=> <CardInfo key={i.name} {...i}/> )
                    }
                </div>
                <div className="row">
                    <ContainerInfoPersonal styles={'col-lg-6'}  title = 'Usuarios Gerenciales' />
                    {/* <!-- Activity widget find scss into widget folder--> */}
                    <ContainerInfoPersonal styles={'col-lg-6'}  title = 'Usuarios Cliente' />
                    
                </div>
                {/* <!-- ============================================================== --> */}
                <div className="row">
                    
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div>
                                        <h4 className="card-title"><span className="lstick"></span>Lista de Solicitudes</h4>
                                    </div>
                                <div className="ml-auto">
                                    <button className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Ver Todo</button>
                                    </div>
                                </div>
                                <ul className="feeds">
                                    {
                                        requests.map((r,index)=>  
                                            <li key={r.title+index} >
                                                <div className="bg-light-info"><i className="fa fa-bell-o"></i></div>{r.title}<span className="text-muted">{r.time}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                        {/* <!-- nueva fila --> */}
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div>
                                        <h4 className="card-title"><span className="lstick"></span>Lista de Reservas</h4>
                                    </div>
                                <div className="ml-auto">
                                        <button className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Ver Todo</button>
                                    </div>
                                </div>
                                <ul className="feeds">
                                    {
                                        requests.map((r,index)=>  
                                            <li key={r.title+index} >
                                                <div className="bg-light-warning"><i className="ti-shopping-cart"></i></div>{r.title}<span className="text-muted">{r.time}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Twitter facebook and mail boxes --> */}
                {/* <!-- ============================================================== --> */}
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card bg-info text-white">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="stats">
                                        <h1 className="text-white">3257+</h1>
                                        <h6 className="text-white">Twitter Followers</h6>
                                        <button className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Check
                                            list</button>
                                    </div>
                                    <div className="stats-icon text-right ml-auto"><i
                                            className="fa fa-twitter display-5 op-3 text-dark"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card bg-primary text-white">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="stats">
                                        <h1 className="text-white">6509+</h1>
                                        <h6 className="text-white">Facebook Likes</h6>
                                        <button className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Check
                                            list</button>
                                    </div>
                                    <div className="stats-icon text-right ml-auto"><i
                                            className="fa fa-facebook display-5 op-3 text-dark"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card bg-success text-white">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="stats">
                                        <h1 className="text-white">9062+</h1>
                                        <h6 className="text-white">Subscribe</h6>
                                        <button className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Check list</button>
                                    </div>
                                    <div className="stats-icon text-right ml-auto"><i
                                            className="fa fa-envelope display-5 op-3 text-dark"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>    
    )
}
