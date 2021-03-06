import React from 'react'
import FlechaA from '../images/FlechaA.png'
import Chulo from '../images/ChuloV.png'
import User from '../images/abuelo6.png'
import { Link } from "react-router-dom";
import './styles/Cuenta.css'

function cuenta() {
      return (
        <div className='fond'>
          <title>Cuenta</title>
          <header className='parteA'>
            <Link to="/editarcuenta"><a href><img src={FlechaA} alt="" /></a></Link>
            <h1>Editar Cuenta</h1>
            <Link to="/editarcuenta"><a href><img src={Chulo} alt="" /></a></Link> 
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
                  <label htmlFor>Nombre*</label>
                </div>
                <div className="grupo">
                  <input type="text" id="lastname" required />
                  <label htmlFor>Apellido*</label>
                </div>
                <div className="grupo">
                  <input type="email" id="email" required />
                  <label htmlFor>Correo*</label>
                </div> 
                <div className="grupo">
                  <input type="password" id="password" required />
                  <label htmlFor>Contraseña*</label>
                </div>
                <div className="grupo">
                  <input type="password" id="password" required />
                  <label htmlFor>Confirmar contraseña*</label>
                </div>
              </div>
              <p className="warnings" id="warnings" />
              <p className="Campos Obligatorios">*Todos los campos son Obligatorios*</p>
            </div>
          </form>
        </div>
      );
    };

  export default cuenta;