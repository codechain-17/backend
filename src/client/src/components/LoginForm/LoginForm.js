import React, { useState } from 'react';

import Axios from "axios";

const LoginForm = () => {
  const [dataUserName, setDataUserName] = useState([]);
  const [dataUserPass, setDataUserPass] = useState([]);

  const login = () => {
      Axios({
        method: "POST",
        data: {
          username: dataUserName,
          password: dataUserPass,
        },
        withCredentials: true,
        url: '/api/login',
      }).then((res) => {
          const data = res.data;
          const status = res.status;
          if(data === "No User Exists") {
              window.location = "/faillogin"
          } else if(status === 200 && data !== "No User Exists") {
              window.location = "/"
          }
      });
    };

    return (
<section className="vh-100" style={{backgroundColor: '#9A616D'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                alt="login form"
                className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                    <span className="h1 fw-bold mb-0">getonboard Junior</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Ingresa a tu cuenta</h5>

                  <div className="form-outline mb-4">
                    <input type="username" id="username" className="form-control form-control-lg" onChange={(e) => setDataUserName(e.target.value)} required />
                    <label className="form-label">Correo electrónico</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control form-control-lg" onChange={(e) => setDataUserPass(e.target.value)} required />
                    <label className="form-label">Contraseña</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button onClick={login} className="btn btn-dark btn-lg btn-block" type="button">Acceder</button>
                  </div>

                  <a className="small text-muted" href="#!">Olvidaste tu contraseña?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>No tienes una cuenta? <a href="#!" style={{color: '#393f81'}}>Registrate aquí</a></p>
                  <a href="#!" className="small text-muted">Terminos de uso. </a>
                  <a href="#!" className="small text-muted">Política de privacidad.</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default LoginForm
