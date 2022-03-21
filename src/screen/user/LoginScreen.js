import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/public/Breadcrumb'

export const LoginScreen = () => {
  return (
      <>
        <Breadcrumb type='Iniciar Sesión' />
        {/* //   <!-- breadcrumb end --> */}

        {/* //   <!-- login section start --> */}
        <section className="login-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <div className="login-form box">
                            <h2 className="form-title text-center">Inicia Sesión con tu Cuenta</h2>
                            <form action="">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Correo"/>
                                </div>
                                <div className="form-group">
                                    <div className="d-flex mb-2 justify-content-end"><Link to=''>Olvidaste tu Contraseña?</Link></div>
                                    <input type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <button type="submit" className="btn btn-theme btn-block btn-form">Iniciar Sesión</button>
                                <p className="text-center mt-4 mb-0">Aún no estás registrado ? <Link to='' >Registrarse</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- login section end --> */}
      </>
  )
}
