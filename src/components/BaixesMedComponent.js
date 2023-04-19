import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BaixesMedComponent() {
  const [baixaData, setBaixaData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/baixesmediques/all')
      .then((response) => {
        setBaixaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {baixaData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data baixa: {item.data_inicial_baixa}</p>
          <p>data alta: {item.data_prevista_alta}</p>
          <p>comentari: {item.comentari}</p>
          <p>user: {item.user}</p>
        </div>
      ))}
    </div>
  );
}

export default BaixesMedComponent;