import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

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

  const history = useHistory();

  // Per a guardar els valors dels paràmetres del registre
  const getItemValues = (id) => {
    const item = AbsNoPreData.find((item) => item._id === id);
    const { hores_ausencia, motiu_abs, document_justificatiu, user } = item;
    return { hores_ausencia, motiu_abs, document_justificatiu, user };
  };

  // Passem els valors dels paràmetres guardats amb la variable itemValues per recuperarlos desde el component update
  const handleUpdate = (id) => {
    const itemValues = getItemValues(id);
    history.push("/absnoprevistes/edit/"+ id, { itemValues });
  };

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
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/*
            <th>ID</th>
            */}
            <th>Data absència</th>
            <th>Hora inici absència</th>
            <th>Hora fi absència</th>
            <th>Motiu</th>
            <th>Justificant</th>
            <th>Professor</th>
            <th>Operacions</th>
          </tr>
        </thead>
        <tbody>
          {AbsNoPreData.map((item) => (
            <tr key={item._id}>
              {/*
              <td>{item._id}</td>
              */}
              <td>{moment(item.data_absnoprevista).format("DD/MM/YYYY")}</td>
              <td>{item.hora_inici_absnoprevista}</td>
              <td>{item.hora_final_absnoprevista}</td>
              <td>{item.motiu_abs}</td>
              <td>{item.document_justificatiu}</td>
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

export default AbsNoPreComponentAll;
