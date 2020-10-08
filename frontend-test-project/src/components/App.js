import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './InicioSesion';
import Register from './Registro';
import Inicio from './Inicio';
import React from 'react';

function App(){

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/>
                <Route component={Inicio} />
            </Switch>
        </Router>
    );
}

export default App;