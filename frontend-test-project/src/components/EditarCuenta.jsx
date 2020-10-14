import React from 'react'
import FlechaA from '../images/FlechaA.png'
import Lapiz from '../images/Editar.png'
import User from '../images/User.png'
import { Link } from "react-router-dom";
import './styles/EditarCuenta.css'

function EditarCuenta() {
      return (
        <div className='fond'>
          <title>Mi Cuenta</title>
          <header className='parteB'>
            <Link to="/hogar"><a href><img src={FlechaA} alt="" /></a></Link>
            <h1>Mi cuenta</h1>
            <Link to="/cuenta"><a href><img src={Lapiz} alt="" /></a></Link>
          </header>
          <div className="container">
            <div className="img-perfil">
              <span className="img"><img src={User} alt="" /></span>                
            </div>
          </div>
          <form action method="POST" id="form">
            <div className="form">
              <div className="datos">
                <div className="grupo">
                  <input type="text" id="name" required />
                  <label htmlFor>Nombre:</label>
                </div>
                <div className="grupo">
                  <input type="email" id="email" required />
                  <label htmlFor>Correo:</label>
                </div> 
                <div className="grupo">
                  <input type="cantidad" id="cantidad" required />
                  <label htmlFor>Productos agregados:</label>
                </div> 
              </div>
              <p className="warnings" id="warnings" />
              <p className="Campos Obligatorios">*Todos los campos son Obligatorios</p>
            </div>
          </form>
        </div>
      );
    };

  export default EditarCuenta;