import './App.css';
<<<<<<< HEAD
=======
import NavBar from './components/NavBar';
>>>>>>> 609e008 (upd structure)

import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from "axios";

  
function App() {
/* 
  // Llista absnoprevistes
  const [] = useState([]);
  // Error que s'ha produït
  const [error, setError] = useState(null);
<<<<<<< HEAD
  // Element nou o que s'actualitza 
  const [item, setItem] = useState({data_absnoprevista:"", _id:"", hores_ausencia:"", motiu_abs: "wate wate", document_justificatiu:""});

 
=======
  // Element nou o que s'actualitza
  const [llista,setLlistaNoAbs] = useState({
    _id:"",
    data_absnoprevista:"",
    hores_ausencia:"",
    motiu_abs: "",
    document_justificatiu:""
  });
  
>>>>>>> 8312542 (cosa)
  useEffect( () => {
    axios.get('http://localhost:5000/api/absnoprevistes/all')
      .then((response) => {
<<<<<<< HEAD
          setLlistaNoAbs(response.data);
          console.log(response.data)
          }).catch(error => {
            setError(error);
          });
},[]);
*/
const [absnoprevistas, setAbsnoprevistas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {     
      const result = await axios.get('http://localhost:5000/api/absnoprevistes/all');
      setAbsnoprevistas(result.data)
    } catch (error) {
      console.log(error);
      // Aquí puedes agregar un mensaje de error en la página o tomar otras acciones
    }
  };
  fetchData();
}, []);
=======
        setLlistaNoAbs(response.data);
        console.log(response.data)
      }).catch(error => {
        setError(error);
      });
  },[]);
>>>>>>> 8312542 (cosa)

  return (
    <div className="App">
      <NavBar />
      {absnoprevistas.map((absnoprevista) => (
      <div key={absnoprevista._id}>
        <p>Data Absnoprevista: {absnoprevista.data_absnoprevista}</p>
        <p>ID: {absnoprevista._id}</p>
        <p>Hores d'absència: {absnoprevista.hores_ausencia}</p>
        <p>Motiu d'absència: {absnoprevista.motiu_abs}</p>
        <p>Document justificatiu: {absnoprevista.document_justificatiu}</p>
      </div>
    ))}
    </div>
  );
}

export default App;
