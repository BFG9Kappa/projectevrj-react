import './App.css';

import NavBar from './components/NavBar';
import AbsNoPreComponent from './components/AbsNoPreComponent';
import AbsPreComponent from './components/AbsPreComponent';



function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h3>Abs no previstes tmp</h3>
        <AbsNoPreComponent />
        <h3>Abs previstes tmp</h3>
        <AbsPreComponent />
      </div>
    </div>
  );

}

export default App;
