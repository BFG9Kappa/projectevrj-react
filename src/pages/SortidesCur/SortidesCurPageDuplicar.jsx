import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import SortidesCurComponentDuplicar from "../../components/SortidesCur/SortidesCurComponentDuplicar";

function SortidesCurPageDuplicar() {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Duplicar sortida curricular</h3>
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {validationErrors.map((error) => (
                <li key={error.msg}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <SortidesCurComponentDuplicar setValidationErrors={setValidationErrors} />
      </div>
    </>
  );
}


export default SortidesCurPageDuplicar;
