import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import AbsPrePage from "./pages/AbsPrevistes/AbsPrePage";
import AbsPrePageNew from "./pages/AbsPrevistes/AbsPrePageNew";
import AbsNoPrePage from "./pages/AbsNoPrevistes/AbsNoPrePage";
import AbsNoPrePageNew from "./pages/AbsNoPrevistes/AbsNoPrePageNew";
import AbsNoPrePageEdit from "./pages/AbsNoPrevistes/AbsNoPrePageEdit";
import BaixesMedPage from "./pages/BaixesMed/BaixesMedPage";
import BaixesMedPageNew from "./pages/BaixesMed/BaixesMedPageNew";
import SortidesCurPage from "./pages/SortidesCur/SortidesCurPage";
import SortidesCurPageNew from "./pages/SortidesCur/SortidesCurPageNew";


document.title = "Projecte M12";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/absprevistes" component={AbsPrePage} />
          <Route exact path="/absprevistes/new" component={AbsPrePageNew} />
          <Route exact path="/absnoprevistes" component={AbsNoPrePage} />
          <Route exact path="/absnoprevistes/new" component={AbsNoPrePageNew} />
          <Route exact path="/absnoprevistes/edit/:id" component={AbsNoPrePageEdit} />         
          <Route exact path="/baixesmediques" component={BaixesMedPage} />
          <Route exact path="/baixesmediques/new" component={BaixesMedPageNew}/>
          <Route exact path="/sortidescurriculars" component={SortidesCurPage}/>
          <Route exact path="/sortidescurriculars/new" component={SortidesCurPageNew}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
