import React from 'react'
import FlechaA from '../images/FlechaA.png'
import Lapiz from '../images/Editar.png'
import User from '../images/User.png'
import Chulito from '../images/ChuloV.png'
import { Link } from "react-router-dom";
import './styles/EditarCuenta.css'

function EditarCuenta() {
      return (
        <div className='fond'>
          <title>Mi Cuenta</title>
          <div className="mx-auto d-flex fondo justify-content-center mb-3 d-flex justify-content-between">
                <Link to="/inventario"><img src={FlechaA} alt="" srcset="" className="img-fluid pl-2" /></Link>
                <h3 className="text-blanco">
                    Editar Cuenta
                        </h3>
                <Link to="/inventario"><img src={Chulito} alt="" srcset="" className="img-fluid pr-2" /></Link>
            </div>
          <div className="container">
            <div className="img-perfil">
              <span className="img"><img src={User} alt="" /></span>                
            </div>
          </div>
          <form action method="POST" id="form">
            <div className="form">
              <div className="datos">
                <div className="grupo">
                  <input type="text" id="name" required className="border border-secondary"/>
                  <label htmlFor>Nombre:</label>
                </div>
                <div className="grupo">
                  <input type="email" id="email" required className="border border-secondary"/>
                  <label htmlFor>Correo:</label>
                </div> 
                <div className="grupo">
                  <input type="cantidad" id="cantidad" required className="border border-secondary" />
                  <label htmlFor>Productos agregados:</label>
                </div> 
              </div>
            </div>
          </form>
        </div>
      );
    };

  export default EditarCuenta;