import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function SortidesCurComponent() {
  const [SortidaData, setSortidaData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sortidescurriculars/all",  { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} })
      .then((response) => {
        setSortidaData(response.data);
      })
      .catch((error) => {
        setErrorMessage(JSON.parse(error.request.response).error);
      });
  }, []);

  const history = useHistory();

  const getItemValues = (id) => {
    const item = SortidaData.find((item) => item._id === id);
    const { data_sortida, lloc, ruta, objectius, grups, professors, hora_inici, hora_arribada, estat } = item;
    return { data_sortida, lloc, ruta, objectius, grups, professors, hora_inici, hora_arribada, estat };
  };

  const handleUpdate = (id) => {
    const itemValues = getItemValues(id);
    history.push("/sortidescurriculars/edit/"+ id, { itemValues });
  };

  const handleDuplicar = (id) => {
    const itemValues = getItemValues(id);
    history.push("/sortidescurriculars/duplicar/"+ id, { itemValues });
  };

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
      {!errorMessage && <Table striped bordered hover>
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
              {/* <td>{item.professors.fullname}</td> */}
              <td>{item.professors}</td>
              <td>{item.hora_inici}</td>
              <td>{item.hora_arribada}</td>
              <td>{item.estat}</td>
              <td>
              <Button variant="primary" onClick={() => handleUpdate(item._id)}>Editar</Button>{" "}
              <Button variant="danger" onClick={() => handleDelete(item._id)}>Esborrar</Button>{" "}
              <Button variant="danger" onClick={() => handleDuplicar(item._id)}>Duplicar</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>}
      {errorMessage && (
        <div className="alert alert-danger mt-4" role="alert">
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
}

export default SortidesCurComponent;