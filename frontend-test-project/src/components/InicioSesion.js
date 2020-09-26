import React, { useState, useEffect } from 'react';
import './InicioSesion.css';
import history from '../services/history';

function urlencodeObject(data) {
    let params = new URLSearchParams();
    Object.keys(data).forEach(key => params.append(key, data[key]));
    const encoded = params.toString();
    // console.log(encoded);
    return encoded;
}
export const handleLogin = async data => {
    const { email, password } = data; //RETRIEVE
    const params = { password: password }; //REFORMAT
    if (email !== false)
        params.email = email
    else
        throw "Email and nickname are not false, bad request..."
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': "*",
        "mode": "no-cors"

    });
    let response = await fetch('https://cors-anywhere.herokuapp.com//signin', {
        headers: headers,
        method: "POST",
        body: urlencodeObject(params)
    }).catch(error => console.error("Error:", error));
    return await response.json();
};
function InicioSesion() {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [response, setResponse] = useState();
    useEffect(() => {
        if (!response) return;
        console.log(response)
        if (response.user) {
            console.log("navegar")
            history.push('/principal')
        }

    }, [response])
    return (
        <div className="h-100 my-4">
            <div className="row">
                {/* <BootstrapIcons icon={biChevronRight}/> */}

                <div className="col-md-10 d-flex flex-wrap align-middle p-4">
                    <h1 className="align-self-center text-black mx-auto my-2"><span class="Chevron left"></span>Iniciar sesión</h1>
                    <input type="text" id="username" className="form-control col-md-10 my-4" placeholder="Nombre*" onChange={(e) => setEmail(e.target.value)} />

                    <input type="text" id="password" className="form-control col-md-10 my-4" placeholder="Contraseña*" onChange={(e) => setPass(e.target.value)} />

                    <div>
                        *Todos los campos son obligatorios
                    </div>

                    <button className="btn btn-azul text-blanco m-2 btn-lg btn-block rounded-pill" onClick={
                        async e => {
                            let emailRegex = new RegExp(
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            )
                            const data = { email, password }


                            if (emailRegex.exec(email) === null) {
                                let tempResponse = {}
                                tempResponse.ok = false
                                tempResponse.statusText =
                                    'El correo no tiene un formato correcto'
                                setResponse(tempResponse)
                                return
                            }
                            const apiResponse = await handleLogin(data)
                            if (!apiResponse) {
                                alert('Error de autentificación', 'Algo ha salido mal...')
                            } else {
                                setResponse(apiResponse) // IT APPEARS TO BE THAT THIS IS OBSERVABLE, SO I GOT TO USE A UPDATE EFFECT IN A FAR AWAY F.. FUNCTION
                            }


                        }
                    }>Iniciar sesión</button>
                    <div ><a>¿Olvidaste tu contraseña?</a></div>
                    <div>
                        ¿No tienes cuenta? <a href="#">Regístrate</a>
</div>
                </div>
            </div>
        </div>
    );
}

export default InicioSesion;