import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from './components/Routes';
import history from './services/history.js';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <Routes/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);