import NavBar from "../../components/NavBar";
import SortidesCurComponentCreate from "../../components/SortidesCur/SortidesCurComponentCreate";
import React, { useState } from "react";

function SortidesCurPageNew() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova sortida curricular</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <SortidesCurComponentCreate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}

export default SortidesCurPageNew;
