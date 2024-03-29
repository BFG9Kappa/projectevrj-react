import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import AbsNoPreComponentCreate from "../../components/AbsNoPrevistes/AbsNoPreComponentCreate";

function AbsNoPrePageNew() {
  const [validationErrors, setValidationErrors] = useState([]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova absència no prevista</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <AbsNoPreComponentCreate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default AbsNoPrePageNew;
