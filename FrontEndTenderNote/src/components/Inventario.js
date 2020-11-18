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

class Inventario extends React.Component {
    render(){
        return (
            <div className="col-fluid">
                <div className="fondo col row-fluid">
                    <div className="text-center mb-3">
                        <h1 className="text-blanco">
                            Inventario
                        </h1>
                    </div>
                </div>
                <div className="px-5 pt-2">
                    <input type="text" id="full_name" className="form-control rounded-pill mb-3 btn-lg font-weight-bold" placeholder="Buscar" />
                </div>
                <br/>

                <div className="text-center pt-2">
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
                
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="float-right mb-4 mr-3 margen pb-5 ">
                    <Link to="/nuevoproducto">
                        <img src={agregar} className="img-fluid tamano-img-agregar" />
                    </Link>
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
        )
    }
}

export default Inventario
