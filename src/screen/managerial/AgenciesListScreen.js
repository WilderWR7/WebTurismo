import React from 'react'
import { Link } from 'react-router-dom'
import { LoadingScreen } from '../../components/public/LoadingScreen'
import { useGetAgencies } from '../../hooks/useGetAgencies'

export const AgenciesListScreen = () => {

    
    const {dataAgencies,isLoading} = useGetAgencies()
    const {agencies} = dataAgencies;
    if(isLoading){
        return <LoadingScreen/>
    }

    return (
        <div className="page-wrapper"> 
            <div className="container-fluid">
                <div className="row">
                    {
                        agencies &&
                        agencies.map(e=> 
                            <div className="col-lg-4 d-flex" key={e.Name} >
                                <div className="card bg-info text-white w-100">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="stats">
                                                <h1 className="text-white">{e.Name}</h1>
                                                <h6 className="text-white">{e.Location}</h6>
                                                <Link to= {`/managerial/hotel-list/crud/${e.Slug}`}  className="btn btn-rounded btn-outline btn-light m-t-10 font-14">Crud</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        )
                    }
                </div>
            </div>
        </div>
    )
}
