import AbsPreComponent from './components/AbsPreComponent';
import NavBar from '../components/NavBar';

document.title = "Projecte M12";

function AbsPrePage() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Abs no previstes tmp</h3>
        <AbsPreComponent />
      </div>
    </div>
  );

}

export default AbsPrePage;