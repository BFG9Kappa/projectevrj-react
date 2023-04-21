import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AbsPrePage from './pages/AbsPrePage';
import AbsNoPrePage from './pages/AbsNoPrePage';
import BaixesMedPage from './pages/BaixesMedPage';
import SortidesCurPage from './pages/SortidesCurPages';

document.title = "Projecte M12";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/absprevistes" component={AbsPrePage} />
          <Route path="/absnoprevistes" component={AbsNoPrePage} />
          <Route path="/baixesmediques" component={BaixesMedPage} />
          <Route path="/sortidescurriculars" component={SortidesCurPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
