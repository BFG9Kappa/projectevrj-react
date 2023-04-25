import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function SortidesCurComponent() {
  const [SortidaData, setSortidaData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sortidescurriculars/all")
      .then((response) => {
        setSortidaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = "Implementar jaja"; // implementar

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/sortidescurriculars/delete/" + id)
      .then((response) => {
        console.log(response.data);
        const novaLlista = SortidaData.filter((item) => item._id !== id);
        setSortidaData(novaLlista);
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
            {/*
            <th>ID</th>
            */}
            <th>Data sortida</th>
            <th>Lloc</th>
            <th>Ruta</th>
            <th>Objectiu</th>
            <th>Grups</th>
            <th>Professors</th>
            <th>Hora inici</th>
            <th>Hora arribada</th>
            <th>Estat</th>
            <th>Operacions</th>
          </tr>
        </thead>
        <tbody>
          {SortidaData.map((item, index) => (
            <tr key={index}>
              {/*
              <td>{item._id}</td>
              */}
              <td>{moment(item.data_sortida).format("DD/MM/YYYY")}</td>
              <td>{item.lloc}</td>
              <td>{item.ruta}</td>
              <td>{item.objectius}</td>
              <td>{item.grups}</td>
              <td>{item.professors}</td>
              <td>{item.hora_inici}</td>
              <td>{item.hora_arribada}</td>
              <td>{item.estat}</td>
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

export default SortidesCurComponent;