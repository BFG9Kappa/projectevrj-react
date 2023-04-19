import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from "axios";
  
function App() {

  // Llista absnoprevistes
  const [] = useState([]);
  // Error que s'ha produït
  const [error, setError] = useState(null);
  // Element nou o que s'actualitza
  const [llista,setLlistaNoAbs] = useState({
    _id:"",
    data_absnoprevista:"",
    hores_ausencia:"",
    motiu_abs: "",
    document_justificatiu:""
  });
  
  useEffect( () => {
    axios.get('http://localhost:5000/api/absnoprevistes/all')
      .then((response) => {
        setLlistaNoAbs(response.data);
        console.log(response.data)
      }).catch(error => {
        setError(error);
      });
  },[]);

  return (
    <div className="App">
      <NavBar />
      <h1>Yeeepa</h1>
      
    </div>
  );
}

export default App;
