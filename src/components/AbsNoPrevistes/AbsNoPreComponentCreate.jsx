import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function AbsNoPreComponentCreate({ setValidationErrors }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    data_absnoprevista: "",
    hora_inici_absnoprevista: "",
    hora_final_absnoprevista: "",
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

  const handleSelectChange = (event) => {
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
          hora_inici_absnoprevista: "",
          hora_final_absnoprevista: "",
          motiu_abs: "",
          document_justificatiu: "",
          user: "",
        });
        setValidationErrors([]);
        //setAbsNoPreData([...setAbsNoPreData, response.data]);
        history.push("/absnoprevistes");
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
            name="data_absnoprevista"
            value={formData.data_absnoprevista}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Form.Select
          name="hora_inici_absnoprevista"
          aria-label="hora_inici_absnoprevista"
          value={formData.hora_inici_absnoprevista}
          onChange={handleSelectChange}
        >
          <option>Hora inici absència</option>
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
          name="hora_final_absnoprevista"
          aria-label="hora_final_absnoprevista"
          value={formData.hora_final_absnoprevista}
          onChange={handleSelectChange}
        >
          <option>Hora final absència</option>
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

        <InputGroup className="mb-2">
          <InputGroup.Text>Motiu</InputGroup.Text>
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
