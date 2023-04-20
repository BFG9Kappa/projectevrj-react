import AbsNoPreComponent from '../components/AbsNoPreComponent';
import NavBar from '../components/NavBar';

document.title = "Projecte M12";

function AbsNoPrePage() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Abs no previstes tmp</h3>
        <AbsNoPreComponent />
      </div>
    </div>
  );

}

export default AbsNoPrePage;
