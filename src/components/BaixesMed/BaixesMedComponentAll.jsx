import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function BaixesMedComponent() {
  const [baixaData, setBaixaData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/baixesmediques/all")
      .then((response) => {
        setBaixaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = "Implementar jaja"; // implementar

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/baixesmediques/delete/" + id)
      .then((response) => {
        console.log(response.data);
        const novaLlista = baixaData.filter((item) => item._id !== id);
        setBaixaData(novaLlista);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data baixa</th>
            <th>Data alta</th>
            <th>Comentari</th>
            <th>Professor</th>
            <th>Operacions</th>
          </tr>
        </thead>
        <tbody>
          {baixaData.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{moment(item.data_inicial_baixa).format("DD/MM/YYYY")}</td>
              <td>{moment(item.data_prevista_alta).format("DD/MM/YYYY")}</td>
              <td>{item.comentari}</td>
              <td>{item.user}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleUpdate(item._id)}
                >
                  Editar
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  Esborrar
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default BaixesMedComponent;
