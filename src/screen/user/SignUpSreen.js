import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumb } from '../../components/public/Breadcrumb'
import { useForm } from '../../hooks/useForm'

export const SignUpSreen = () => {

    const {handleInputChange,values} = useForm({name:'',email:'',password:''})
    const Navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)
        if(values.name === 'Wilder') {
            Navigate('/login')
        }
    }

    return (
    <>
        <Breadcrumb type='Registrarse'/>
        <section className="signup section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <div className="signup-form box">
                            <h2 className="form-title text-center">Crea tu Cuenta</h2>
                            <form onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <input name='name' onChange={handleInputChange} value={values.name} type="text" className="form-control" placeholder="Nombre Completo"/>
                                </div>
                                <div className="form-group">
                                    <input name='email' onChange={handleInputChange} value={values.email} type="email" className="form-control" placeholder="Correo Electrónico"/>
                                </div>
                                <div className="form-group">
                                    <input name='password' onChange={handleInputChange} value={values.password} type="password" className="form-control" placeholder="Contraseña"/>
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
