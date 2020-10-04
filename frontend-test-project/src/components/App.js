import React from 'react';
import './styles/App.css';
import logoTenderNote from '../images/TenderNote.jpg'
import { Link } from "react-router-dom";

function App() {
  return (
    <div class="h-100 my-4">
      <div class="col mt-4">
        <div class="col-md-6 mx-auto d-flex justify-content-center mt-4">
          <img src={logoTenderNote} alt="" srcset="" />
        </div>
      </div>
      <div class="col">
        <div class="col-md-10 mx-auto d-flex justify-content-center flex-wrap align-middle">
          <button class="btn btn-azul m-2 btn-lg btn-block rounded-pill">
            <Link to="/login" class="text-blanco">Iniciar sesión</Link>
          </button>
          <button class="btn btn-outline-primary m-2 btn-lg btn-block rounded-pill">
            <Link to="/register" class="text-azul">Crear una cuenta</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;