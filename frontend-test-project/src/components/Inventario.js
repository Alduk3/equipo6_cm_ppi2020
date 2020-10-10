import React from 'react'
import './styles/Inventario.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
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
                <div>
                    <Link>
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
                        <Link>
                        <img src={ajuste} className="img-fluid tamano-img mx-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventario
