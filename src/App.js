import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import AbsPrePage from "./pages/AbsPrevistes/AbsPrePage";
import AbsPrePageNew from "./pages/AbsPrevistes/AbsPrePageNew";
import AbsPrePageEdit from "./pages/AbsPrevistes/AbsPrePageEdit";
import AbsNoPrePage from "./pages/AbsNoPrevistes/AbsNoPrePage";
import AbsNoPrePageNew from "./pages/AbsNoPrevistes/AbsNoPrePageNew";
import AbsNoPrePageEdit from "./pages/AbsNoPrevistes/AbsNoPrePageEdit";
import BaixesMedPage from "./pages/BaixesMed/BaixesMedPage";
import BaixesMedPageNew from "./pages/BaixesMed/BaixesMedPageNew";
import BaixesMedPageEdit from "./pages/BaixesMed/BaixesMedPageEdit";
import SortidesCurPage from "./pages/SortidesCur/SortidesCurPage";
import SortidesCurPageNew from "./pages/SortidesCur/SortidesCurPageNew";
import SortidesCurPageEdit from "./pages/SortidesCur/SortidesCurPageEdit";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from './components/PrivateRoute'


document.title = "Projecte M12";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/absprevistes" component={AbsPrePage} />
          <PrivateRoute exact path="/absprevistes/new" component={AbsPrePageNew} />
          <PrivateRoute exact path="/absprevistes/edit/:id" component={AbsPrePageEdit} />
          <PrivateRoute exact path="/absnoprevistes" component={AbsNoPrePage} />
          <PrivateRoute exact path="/absnoprevistes/new" component={AbsNoPrePageNew} />
          <PrivateRoute exact path="/absnoprevistes/edit/:id" component={AbsNoPrePageEdit} />         
          <PrivateRoute exact path="/baixesmediques" component={BaixesMedPage} />
          <PrivateRoute exact path="/baixesmediques/new" component={BaixesMedPageNew}/>
          <PrivateRoute exact path="/baixesmediques/edit/:id" component={BaixesMedPageEdit}/>
          <PrivateRoute exact path="/sortidescurriculars" component={SortidesCurPage}/>
          <PrivateRoute exact path="/sortidescurriculars/new" component={SortidesCurPageNew}/>
          <PrivateRoute exact path="/sortidescurriculars/edit/:id" component={SortidesCurPageEdit}/>
          <Route exact path="/auth/login" component={LoginPage}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
