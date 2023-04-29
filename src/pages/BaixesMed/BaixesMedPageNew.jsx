import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import BaixesMedComponentCreate from "../../components/BaixesMed/BaixesMedComponentCreate";

function BaixesMedPageNew() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova baixa mèdica</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <BaixesMedComponentCreate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default BaixesMedPageNew;
