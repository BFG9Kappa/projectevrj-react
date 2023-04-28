import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginComponentAll = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const history = useHistory();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          const error = await response.json();
          setErrorMessage(error.message);
          return;
        }
  
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container">
      <header>{/* include('../partials/header') */}</header>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <h4>Benvingut/da</h4>
              <div className="col-12">
                <label>Correu electrònic</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label>Contrasenya</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12" style={{ textAlign: "center", paddingTop: "1em" }}>
                <button type="submit" className="btn btn-dark float-end">
                  Accedir
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                No tens compte? <a href="/auth/register">Enregistrat aquí</a>
              </p>
            </div>
          </div>
          {errorMessage && (
            <div className="alert alert-danger mt-4" role="alert">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
      <footer>{/* include('../partials/footer') */}</footer>
    </div>
  );
};

export default LoginComponentAll;
