import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/public/Breadcrumb'

export const SignUpSreen = () => {
  return (
      <>
        <Breadcrumb type='Registrarse'/>
        <section className="signup section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <div className="signup-form box">
                            <h2 className="form-title text-center">Crea tu Cuenta</h2>
                            <form action="">
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nombre Completo"/>
                                </div>
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Correo Electrónico"/>
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <button type="submit" className="btn btn-block btn-theme btn-form">Registrarse</button>
                                <p className="text-center mt-4 mb-0">Deseas Registrar tu Hotel o Agencia ? <Link to="log-in.html">Click Aquí</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}
