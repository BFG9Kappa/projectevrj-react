import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function AbsPreComponent() {
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

  const handleUpdate = "Implementar jaja"; // implementar

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
      {AbsPreData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data abs: {item.data_absprevista}</p>
          <p>motiu: {item.motiu_abs}</p>
          <p>document: {item.document_justificatiu}</p>
          <p>user: {item.user}</p>
        </div>
      ))}
    </>
  );
}

export default AbsPreComponent;
