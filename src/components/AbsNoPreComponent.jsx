import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AbsNoPreComponent() {
  const [AbsNoPreData, setAbsNoPreData] = useState([]);
  const [formData, setFormData] = useState({
    data_absnoprevista: '',
    hores_ausencia: '',
    motiu_abs: '',
    document_justificatiu: '',
    user: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/absnoprevistes/all')
      .then((response) => {
        setAbsNoPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/absnoprevistes/create/', formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          data_absnoprevista: '',
          hores_ausencia: '',
          motiu_abs: '',
          document_justificatiu: '',
          user: ''
        });
        setAbsNoPreData([...AbsNoPreData, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

const handleDelete = (id) => {
  axios.delete('http://localhost:5000/api/absnoprevistes/delete/'+id)
    .then((response) => {
      console.log(response.data);
      const novaLlista = AbsNoPreData.filter(item => item._id !== id);
      setAbsNoPreData(novaLlista);
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data absència no prevista:</label>
          <input
            type="date"
            name="data_absnoprevista"
            value={formData.data_absnoprevista}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Hores d'absència:</label>
          <input
            type="number"
            name="hores_ausencia"
            value={formData.hores_ausencia}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Motiu de l'absència:</label>
          <input
            type="text"
            name="motiu_abs"
            value={formData.motiu_abs}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Document justificatiu:</label>
          <input
            type="text"
            name="document_justificatiu"
            value={formData.document_justificatiu}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Usuari:</label>
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Absència</button>
      </form>

      {AbsNoPreData.map((item, index) => (
        <div key={index}>
          <p>id: {item._id}</p>
          <p>data abs: {item.data_absnoprevista}</p>
          <p>hores aus: {item.hores_ausencia}</p>
          <p>motiu: {item.motiu_abs}</p>
          <p>document: {item.document_justificatiu}</p>
          <p>user: {item.user}</p>
        <button onClick={() => handleDelete(item._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default AbsNoPreComponent;