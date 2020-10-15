import React, { useState } from 'react';
import './styles/InicioSesion.css';
import Title from '../components/Title';
import Input from '../components/Input';
import {Link} from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === 'usuario') {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 5) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value)
        setHasError(false);
      }

    }
  };

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'Juan Pablo' && param.password === '200308') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('accont', account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password }
    if (account) {
      ifMatch(account)
    }
  }

  return (
    <div className='login-container text-primary' >
      
        <div className='home-container'>
         
        </div>
        
        <div className='login-conten'>
          <h1 className="inicio-sesion">Iniciar sesión</h1>
          <br />
          <br />

          {hasError &&
            <div class="alert alert-success"> Su contraseña o usuario son incorrectos</div>
          }
          <Input
            attribute={{
              id: 'usuario',
              name: 'usuario',
              type: 'text',
              placeholder: 'Nombre*'
            }}
            handleChange={handleChange}
          />
          <Input
            attribute={{
              id: 'contraseña',
              name: 'contraseña',
              type: 'password',
              placeholder: 'Contraseña*'
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          {passwordError &&
            <div class="alert alert-success">contraseña invalida</div>
          }

          <div className="text-black">
            *Todos los campos son obligatorios
             </div>
             
          <div className='submit-button-container'>
            <button onClick={handleSubmit} className='submit-button'>
              
              <Link to='/hogar'><a className='submit-button' href="#" > Iniciar sesión </a></Link>
           </button>
          </div>
          
          <div className='text-white'><a>¿Olvidaste tu contraseña?</a></div>
          <div className='text-white'>
            ¿No tienes cuenta?<Link to='/register'> <a className='text-white' href="#">Regístrate</a>
          </Link></div>
        </div>
      
    </div>
  )
};

export default Login;