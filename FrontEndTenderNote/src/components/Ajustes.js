import React from 'react'
import './styles/Ajustes.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import { Link } from 'react-router-dom'

class Ajustes extends React.Component {
    render(){
        return (
            <div className="col-fluid row-fluid">
                <div className="fondo col row-fluid barra-arriba fixed-top">
                    <div className="text-center mb-3">
                        <h1 className="text-blanco">
                            Ajustes
                        </h1>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="col d-flex align-items-center mt-5">
                    <div className="col-fluid d-block justify-content-center pl-3">
                        <button className="btn btn-lg mt-3 btn-block btn-border border border-dark text-left botones btn-light color-blanquito">
                            <Link to="/editarcuenta" className="font-weight-bold text-black pl-2">Mi cuenta</Link>
                        </button>
                        <button className="btn btn-lg mt-3 btn-block btn-border border border-dark text-left botones btn-light color-blanquito">
                            <Link to="#" className="font-weight-bold text-black pl-2">Notificaciones</Link>
                        </button>
                        <button className="btn btn-lg mt-3 btn-block btn-border border border-dark text-left botones btn-light color-blanquito">
                            <a href="http://127.0.0.1:5500/SobreNosotros.html" target="_blank" className="font-weight-bold text-black pl-2">Sobre nosotros</a>
                        </button>
                        <button className="btn btn-lg mt-3 btn-block btn-border border border-dark text-left botones btn-light color-blanquito">
                            <Link to="#" className="font-weight-bold text-black pl-2">Política y privacidad</Link>
                        </button>
                        <button className="btn btn-lg mt-3 btn-block btn-border border border-dark text-left botones btn-light color-blanquito">
                            <Link to="/" className="font-weight-bold text-black pl-2">Cerrar sesión</Link>
                        </button>
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

export default Ajustes