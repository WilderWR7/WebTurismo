import React from 'react'
import { NavBar } from '../../components/public/NavBar'
import { agency, hotel, lugar } from '../../data/info'
import { CardDestination } from '../../components/public/CardDestination'
import { TitleSection } from '../../components/public/TitleSection'
import { CardHotel } from '../../components/public/CardHotel'
import { Footer } from '../../components/public/Footer'

export const Index = () => {
  return (
    <>
      <NavBar/>
    <section className="heronuevo">
      <div className="contenido-heronuevo">
        <h2 className="titulo">Guía de Turismo </h2>
        <div className="buscador">
          <input className="buscar_texto" type="text" placeholder="Buscar"/>
          <a className="boton" href="#"> <i className="fas fa-search"></i>
          </a>
        </div>
        {/* <!-- <p> La Paz,Bolivia <br>Buscador</p> --> */}
      </div>
    </section>
    {/* <!-- places section start --> */}
    <section className="courses-section section-padding">
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
              <a href="courses.html" className="btn btn-theme">Ver todos los Lugares Turísticos</a>
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* <!-- places section end --> */}

    {/* <!-- hotels section start --> */}
    <section className="courses-section section-padding">
      <section className="seccion-grid">
        <div className="container">
          <TitleSection first={'Hoteles'} second={'Encuentra el hotel confortable y cómodo para ti y tu familia'} />
          <div className="row">
            {/* <!-- courses item start --> */}
            {
              hotel.map(hotel=> <CardHotel key={hotel.title} {...hotel}/>)
            }
            {/* <!-- courses item end --> */}

          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <a href="hotels.html" className="btn btn-theme">Ver todos los Hoteles</a>
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* <!-- hotels section end --> */}
    {/* <!-- agencies section start --> */}
    <section className="courses-section section-padding">
      <section className="seccion-grid">
        <div className="container">
          <TitleSection first={'AGENCIAS TURÍSTICAS'} second={'ENCUENTRA LA AGENCIA QUE OFREZCA LO MEJOR PARA TI Y TU FAMILIA'} />
          <div className="row">
            {/* <!-- courses item start --> */}
            {
              agency.map(agency=> <CardHotel key={agency.title} {...agency} />)
            }
            {/* <!-- courses item end --> */}
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <a href="agencies.html" className="btn btn-theme">Ver todas las Agencias Turísticas</a>
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* <!-- agenciess section end --> */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="section-title text-center">
            <h2 className="title">Mapa</h2>
            <p className="sub-title">Indicando los lugares Turísticos</p>
          </div>
        </div>
            <img style={{width:'100%',marginBottom: '50px'}} src="img/lapaz.jpg" alt="decoration img"/>
      </div>

      {/* <!-- become a instructor section start --> */}
      <section className="bai-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="box">
                <h2 className="tit">te ofrecemos</h2>
                <div className="servicios">
                  <section className="servicio">
                    <h3 className='text-center' >Cuida tu economía</h3>
                    <div className="iconos">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-businessplan"
                        width="68" height="68" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <ellipse cx="16" cy="6" rx="5" ry="3" />
                        <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M5 15v1m0 -8v1" />
                      </svg>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam ipsa natus tempora saepe
                      cum possimus! Iusto minima pariatur officiis </p>
                  </section>
                  <section className="servicio">
                    <h3>Guía especializado </h3>
                    <div className="iconos">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map" width="68"
                        height="68" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
                        <line x1="9" y1="4" x2="9" y2="17" />
                        <line x1="15" y1="7" x2="15" y2="20" />
                      </svg>


                    </div>
                    <p>Lorem Ipsum ha sido el texto de relleno
                      estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                  </section>
                  <section className="servicio">
                    <h3>Atencion cordial</h3>
                    <div className="iconos">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width="68"
                        height="68" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                        <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
                      </svg>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eligendi possimus quis. Odit ex
                      nisi dicta reprehenderit sed reiciendis</p>
                  </section>
                  <section className="servicio">
                    <h3>Viaja seguro </h3>
                    <div className="iconos">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="68"
                        height="68" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                      </svg>

                    </div>
                    <p>Lorem Ipsum ha sido el texto de relleno
                      estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                  </section>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {/* <!-- become a instructor section end --> */}

      {/* <!-- footer start --> */}
      <Footer/>
      {/* <!-- footer end --> */}

    </div>
    </>
  )
}
