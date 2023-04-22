import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AbsNoPreComponentAll() {
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

const handleDelete = (id) => {
  axios.delete('http://localhost:5000/api/absnoprevistes/delete/'+id)
    .then((response) => {
      console.log(response.data);
      const novaLlista = AbsNoPreData.filter(item => item._id !== id);
      setAbsNoPreData(novaLlista);
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha de la ausencia</th>
            <th>Horas de ausencia</th>
            <th>Motivo de la ausencia</th>
            <th>Documento justificativo</th>
            <th>Usuario</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {AbsNoPreData.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.data_absnoprevista}</td>
              <td>{item.hores_ausencia}</td>
              <td>{item.motiu_abs}</td>
              <td>{item.document_justificatiu}</td>
              <td>{item.user}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  
  );
}

export default AbsNoPreComponentAll;