import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import AbsPreComponentCreate from "../../components/AbsPrevistes/AbsPreComponentCreate";

function AbsPrePageNew() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova absència prevista</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <AbsPreComponentCreate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default AbsPrePageNew;
