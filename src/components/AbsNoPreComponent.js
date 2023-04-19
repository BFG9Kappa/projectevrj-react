import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AbsNoPreComponent() {
  const [absData, setAbsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/absnoprevistes/all')
      .then((response) => {
        setAbsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {absData.map((item, index) => (
        <div key={index}>
          <p>{item._id}</p>
          <p>{item.data_absnoprevista}</p>
          <p>{item.hores_ausencia}</p>
          <p>{item.motiu_abs}</p>
          <p>{item.document_justificatiu}</p>
        </div>
      ))}
    </div>
  );
}

export default AbsNoPreComponent;