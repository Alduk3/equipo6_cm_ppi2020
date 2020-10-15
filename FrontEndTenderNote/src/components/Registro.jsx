import React from 'react'
import User from '../images/User.png'
import BotonM from '../images/BtnAgregar.png'
import './styles/Registro.css'
import { Link } from "react-router-dom";

function Registro() {
    return (
        <div className="col-fluid fondo row-fluid">
            <div className="row-auto">
                <div className="d-flex align-items-center">
                <h1 className="p-3 align-self-center mx-auto letra-titulo text-justify text-center">Regístrate para continuar!</h1>
                </div>
                <div className="img-perfil">
              <span className="img"><img src={User} alt="" /></span>                
              <a href="#"><img src={BotonM} type="icon" alt="" /></a>
            </div>
            </div>
            <div class="col mx-auto">
                <div class="col-md-10 d-flex flex-wrap align-middle p-4">
                    <input type="text" id="full_name" className="form-control btn-border mb-3 btn-lg font-weight-bold" placeholder="Nombre*" />
                    <input type="text" id="job" className="form-control btn-border mb-3 btn-lg font-weight-bold" placeholder="Correo*" />
                    <input type="text" id="celphone" className="form-control btn-border btn-lg font-weight-bold" placeholder="Contraseña*" />
                    <p className="mt-2 font-weight-bold">*Todos los campos son obligatorios</p><Link to="/login">
                   <button className="btn btn-azul m-3 mt-5 btn-lg btn-block btn-border letra-titulo font-weight-bold">Regístrate</button></Link>
                </div>
            </div>
            <div className="text-center">
                <Link to="/login" class="text-white a-css">¿Ya tienes una cuenta?</Link>
            </div>
        </div>
    );
}

export default Registro;