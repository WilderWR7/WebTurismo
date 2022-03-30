import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import turismoDB from '../../api/turismoDB'
import { CardDestination } from './CardDestination'
import { TitleSection } from './TitleSection'

export const SectionAgencyFull = () => {
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
          const const3 =  turismoDB.get('/places')
          const [agency,hotel,place] = await Promise.all([const1,const2,const3])
          setAgency({
              dataHotel: hotel.data.data,
              dataAgency: agency.data.data,
          })
      }
    
      useEffect(() => {
        getMovieDetails()
      }, [])
      const {dataAgency}= dataResp;
      console.log(dataResp)
  return (
    <section className="courses-section section-padding mt-4">
        <section className="seccion-grid">
            <div className="container">
                <TitleSection first={'LUGARES TURÍSTICOS'} second={'ENCUENTRA EL LUGAR ADECUADO PARA TI Y TU FAMILIA'} />
                <div className="row">
                    {
                        dataAgency.length !== 0 && dataAgency.agencies.map((l,index)=> <CardDestination key={l.Name+index} {...l}/>)
                    }
                    
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <Link to="/places" className="btn btn-theme">Ver todos los Lugares Turísticos</Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
