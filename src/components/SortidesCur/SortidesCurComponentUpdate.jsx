import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function SortidesCurComponentUpdate() {
  const history = useHistory();
  const { id } = useParams();

  const [item, setItem] = useState({
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

  const location = useLocation();
  const { itemValues } = location.state || {};

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sortidescurriculars/update/" + id)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

    // Recuperamos los valores del registro que hemos cogido
    useEffect(() => {
      if (itemValues) {
        setItem(itemValues);
      }
    }, [itemValues]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setItem({
        ...item,
        [name]: value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .put("http://localhost:5000/api/sortidescurriculars/update/" + id, item)
        .then((response) => {
          console.log(response.data);
          history.push("/sortidescurriculars");
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
            value={item.data_sortida}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            value={item.email}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Lloc</InputGroup.Text>
          <Form.Control
            type="text"
            name="lloc"
            value={item.lloc}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Ruta</InputGroup.Text>
          <Form.Control
            type="text"
            name="ruta"
            value={item.ruta}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Objectius</InputGroup.Text>
          <Form.Control
            type="text"
            name="objectius"
            value={item.objectius}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Grups</InputGroup.Text>
          <Form.Control
            type="text"
            name="grups"
            value={item.grups}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Professors</InputGroup.Text>
          <Form.Control
            type="text"
            name="professors"
            value={item.professors}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Form.Select
          name="hora_inici"
          aria-label="hora_inici"
          value={item.hora_inici}
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
          value={item.hora_arribada}
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
          value={item.estat}
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

export default SortidesCurComponentUpdate;