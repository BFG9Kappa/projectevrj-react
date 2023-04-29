import AbsPreComponentUpdate from "../../components/AbsPrevistes/AbsPreComponentUpdate";
import NavBar from "../../components/NavBar";
import React, { useState } from "react";


function AbsPrePageEdit() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar absència prevista</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <AbsPreComponentUpdate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default AbsPrePageEdit;
