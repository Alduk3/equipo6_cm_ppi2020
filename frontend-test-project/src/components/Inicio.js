import React from 'react';
import './styles/Inicio.css';
import logoTenderNote from '../images/TenderNote.jpg'
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="col-fluid">
        <div className="mx-auto d-flex justify-content-center mb-3">
          <img src={logoTenderNote} alt="" srcset="" className="img-fluid"/>
        </div>
      <div className="col-sm">
        <div className="mx-auto d-flex justify-content-center flex-wrap align-middle">
          <button class="btn btn-azul m-3 mt-5 btn-lg btn-block btn-border">
            <Link to="/login" className="text-blanco">Iniciar sesión</Link>
          </button>
          <button className="btn btn-outline-primary-azul m-3 mt-5 btn-lg btn-block btn-border">
            <Link to="/register" className="text-azul">Crear una cuenta</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;