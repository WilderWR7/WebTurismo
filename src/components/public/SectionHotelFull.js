import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import turismoDB from '../../api/turismoDB'
import { CardHotel } from './CardHotel'
import { TitleSection } from './TitleSection'

export const SectionHotelFull = () => {
    const [dataResp, setAgency] = useState({
        dataHotel:[],
        dataAgency:[],
        dataPlaces: []
      })
      // {
      //   Name: '',
      //   Image_Url:''
      // }
      const getMovieDetails = async()=>{
          const const1 =  turismoDB.get('/agencies')
          const const2 =  turismoDB.get('/hotels')
          const [agency,hotel] = await Promise.all([const1,const2])
          setAgency({
              dataHotel: hotel.data.data,
              dataAgency: agency.data.data,
          })
      }
    
      useEffect(() => {
        getMovieDetails()
      }, [])
      const {dataHotel}= dataResp;
      console.log(dataResp)
    return (
        <section className="courses-section section-padding mt-4">
            <section className="seccion-grid">
                <div className="container">
                    <TitleSection first={'Hoteles'} second={'Encuentra el hotel confortable y cómodo para ti y tu familia'} />
                    <div className="row">
                        {
                            dataHotel.length !== 0 && dataHotel.hotels.map(hotel=> <CardHotel key={hotel.Name} {...hotel}/>)
                        }
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <Link to="/hotels" className="btn btn-theme">Ver todos los Hoteles</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
  )
}
