import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AbsNoPreComponentUpdate() {
  const history = useHistory();
  const { id } = useParams(); // Recupera el valor de id pasado como parte de la ruta

  const [item, setItem] = useState({
    data_absnoprevista: "",
    hores_ausencia: "",
    motiu_abs: "",
    document_justificatiu: "",
    user: "",
  });
  // Variables para rescatar los valores del all
  const location = useLocation();
  const { itemValues } = location.state || {};

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/absnoprevistes/update/" + id)
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
      .put("http://localhost:5000/api/absnoprevistes/update/" + id, item)
      .then((response) => {
        console.log(response.data);
        history.push("/absnoprevistes");
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
            value={item.data_absnoprevista}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Hores d'absència</InputGroup.Text>
          <Form.Control
            type="number"
            name="hores_ausencia"
            value={item.hores_ausencia}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Motiu absència</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="motiu_abs"
            value={item.motiu_abs}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Document justificatiu</InputGroup.Text>
          <Form.Control
            type="text"
            name="document_justificatiu"
            value={item.document_justificatiu}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Professor</InputGroup.Text>
          <Form.Control
            type="text"
            name="user"
            value={item.user}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Button type="submit">Actualitzar</Button>
      </Form>
    </>
  );
}

export default AbsNoPreComponentUpdate;
