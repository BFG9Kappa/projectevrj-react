import NavBar from "../../components/NavBar";
import BaixesCreate from "../../components/BaixesMed/BaixesMedComponentCreate";

function BaixesMedPageNew() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova baixa mèdica</h3>
        <BaixesCreate />
      </div>
    </>
  );
}

export default BaixesMedPageNew;
