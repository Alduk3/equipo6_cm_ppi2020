import React from 'react'
import './styles/Hogar.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import usuario from '../images/abuelo42.png'
import borrar1 from '../images/borrar1.png'
import borrar2 from '../images/borrar2.png'
import borrar3 from '../images/borrar3.png'
import { Link } from 'react-router-dom'
import Product from './Productos';


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

class Hogar extends React.Component {
    render(){
        return (
            <div className="col-fluid">
                <div className="fondo col row-fluid barra-arriba fixed-top">
                    <div className="d-inline justify-content-start">
                        <h1 className="text-blanco d-inline">
                            TenderNote
                        </h1>
                    </div>
                    <div className="d-inline ml-5 pl-4 justify-content-end ">
                        <Link to="/editarcuenta">
                            <img src={usuario} className="tamano-img d-inline pb-2 user-img" />
                        </Link>
                    </div>
                </div>

                <div className="col-fluid pt-5 ">
                    <div className="mb-2">
                        <h5 className="p-3 font-weight-bold tamano-texto">
                            <u>Últimos productos agregadoso</u>
                        </h5>
                        
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
                      </div>
                     {/*   <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div>   
                    </div>*/}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    

                    <div className="mt-5">
                        <h5 className="p-3 font-weight-bold tamano-texto">
                            <u>Se están acabando</u>
                        </h5>

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
                  {/*      <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div> 
                        <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow mb-3"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow mb-3"/>
                        </div> */}
                        
                    </div>
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

export default Hogar;