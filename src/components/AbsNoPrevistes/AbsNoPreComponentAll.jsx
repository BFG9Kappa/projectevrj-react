import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function AbsNoPreComponentAll() {
  const [AbsNoPreData, setAbsNoPreData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/absnoprevistes/all")
      .then((response) => {
        setAbsNoPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = "Implementar jaja"; // implementar

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/absnoprevistes/delete/" + id)
      .then((response) => {
        console.log(response.data);
        const novaLlista = AbsNoPreData.filter((item) => item._id !== id);
        setAbsNoPreData(novaLlista);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data absencia</th>
            <th>Hores absencia</th>
            <th>Motiu</th>
            <th>Justificant</th>
            <th>Professor</th>
            <th>Operacions</th>
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
                <Button variant="primary" onClick={() => handleUpdate(item._id)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(item._id)}>Esborrar</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AbsNoPreComponentAll;
