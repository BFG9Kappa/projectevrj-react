import './App.css';
<<<<<<< HEAD
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import axios from "axios";
=======
import NavBar from './components/NavBar';
>>>>>>> 609e008 (upd structure)

  
function App() {

  // Llista absnoprevistes
  const [llista,setLlistaNoAbs] = useState([]);
  // Error que s'ha produït
  const [error, setError] = useState(null);
  // Element nou o que s'actualitza 
  const [item, setItem] = useState({data_absnoprevista:"", _id:"", hores_ausencia:"", motiu_abs: "wate wate", document_justificatiu:""});

  
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
