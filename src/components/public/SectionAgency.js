import React from 'react'
import { Link } from 'react-router-dom'
import { CardHotel } from './CardHotel'
import { TitleSection } from './TitleSection'

export const SectionAgency = ({data}) => {
  return (
    <section className="courses-section section-padding mt-4">
        <section className="seccion-grid">
            <div className="container">
                <TitleSection first={'AGENCIAS TURÍSTICAS'} second={'ENCUENTRA LA AGENCIA QUE OFREZCA LO MEJOR PARA TI Y TU FAMILIA'} />
                <div className="row">
                    {
                        data.agencies.slice(0,4).map(agency=> <CardHotel key={agency.Name} {...agency} />)
                    }
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <Link to="/agencies" className="btn btn-theme">Ver todas las Agencias Turísticas</Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
