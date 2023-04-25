import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function SortidesCurComponentCreate() {
  const [sortidaData, setSortidaData] = useState([]);
  const [formData, setFormData] = useState({
    data_sortida: "",
    email: "",
    lloc: "",
    ruta: "",
    objectius: "",
    grups: "",
    professors: "",
    hora_inici: "",
    hora_arribada: "",
    estat: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/baixesmediques/create/", formData)
      .then((response) => {
        console.log(response.data);
        setSortidaData({
          data_sortida: "",
          email: "",
          lloc: "",
          ruta: "",
          objectius: "",
          grups: "",
          professors: "",
          hora_inici: "",
          hora_arribada: "",
          estat: "",
        });
        setSortidaData([...sortidaData, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-2">
          <InputGroup.Text>Data sortida</InputGroup.Text>
          <Form.Control
            type="date"
            name="data_sortida"
            value={formData.data_sortida}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Lloc</InputGroup.Text>
          <Form.Control
            type="text"
            name="lloc"
            value={formData.lloc}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Ruta</InputGroup.Text>
          <Form.Control
            type="text"
            name="ruta"
            value={formData.ruta}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Objectius</InputGroup.Text>
          <Form.Control
            type="text"
            name="objectius"
            value={formData.objectius}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Grups</InputGroup.Text>
          <Form.Control
            type="text"
            name="grups"
            value={formData.grups}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Professors</InputGroup.Text>
          <Form.Control
            type="text"
            name="professors"
            value={formData.professors}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}

export default SortidesCurComponentCreate;
