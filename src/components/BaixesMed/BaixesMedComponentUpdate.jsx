import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import moment from "moment";

function BaixesMedComponentUpdate({ setValidationErrors }) {
  const history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState({
    data_inicial_baixa: "",
    data_prevista_alta: "",
    comentari: "",
    user: "",
  });

  const location = useLocation();
  const { itemValues } = location.state || {};

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/baixesmediques/update/" + id)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
      .put("http://localhost:5000/api/baixesmediques/update/"+ id, item)
      .then((response) => {
        console.log(response.data);
        setItem({
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
            value={moment(item.data_inicial_baixa).format("YYYY-MM-DD")}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Data alta</InputGroup.Text>
          <Form.Control
            type="date"
            name="data_prevista_alta"
            value={moment(item.data_prevista_alta).format("YYYY-MM-DD")}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Comentari</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="comentari"
            value={item.comentari}
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

export default BaixesMedComponentUpdate;
