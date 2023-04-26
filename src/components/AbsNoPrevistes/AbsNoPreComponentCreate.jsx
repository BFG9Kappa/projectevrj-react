import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AbsNoPreComponentCreate() {
  const [AbsNoPreData, setAbsNoPreData] = useState([]);
  const [formData, setFormData] = useState({
    data_absnoprevista: "",
    hores_ausencia: "",
    motiu_abs: "",
    document_justificatiu: "",
    user: "",
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
      .post("http://localhost:5000/api/absnoprevistes/create/", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          data_absnoprevista: "",
          hores_ausencia: "",
          motiu_abs: "",
          document_justificatiu: "",
          user: "",
        });
        setAbsNoPreData([...AbsNoPreData, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <InputGroup className="mb-2">
          <InputGroup.Text>Data absència</InputGroup.Text>
          <Form.Control
            type="date"
            name="data_absnoprevista"
            value={formData.data_absnoprevista}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Hores d'absència</InputGroup.Text>
          <Form.Control
            type="number"
            name="hores_ausencia"
            value={formData.hores_ausencia}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Motiu absència</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="motiu_abs"
            value={formData.motiu_abs}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Document justificatiu</InputGroup.Text>
          <Form.Control
            type="text"
            name="document_justificatiu"
            value={formData.document_justificatiu}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Professor</InputGroup.Text>
          <Form.Control
            type="text"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}

export default AbsNoPreComponentCreate;
