import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import turismoDB from '../../api/turismoDB'
import { Breadcrumb } from '../../components/public/Breadcrumb'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    const {handleInputChange,values} =useForm({text: '', password:''})
    const [first, setfirst] = useState(1)
    // const Navigate = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault()
        
        login(values.text,values.password)
    }

    const login = async (email,password)=> {
        const const1 = turismoDB.post('/login',{
            "email": email, 
            "password": password
        })
        const resp = await const1;
        if(!resp.data.user){
            console.log('error')
        }
        else{
            setfirst(resp.data.user[0].Cod_Role)
        }
    }
    // console.log(first)

    return (
    <>
        <Breadcrumb type='Iniciar Sesión' />
        
        <section className="login-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <div className="login-form box">
                            <h2 className="form-title text-center">Inicia Sesión con tu Cuenta</h2>
                            <form onSubmit={(e)=>handleSubmit(e)}>
                                <div className="form-group">
                                    <input value={values.text} onChange={(e)=>handleInputChange(e)} name='text' type="text" className="form-control" placeholder="Correo"/>
                                </div>
                                <div className="form-group">
                                    <div className="d-flex mb-2 justify-content-end"><Link to=''>Olvidaste tu Contraseña?</Link></div>
                                    <input value={values.password} onChange={(e)=>handleInputChange(e)} name='password' type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <button type="submit" className="btn btn-theme btn-block btn-form">Iniciar Sesión</button>
                                <p className="text-center mt-4 mb-0">Aún no estás registrado ? <Link to='/signUpUsers' >Registrarse</Link></p>
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
