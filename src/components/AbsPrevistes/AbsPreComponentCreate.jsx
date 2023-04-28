import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AbsPreComponentCreate() {
  
  const [AbsPrevistaData, setAbsPrevistaData] = useState([]);
  const [formData, setFormData] = useState({
    data_absprevista: "",
    motiu_abs: "",
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
      .post("http://localhost:5000/api/absprevistes/create/", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          data_absprevista: "",
          motiu_abs: "",
          user: "",
        });
        setAbsPrevistaData([...AbsPrevistaData, response.data]);
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
            name="data_absprevista"
            value={formData.data_absprevista}
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

export default AbsPreComponentCreate;