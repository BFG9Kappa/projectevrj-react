import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SortidesCurComponent() {
  const [SortidaData, setSortidaData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/sortidescurriculars/all')
      .then((response) => {
        setSortidaData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {SortidaData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data sortida: {item.data_sortida}</p>
          <p>email: {item.email}</p>
          <p>lloc: {item.lloc}</p>
          <p>ruta: {item.ruta}</p>
          <p>objectius: {item.objectius}</p>
          <p>grups: {item.grups}</p>
          <p>professors: {item.professors}</p>
          <p>hora inici: {item.hora_inici}</p>
          <p>hora arribada: {item.hora_arribada}</p>
          <p>estat: {item.estat}</p>
        </div>
      ))}
    </div>
  );
}

export default SortidesCurComponent;