import React from 'react'
import "./styles/AgregarProducto.css"
import Producto from '../images/PChocoli.png'
import FlechaA from '../images/FlechaA.png'
import Chulito from '../images/ChuloV.png'


function AgregarProducto() {
    return (

        <div className="col-fluid fondo-p row-fluid">
            <div className="mx-auto d-flex fondo justify-content-center mb-3">
            <img src={FlechaA} alt="" srcset="" className="img-fluid align-left"/>
            <p className="letra">Nuevo producto</p>
            <img src={Chulito} alt="" srcset="" className="img-fluid align-right"/>
            </div>
            <div className="mx-auto d-flex justify-content-center mb-3">
                <img src={Producto} alt="" srcset="" className="img-fluid" />
            </div>
            <div className="row-auto">
                <div className="col">
                    <input type="text" class="form-control mx-sm-3" placeholder="Nombre*" />
                    <small className="text align-right" id= "passwordHelpBlock" class="form-text text-muted">
                        *Todos los campos son obligatorios
                    </small>
                </div>

                <div class="d-flex form-group">
                    <label class="col-sm-2 col-form-label">Cantidad</label>
                    <input type="text" class="form-control-sm-0" placeholder="" />
                </div>
                <div className="d-flex form-group">
                    <label class="col-sm-2 col-form-label">Precio</label>
                    <input type="text" class="form-control-sm-0" placeholder="$ "  />
                </div>
                <textarea class="form-control" rows="3" placeholder="Descripción"></textarea>
            </div>
        </div>

    )
}

export default AgregarProducto;