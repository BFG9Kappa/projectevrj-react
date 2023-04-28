import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function AbsPreComponentCreate({ setValidationErrors }) {
  const history = useHistory();
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
        setValidationErrors([]);
        //setAbsNoPreData([...setAbsNoPreData, response.data]);
        history.push("/absprevistes");
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