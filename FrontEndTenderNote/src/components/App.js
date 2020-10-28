import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './InicioSesion';
import Register from './Registro';
import Inicio from './Inicio';
import React from 'react';
import Hogar from './Hogar'
import Inventario from './Inventario'
import Ajustes from './Ajustes'
import NuevoProducto from './AgregarProducto'
import Cuenta from './Cuenta'
import MiCuenta from './EditarCuenta'
import EditarProducto from './EditarProducto'
import CrearCuenta from "./CrearCuenta";

function App(){

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/>
                <Route path="/CrearCuenta"  component={CrearCuenta}/>
                <Route path="/hogar" component={Hogar} />
                <Route path="/inventario" component={Inventario} />
                <Route path="/nuevoproducto" component={NuevoProducto}/>
                <Route path="/ajustes" component={Ajustes}/>
                <Route path="/cuenta" component={Cuenta}/>
                <Route path="/editarcuenta" component={MiCuenta}/>
                <Route path="/editarproducto" component={EditarProducto}/>
                <Route component={Inicio} />
            </Switch>
        </Router>
    );
}

export default App;