import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './components/App';
import history from './services/history.js';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);