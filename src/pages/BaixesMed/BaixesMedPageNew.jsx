import NavBar from "../../components/NavBar";
import BaixesCreate from "../../components/BaixesMed/BaixesMedComponentCreate";

function BaixesMedPageNew() {
  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Nova baixa mèdica</h3>
        <BaixesCreate />
      </div>
    </div>
  );
}

export default BaixesMedPageNew;
