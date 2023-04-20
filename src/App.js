import './App.css';
//import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AbsNoPreComponent from './components/AbsNoPreComponent';
import AbsPreComponent from './components/AbsPreComponent';
import BaixesMedComponent from './components/BaixesMedComponent';
import SortidesCurComponent from './components/SortidesCurComponent';
//import AbsNoPrePage from './pages/AbsNoPrePage';

document.title = "Projecte M12";

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h3>Abs no previstes tmp</h3>
        <AbsNoPreComponent />
        <h3>Abs previstes tmp</h3>
        <AbsPreComponent />
        <h3>Baixes mediques tmp</h3>
        <BaixesMedComponent />
        <h3>Sortides curriculars tmp</h3>
        <SortidesCurComponent />
      </div>
    </div>
  );

}

export default App;
