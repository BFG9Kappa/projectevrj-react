import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import BaixesMedComponentUpdate from "../../components/BaixesMed/BaixesMedComponentUpdate"

function BaixesMedPageEdit() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar baixa mèdica</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <BaixesMedComponentUpdate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default BaixesMedPageEdit;
