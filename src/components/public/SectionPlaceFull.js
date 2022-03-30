import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import turismoDB from '../../api/turismoDB'
import { CardHotel } from './CardHotel'
import { TitleSection } from './TitleSection'


export const SectionPlaceFull = () => {
    const [dataResp, setAgency] = useState({
        dataAgency:[],
        dataPlaces: []
      })
      // {
      //   Name: '',
      //   Image_Url:''
      // }
      const getMovieDetails = async()=>{
          const const1 =  turismoDB.get('/agencies')
          const const2 =  turismoDB.get('/places')
          const [agency,place] = await Promise.all([const1,const2])
          setAgency({
                dataPlaces: place.data.data,
              dataAgency: agency.data.data,
          })
      }
    
      useEffect(() => {
        getMovieDetails()
      }, [])
      const {dataPlaces}= dataResp;
      console.log(dataResp)
  return (
    <section className="courses-section section-padding mt-4">
    <section className="seccion-grid">
        <div className="container">
            <TitleSection first={'Hoteles'} second={'Encuentra el hotel confortable y cómodo para ti y tu familia'} />
            <div className="row">
                {
                    dataPlaces.length !== 0 && dataPlaces.places.map(hotel=> <CardHotel key={hotel.Name} {...hotel}/>)
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
