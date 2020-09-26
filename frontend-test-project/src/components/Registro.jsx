import React from 'react';
import RegistroLogo from '../images/RegistroLogo.png'
function Registro() {
    return (
        <div class="h-100 my-4">
            <div class="row mt-4">
                <h1 class="align-self-center mx-auto my-2">¡Regístrate para continuar!</h1>
                <div class="col-md-6 mx-auto d-flex justify-content-center mt-4">
                    <img src={RegistroLogo} alt="" srcset="" class="img-fluid w-50"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 d-flex flex-wrap align-middle p-4">
                    <input type="text" id="full_name" class="form-control" placeholder="Nombre*" />
                    <input type="text" id="job" class="form-control" placeholder="Correo*" />
                    <input type="text" id="celphone" class="form-control" placeholder="Contraseña*" />

                    <button class="btn btn-azul text-blanco align-self-end btn-md ml-auto my-4">Regístrate</button>
                </div>
            </div>
        </div>
    );
}

export default Registro;