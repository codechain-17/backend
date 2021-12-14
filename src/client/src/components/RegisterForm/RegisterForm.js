import React, { useState } from "react";

import Axios from "axios";

const RegisterForm = () => {
  const [dataUserName, setDataUserName] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [dataLastName, setDataLastName] = useState([]);
  const [dataGender, setDataGender] = useState([]);
  const [dataPortfolio, setDataPortfolio] = useState([]);
  const [dataGithub, setDataGithub] = useState([]);
  const [dataLinkedin, setDataLinkedin] = useState([]);
  const [dataknowledge, setDataKnowledge] = useState([]);
  const [dataUserPass, setDataPass] = useState([]);

  const register = () => {   
    Axios({
      method: "POST",
      data: {
        username: dataUserName,
        name: dataName,
        lastname: dataLastName,
        github: dataGithub,
        linkedin: dataLinkedin,
        portfolio: dataPortfolio,
        knowledgeareas: dataknowledge,
        gender: dataGender,
        password: dataUserPass,
      },
      withCredentials: true,
      url: "/api/register",
    }).then((res) => {
      const data = res.data;
      const status = res.status;
      if (data === "User Already Exists") {
        window.location = "/failregister";
      } else if (status === 200 && data !== "User Already Exists") {
        window.location = "/signin";
      }
    });
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-1 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataName(e.target.value)}
                        />
                        <label className="form-label" for="name">
                          Nombre
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastname"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataLastName(e.target.value)}
                        />
                        <label className="form-label" for="lastname">
                          Apellido
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="url"
                          className="form-control form-control-lg"
                          id="portfolio"
                          onChange={(e) => setDataPortfolio(e.target.value)}
                        />
                        <label for="portfolio" className="form-label">
                          Portfolio
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Género: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="femenino"
                          checked
                          onChange={(e) => setDataGender(e.target.value)}
                        />
                        <label className="form-check-label" for="femaleGender">
                          Femenino
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="gender2"
                          value="masculino"
                          onChange={(e) => setDataGender(e.target.value)}
                        />
                        <label className="form-check-label" for="maleGender">
                          Masculino
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="gender3"
                          value="otro"
                          onChange={(e) => setDataGender(e.target.value)}
                        />
                        <label className="form-check-label" for="otherGender">
                          Otro
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="url"
                          id="github"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataGithub(e.target.value)}
                        />
                        <label className="form-label" for="github">
                          Github
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="url"
                          id="linkedin"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataLinkedin(e.target.value)}
                        />
                        <label className="form-label" for="linkedin">
                          Linkedin
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataUserName(e.target.value)}
                        />
                        <label className="form-label" for="email">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setDataPass(e.target.value)}
                        />
                        <label className="form-label" for="password">
                          Contraseña
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <select className="select form-control-lg" onChange={(e) => setDataKnowledge(e.target.value)}>
                        <option value="1" disabled>
                          Elije una opción
                        </option>
                        <option value="2">Programación</option>
                        <option value="3">Diseño / UX</option>
                        <option value="4">Desarrollo Mobile</option>
                        <option value="5">DevOps</option>
                        <option value="6">QA</option>
                      </select>
                      <label className="form-label select-label">
                        Elije una opción
                      </label>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <span
                      class="btn btn-primary btn-lg"
                      type="submit"
                      onClick={register}
                      value="Registrarse"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
