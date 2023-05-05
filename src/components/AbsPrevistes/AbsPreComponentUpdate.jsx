import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import moment from "moment";

function AbsPreComponentUpdate({ setValidationErrors }) {
  const history = useHistory();
  const { id } = useParams(); // Recupera el valor de id pasado como parte de la ruta
  const [item, setItem] = useState({
    data_absprevista: "",
    motiu_abs: "",
    user: "",
  });
  // Variables para rescatar los valores del all
  const location = useLocation();
  const { itemValues } = location.state || {};

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/absprevistes/update/" + id)
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
      .put("http://localhost:5000/api/absprevistes/update/"+ id, item)
      .then((response) => {
        console.log(response.data);
        setItem({
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
            value={moment(item.data_absprevista).format("YYYY-MM-DD")}
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

export default AbsPreComponentUpdate;
