import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function BaixesMedComponentCreate({ setValidationErrors }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    data_inicial_baixa: "",
    data_prevista_alta: "",
    comentari: "",
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
      .post("http://localhost:5000/api/baixesmediques/create/", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          data_inicial_baixa: "",
          data_prevista_alta: "",
          comentari: "",
          user: "",
        });
        setValidationErrors([]);
        //setAbsNoPreData([...setAbsNoPreData, response.data]);
        history.push("/baixesmediques");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const validationErrors = error.response.data.errors;
          setValidationErrors(validationErrors);
        }
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-2">
          <InputGroup.Text>Data baixa</InputGroup.Text>
          <Form.Control
            type="date"
            name="data_inicial_baixa"
            value={formData.data_inicial_baixa}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Data alta</InputGroup.Text>
          <Form.Control
            type="date"
            name="data_prevista_alta"
            value={formData.data_prevista_alta}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Comentari</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="comentari"
            value={formData.comentari}
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

export default BaixesMedComponentCreate;
