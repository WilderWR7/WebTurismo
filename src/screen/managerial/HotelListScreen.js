import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import turismoDB from '../../api/turismoDB'

export const HotelListScreen = () => {

    const [dataResp, setAgency] = useState({
        dataHotel:[]
    })
      // {
      //   Name: '',
      //   Image_Url:''
      // }
    const getMovieDetails = async()=>{
        const const1 =  turismoDB.get('/hotels')
        const hotels = await const1
        setAgency({
            dataHotel: hotels.data.data,
        })
    }
    
    useEffect(() => {
        getMovieDetails()
    }, [])
    const {dataHotel:{hotels}}= dataResp;
    return (
        <div className="page-wrapper"> 
            <div className="container-fluid">
                <div className="row">
                    {
                        hotels &&
                        hotels.map(e=> 
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
