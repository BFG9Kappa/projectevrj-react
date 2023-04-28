import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function AbsPreComponentAll() {
  const [AbsPreData, setAbsPreData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/absprevistes/all")
      .then((response) => {
        setAbsPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const history = useHistory();

  // Per a guardar els valors dels paràmetres del registre
  const getItemValues = (id) => {
    const item = AbsPreData.find((item) => item._id === id);
    const { data_absprevista, motiu_abs, user } = item;
    return { data_absprevista, motiu_abs, user };
  };

  // Passem els valors dels paràmetres guardats amb la variable itemValues per recuperarlos desde el component update
  const handleUpdate = (id) => {
    const itemValues = getItemValues(id);
    history.push("/absprevistes/edit/"+ id, { itemValues });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/absprevistes/delete/" + id)
      .then((response) => {
        console.log(response.data);
        const novaLlista = AbsPreData.filter((item) => item._id !== id);
        setAbsPreData(novaLlista);
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
            <th>Data</th>
            <th>Motiu</th>
            <th>Professor</th>
            <th>Operacions</th>
          </tr>
        </thead>
        <tbody>
          {AbsPreData.map((item, index) => (
            <tr key={index}>
              {/*
              <td>{item._id}</td>
              */}
              <td>{moment(item.data_absprevista).format("DD/MM/YYYY")}</td>
              <td>{item.motiu_abs}</td>
              {/* <td>{item.user.fullname}</td> */}
              <td>{item.user}</td>
              <td>
                <Button variant="primary" onClick={() => handleUpdate(item._id)}>Editar</Button>{" "}
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

export default AbsPreComponentAll;
