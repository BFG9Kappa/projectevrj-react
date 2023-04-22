import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import AbsPrePage from './pages/AbsPrePage';
import AbsNoPrePage from './pages/AbsNoPrevistes/AbsNoPrePage';
import AbsNoPrePageNew from './pages/AbsNoPrevistes/AbsNoPrePageNew';
import BaixesMedPage from './pages/BaixesMedPage';
import SortidesCurPage from './pages/SortidesCurPages';

document.title = "Projecte M12";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/absprevistes" component={AbsPrePage} />
          <Route path="/absnoprevistes" component={AbsNoPrePage} />
          <Route path="/absnoprevistes/new" component={AbsNoPrePageNew} />
          <Route path="/baixesmediques" component={BaixesMedPage} />
          <Route path="/sortidescurriculars" component={SortidesCurPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
