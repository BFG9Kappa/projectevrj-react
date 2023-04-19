import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AbsPreComponent() {
  const [absData, setAbsPreData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/absprevistes/all')
      .then((response) => {
        setAbsPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {absData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data abs: {item.data_absprevista}</p>
          <p>motiu: {item.motiu_abs}</p>
          <p>document: {item.document_justificatiu}</p>
        </div>
      ))}
    </div>
  );
}

export default AbsPreComponent;