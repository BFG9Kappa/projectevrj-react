import SortidesCurComponent from '../components/SortidesCurComponent';
import NavBar from '../components/NavBar';


document.title = "Projecte M12";

function SortidesCurPages() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Sortides Curriculars</h3>
        <SortidesCurComponent />
      </div>
    </div>
  );

}

export default SortidesCurPages;