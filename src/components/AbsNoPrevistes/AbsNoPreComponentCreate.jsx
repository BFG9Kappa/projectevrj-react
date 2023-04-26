import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AbsNoPreComponentCreate({ setValidationErrors }) {
  const [AbsNoPreData, setAbsNoPreData] = useState([]);
  const [formData, setFormData] = useState({
    data_absnoprevista: '',
    hora_inici_absnoprevista: '',
    hora_final_absnoprevista: '',
    motiu_abs: '',
    document_justificatiu: '',
    user: ''
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
          data_absnoprevista: '',
          hora_inici_absnoprevista: '',
          hora_final_absnoprevista: '',
          motiu_abs: '',
          document_justificatiu: '',
          user: ''
        });
        setAbsNoPreData([...AbsNoPreData, response.data]);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
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
        </div>
        <div>
          <label>Hora inici absència:</label>
          <input
            type="select"
            name="hora_inici_absnoprevista"
            value={formData.hora_inici_absnoprevista}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Hora final absència:</label>
          <select id="hora_inici_absnoprevista" name="hora_inici_absnoprevista">
          <optgroup label="Diurn">
            {['08:00', '09:00', '10:00', '11:00', '11:30', '12:30', '13:30', '14:30'].map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </optgroup>
          <optgroup label="Nocturn">
            {['15:00', '16:00', '17:00', '18:30', '19:30', '20:30'].map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </optgroup>
        </select>
        </div>
        <div>
          <label>Motiu de l'absència:</label>
          <select id="hora_inici_absnoprevista" name="hora_inici_absnoprevista">
          <optgroup label="Diurn">
            {['08:00', '09:00', '10:00', '11:00', '11:30', '12:30', '13:30', '14:30'].map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </optgroup>
          <optgroup label="Nocturn">
            {['15:00', '16:00', '17:00', '18:30', '19:30', '20:30'].map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </optgroup>
        </select>
        </div>
        <div>
          <label>Document justificatiu:</label>
          <input
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
