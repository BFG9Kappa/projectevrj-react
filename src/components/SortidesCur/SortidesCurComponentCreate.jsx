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
      .post("http://localhost:5000/api/sortidescurriculars/create/", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
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

        <Form.Select
          name="hora_inici"
          aria-label="hora_inici"
          value={formData.hora_inici}
          onChange={handleInputChange}
        >
          <option>Hora de sortida</option>
          <optgroup label="Diurn">
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:30">12:30</option>
            <option value="13:30">13:30</option>
          </optgroup>
          <optgroup label="Nocturn">
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:30">18:30</option>
            <option value="19:30">19:30</option>
            <option value="20:30">20:30</option>
          </optgroup>
        </Form.Select>

        <Form.Select
          name="hora_arribada"
          aria-label="hora_arribada"
          value={formData.hora_arribada}
          onChange={handleInputChange}
        >
          <option>Hora d'arribada</option>
          <optgroup label="Diurn">
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:30">12:30</option>
            <option value="13:30">13:30</option>
          </optgroup>
          <optgroup label="Nocturn">
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:30">18:30</option>
            <option value="19:30">19:30</option>
            <option value="20:30">20:30</option>
          </optgroup>
        </Form.Select>

        <Form.Select
          name="estat"
          aria-label="estat"
          value={formData.estat}
          onChange={handleInputChange}
        >
          <option>Estat</option>
          <option value="Proposada">Proposada</option>
          <option value="Refusada">Refusada</option>
          <option value="Anul·lada">Anul·lada</option>
          <option value="Aprovada">Aprovada</option>
        </Form.Select>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}

export default SortidesCurComponentCreate;
