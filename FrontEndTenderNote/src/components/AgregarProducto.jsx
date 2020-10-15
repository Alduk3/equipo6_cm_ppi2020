import React from 'react'
import "./styles/AgregarProducto.css"
import Producto from '../images/PChocoli.png'
import FlechaA from '../images/FlechaA.png'
import Chulito from '../images/ChuloV.png'
import { Link } from 'react-router-dom'


function AgregarProducto() {
    return (

        <div className="col-fluid fondo-p row-fluid">
            <div className="mx-auto d-flex fondo justify-content-center mb-3 d-flex justify-content-between">
                <Link to="/inventario"><img src={FlechaA} alt="" srcset="" className="img-fluid pl-2" /></Link>
                <h3 className="text-blanco">
                    Nuevo producto
                        </h3>
                <Link to="/inventario"><img src={Chulito} alt="" srcset="" className="img-fluid pr-2" /></Link>
            </div>
            <div className="mx-auto d-flex justify-content-center mb-3">
                <img src={Producto} alt="" srcset="" className="img-fluid" />
            </div>
            <div className="row-auto">
                <div className="row">
                    <div className="col-xs-4">
                        <input type="text" class="form-control input-lg input-position" placeholder="Nombre*"  required />
                    </div>
                    </div>
                </div>

                

                <div class="d-flex form-group">
                    <label class="col-sm-2 col-form-label">Cantidad</label>
                    <input class="input-border" type="text" placeholder=""  required />
                </div>
                <div className="d-flex form-group">
                    <label class="col-sm-2 col-form-label">Precio</label>
                    <input class="input-border" type="text" placeholder="$"  required/>
                </div>
                <textarea class="input-dimesiones" rows="3" placeholder="Descripción"  required></textarea>
            </div>
        
    )
}

export default AgregarProducto;