import React from 'react';
import './App.css';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

function App() {
  return (
    <div class="h-100">
        <div class="mt-5 mx-auto d-flex justify-content-center">
          <img src={logo} alt="" srcset="" />
      </div>
      <div class="col mt-5">
        <div class="mx-auto d-flex justify-content-center flex-wrap align-middle">
          <button class="btn btn-azul m-2 btn-lg btn-block rounded">
            <Link to="/login" class="text-blanco">Iniciar sesión</Link>
          </button>
          <button class="mt-4 btn btn-outline-primary-azul m-2 btn-lg btn-block rounded">
            <Link to="/register" class="text-azul">Crear una cuenta</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;