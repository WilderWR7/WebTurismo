import React from 'react'
import { Link } from 'react-router-dom'
import { lugar } from '../../data/info'
import { CardDestination } from './CardDestination'
import { TitleSection } from './TitleSection'


export const SectionPlace = () => {
    
  return (
    <section className="courses-section section-padding mt-4">
        <section className="seccion-grid">
            <div className="container">
                <TitleSection first={'LUGARES TURÍSTICOS'} second={'ENCUENTRA EL LUGAR ADECUADO PARA TI Y TU FAMILIA'} />
                <div className="row">
                    {
                        lugar.map((l,index)=> <CardDestination key={l.title+index} {...l}/>)
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
