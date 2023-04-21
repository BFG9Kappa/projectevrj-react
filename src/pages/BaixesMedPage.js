import BaixesMedComponent from '../components/BaixesMedComponent';
import NavBar from '../components/NavBar';

document.title = "Projecte M12";

function BaixesMedPage() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Baixes Mediques</h3>
        <BaixesMedComponent />
      </div>
    </div>
  );

}

export default BaixesMedPage;
