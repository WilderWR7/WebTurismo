import React from 'react'
import { Link } from 'react-router-dom'
import { CardHotel } from './CardHotel'
import { TitleSection } from './TitleSection'

export const SectionHotel = ({data}) => {
    console.log(data)
  return (
    <section className="courses-section section-padding mt-4">
        <section className="seccion-grid">
            <div className="container">
                <TitleSection first={'Hoteles'} second={'Encuentra el hotel confortable y cómodo para ti y tu familia'} />
                <div className="row">
                    {
                        data.hotels.slice(4,8).map(hotel=> <CardHotel key={hotel.Name} {...hotel}/>)
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
