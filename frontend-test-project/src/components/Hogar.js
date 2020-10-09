import React from 'react'
import './styles/navBottom.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import usuario from '../images/usuario.png'
import { Link } from 'react-router-dom'

class Hogar extends React.Component {
    render(){
        return (
            <div className="col-fluid">
                <div className="fondo col row-fluid">
                    <div className="d-inline">
                        <h1 className="text-blanco d-inline">
                            TenderNote
                        </h1>
                    </div>
                    <div className="d-inline ml-5">
                        <Link>
                            <img src={usuario} className="tamano-img d-inline" />
                        </Link>
                    </div>
                </div>
                <div className="col-fluid fondo mx-auto row justify-content-center fixed-bottom">
                    <div className="d-inline-block p-2 px-4">
                        <Link>
                        <img src={hogar} className="img-fluid tamano-img mx-auto" />
                        </Link>
                    </div>
                    <div className="d-inline-block p-2 px-4 pl-5 pr-5">
                        <Link>
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

export default Hogar;