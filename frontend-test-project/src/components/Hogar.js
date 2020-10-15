import React from 'react'
import './styles/Hogar.css'
import ajuste from '../images/ajustes.png'
import hogar from '../images/hogar.png'
import lista from '../images/lista.png'
import usuario from '../images/usuario.png'
import borrar1 from '../images/borrar1.png'
import borrar2 from '../images/borrar2.png'
import borrar3 from '../images/borrar3.png'
import { Link } from 'react-router-dom'

class Hogar extends React.Component {
    render(){
        return (
            <div className="col-fluid">
                <div className="fondo col row-fluid">
                    <div className="d-inline justify-content-start">
                        <h1 className="text-blanco d-inline">
                            TenderNote
                        </h1>
                    </div>
                    <div className="d-inline ml-5 pl-4 justify-content-end">
                        <Link to="/editarcuenta">
                            <img src={usuario} className="tamano-img d-inline pb-2 user-img" />
                        </Link>
                    </div>
                </div>

                <div className="col-fluid pt-5">
                    <div className="mb-2">
                        <h5 className="p-3 font-weight-bold">
                            <u>Se están acabando</u>
                        </h5>
                        <div className="d-inline px-3 py-3">
                            <img src={borrar1} className="border rounded shadow"/>
                        </div>
                        <div className="d-inline px-3 py-3">
                            <img src={borrar2} className="border rounded shadow"/>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h5 className="p-3 font-weight-bold">
                            <u>Últimos productos agregados</u>
                        </h5>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar3} className="border rounded shadow"/>
                        </div>
                        <div className="d-inline px-3 py-4">
                            <img src={borrar1} className="border rounded shadow"/>
                        </div>
                    </div>
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

export default Hogar;