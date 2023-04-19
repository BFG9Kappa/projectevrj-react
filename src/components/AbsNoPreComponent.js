import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AbsNoPreComponent() {
  const [AbsNoPreData, setAbsNoPreData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/absnoprevistes/all')
      .then((response) => {
        setAbsNoPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {AbsNoPreData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data abs: {item.data_absnoprevista}</p>
          <p>hores aus: {item.hores_ausencia}</p>
          <p>motiu: {item.motiu_abs}</p>
          <p>document: {item.document_justificatiu}</p>
          <p>user: {item.user}</p>
        </div>
      ))}
    </div>
  );
}

export default AbsNoPreComponent;