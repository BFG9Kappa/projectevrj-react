import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import SortidesCurComponentUpdate from "../../components/SortidesCur/SortidesCurComponentUpdate";

function SortidesCurPageEdit() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar sortida curricular</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <SortidesCurComponentUpdate setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}


export default SortidesCurPageEdit;
