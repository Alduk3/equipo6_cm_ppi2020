import React from 'react'
import './styles/Inventario.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import borrar1 from '../images/borrar1.png'
import borrar2 from '../images/borrar2.png'
import borrar3 from '../images/borrar3.png'
import agregar from '../images/agregar.png'
import { Link } from 'react-router-dom'

import Product from './Productos';


const productos = [{ 
  "id": 1,
  "nombre": "Coca-Cola",
  "cantidad": 24,
  "precio": 1500,
  "foto": "http://dummyimage.com/223x196.bmp/ff4444/ffffff"
}, {
  "id": 2,
  "nombre": "Beef - Rouladin, Sliced",
  "cantidad": 12,
  "precio": 3000,
  "foto": "http://dummyimage.com/202x106.jpg/cc0000/ffffff"
}, {
  "id": 3,
  "nombre": "Olives - Stuffed",
  "cantidad": 48,
  "precio": 1223,
  "foto": "http://dummyimage.com/103x107.png/cc0000/ffffff"
}, {
  "id": 4,
  "nombre": "Fish - Atlantic Salmon, Cold",
  "cantidad": 24,
  "precio": 8000,
  "foto": "http://dummyimage.com/100x249.jpg/5fa2dd/ffffff"
}, {
  "id": 5,
  "nombre": "Wine - Magnotta - Cab Franc",
  "cantidad": 5,
  "precio": 1233,
  "foto": "http://dummyimage.com/110x139.bmp/cc0000/ffffff"
}, {
  "id": 6,
  "nombre": "Lobak",
  "cantidad": 78,
  "precio": 1233,
  "foto": "http://dummyimage.com/143x118.jpg/5fa2dd/ffffff"
}, {
  "id": 7,
  "nombre": "Bacardi Mojito",
  "cantidad": 81,
  "precio": 1233,
  "foto": "http://dummyimage.com/169x220.png/ff4444/ffffff"
}, {
  "id": 8,
  "nombre": "Ecolab - Hobart Upr Prewash Arm",
  "cantidad": 12,
  "precio": 7444,
  "foto": "http://dummyimage.com/100x158.png/cc0000/ffffff"
}, {
  "id": 9,
  "nombre": "Cheese Cloth",
  "cantidad": 37,
  "precio": 9000,
  "foto": "http://dummyimage.com/153x120.jpg/5fa2dd/ffffff"
}, {
  "id": 10,
  "nombre": "Vermouth - Sweet, Cinzano",
  "cantidad": 44,
  "precio": 1223,
  "foto": "http://dummyimage.com/218x201.png/ff4444/ffffff"
}]


class Inventario extends React.Component {
    render(){
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
                
                key={p.id}
                nombre={p.nombre}
                cantidad={p.cantidad}
                precio={p.precio}
                foto={p.foto}
              />
            ))}
          </div>

{/*}                <div className="text-center pt-2">
                    <div className="d-inline-block px-3 py-3">
                      <Link to="/Inventariok">
                        <img src={borrar1} className="border rounded shadow"/>
                      </Link>
                    </div>
                    <div className="d-inline-block px-3 py-3">
                      <Link to="/Inventariok">
                        <img src={borrar2} className="border rounded shadow"/>
                      </Link>
                    </div>
                    <div className="d-inline-block px-3 py-4">
                      <Link to="/Inventariok">
                        <img src={borrar3} className="border rounded shadow"/>
                      </Link>
                    </div>
                    <div className="d-inline-block px-3 py-4">
                      <Link to="/Inventariok">
                        <img src={borrar1} className="border rounded shadow"/>
                      </Link>
                    </div>
                </div>
                */}
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="float-right mb-4 mr-3 margen pb-5 ">
                    <Link>            
                        <img src={agregar} className="img-fluid tamano-img-agregar" />
                    </Link>
                </div>

                <div className="col-fluid fondo mx-auto row justify-content-center fixed-bottom barra-abajo">
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
        )
    }
}

export default Inventario
