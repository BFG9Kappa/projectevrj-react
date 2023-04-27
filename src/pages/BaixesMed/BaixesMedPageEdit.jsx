import NavBar from "../../components/NavBar";
import BaixesMedUpdate from "../../components/BaixesMed/BaixesMedComponentUpdate"

function BaixesMedPageEdit() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar baixa mèdica</h3>
        <BaixesMedUpdate />
      </div>
    </>
  );
}

export default BaixesMedPageEdit;
