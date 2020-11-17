import React from 'react'
import './styles/CrearCuenta.css'
import googleIcon from '../images/google-icon.svg'
import { Link } from "react-router-dom";

import { GoogleLogin } from 'react-google-login';

function CrearCuenta() {

    const responseGoogle = (response) => {
        console.log(response);
      }

    return (
        <div className="col-fluid login-container row-fluid">
            <div className="row-auto">
                <div className="d-flex align-items-center">
                <h1 className="p-3 mt-5 align-self-center mx-auto letra-titulo text-justify text-center">Crear una cuenta</h1>
                </div>                
            </div>
            <div class="col mx-auto mt-4">
            <div className="col-fluid registro-boton mx-auto">

                <GoogleLogin 
                    className="btn btn-blanco  mt-3 btn-lg btn-block google-login letra-titulo2 font-weight-bold"
                    clientId="482073054770-hvt6tisht6ca1smsfk5pn4dscbg7bcdj.apps.googleusercontent.com"
                    buttonText="Regístrate con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                    {/* <Link to="#">
                        <button className="btn btn-blanco  mt-3 btn-lg btn-block btn-border letra-titulo2 font-weight-bold"><a href="#"><img src={googleIcon} type="icon" alt="" width="23" className="mr-2 "/></a>Regístrate con google</button>
                    </Link> */}
                </div>
                <br/>
                <div className="col-fluid registro-boton mx-auto">
                    <Link to="/register">
                        <button className="btn btn-azul mt-3 btn-lg btn-block btn-border letra-titulo font-weight-bold">Regístrate con tu correo</button>
                    </Link>
                </div>
                <br/>

                <div className="text-center mt-4">
                <p className="mt-2 text-white a-css">Al crearuna cuenta, aceptas nuestras  <Link to="#" class="text-white a-css">Condiciones de uso</Link> y <Link to="#" class="text-white a-css">Politica de privacidad</Link></p>
                   
                </div>
                <br/>
                <div className="text-center mt-4">
                    <Link to="/login" class="text-white a-css">¿Ya tienes una cuenta?</Link>
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;