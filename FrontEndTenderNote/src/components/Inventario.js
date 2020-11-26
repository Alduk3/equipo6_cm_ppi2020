import React, { useState,  Component } from 'react'
import './styles/Inventario.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import borrar1 from '../images/borrar1.png'
import borrar2 from '../images/borrar2.png'
import borrar3 from '../images/borrar3.png'
import agregar from '../images/agregar.png'
import { Link } from 'react-router-dom'
import BotonA from './BotonA';
import Product from './Productos';
import axios from 'axios'; 

const productos = [{ 
  "id": 1,
  "nombre": "Coca-Cola",
  "cantidad": 24,
  "precio": 1500,
  "foto": "https://i.imgur.com/nObrOz3.png"
}, {
  "id": 2,
  "nombre": "pan de ajo",
  "cantidad": 12,
  "precio": 3000,
  "foto": "https://i.imgur.com/lNo1W8I.png"
}, {
  "id": 3,
  "nombre": "Chocolisto",
  "cantidad": 25,
  "precio": 2500,
  "foto": "https://i.imgur.com/lTfdLAs.png"
}, {
  "id": 4,
  "nombre": "Papas",
  "cantidad": 24,
  "precio": 1000,
  "foto": "https://i.imgur.com/DeE6nSW.png"
}, {
  "id": 5,
  "nombre": "Galletas saladas",
  "cantidad": 5,
  "precio": 1233,
  "foto": "https://i.imgur.com/LPEkqke.png"
}, {
  "id": 6,
  "nombre": "Milo",
  "cantidad": 18,
  "precio": 2800,
  "foto": "https://i.imgur.com/GnOm10x.png"
}, {
  "id": 7,
  "nombre": "Quesito",
  "cantidad": 11,
  "precio": 2000,
  "foto": "https://i.imgur.com/ReLDTNQ.png"
}, {
  "id": 8,
  "nombre": "Salchichas",
  "cantidad": 12,
  "precio": 3000,
  "foto": "https://i.imgur.com/RlsfGXy.png"
}, {
  "id": 9,
  "nombre": "Doritos",
  "cantidad": 37,
  "precio": 1500,
  "foto": "https://i.imgur.com/3CuHPE9.png"
}, {
  "id": 10,
  "nombre": "Salsa de tomate",
  "cantidad": 24,
  "precio": 2500,
  "foto": "https://i.imgur.com/A27OOfo.png"
}]

function Inventario(){

  const [mostrarBoton, setMostrarBoton] = useState(false);  
  
        return (  
            <div className="col-fluid">
                <div className="fondo col row-fluid barra-arriba inventario-barra fixed-top">
                    <div className="text-center mb-3">
                        <h1 className="text-blanco">
                            Inventario
                        </h1>
                    </div>
                </div>
                <div className="px-5 pt-2 pt-5 mt-4 mb-1">
                    <input type="text" id="full_name" className="form-control rounded-pill mb-3 btn-lg font-weight-bold" placeholder="Buscar" />
                </div>
                <br/>

        <div style={{ maxHeight: '60vh'}}>
            {productos.map(p => (
              <Product
                onClick={() => setMostrarBoton(true)}
                key={p.id}
                nombre={p.nombre}
                cantidad={p.cantidad}
                precio={p.precio}
                foto={p.foto}
              />
            ))}
        </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <BotonA
            mostrar={mostrarBoton}
            onEdit={() =>alert('Editar producto')}
            onDelete={() => alert('Eliminar producto')}
            close={() => setMostrarBoton(false)}
            onClick={() => alert('ir a la mamada esa gran hp')}

          />
          


                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>

               <div className="col-fluid fondo mx-auto row justify-content-center fixed-bottom">
                    <div className="d-inline-block p-2 px-4">
                        <Link to="/hogar">
                        <img src={hogar} className="img-fluid tamano-img mx-auto" />
                        </Link>
                    </div>
                    <div className="d-inline-block p-2 px-4 pl-5 pr-5">
                        <Link to="/inventario">
                        <img src={lista} className="img-fluid tamano-img mx-auto" />
                        </Link>
                    </div>
                    <div className="d-inline-block p-2 px-4">
                        <Link to="/ajustes">
                        <img src={ajuste} className="img-fluid tamano-img mx-auto" />
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
    
 export default Inventario