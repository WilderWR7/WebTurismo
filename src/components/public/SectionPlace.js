import React from 'react'
import { Link } from 'react-router-dom'
import { CardDestination } from './CardDestination'
import { TitleSection } from './TitleSection'


export const SectionPlace = ({data}) => {
    
    return (
        <section className="courses-section section-padding mt-4">
            <section className="seccion-grid">
                <div className="container">
                    <TitleSection first={'LUGARES TURÍSTICOS'} second={'ENCUENTRA EL LUGAR ADECUADO PARA TI Y TU FAMILIA'} />
                    <div className="row">
                        {
                            data.places.slice(0,4).map((l,index)=> <CardDestination key={l.Name+index} {...l}/>)
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
