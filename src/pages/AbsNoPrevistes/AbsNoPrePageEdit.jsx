import NavBar from "../../components/NavBar";
import AbsNoPreComponentUpdate from "../../components/AbsNoPrevistes/AbsNoPreComponentUpdate";

function AbsNoPrePageEdit() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar absència no prevista</h3>
        <AbsNoPreComponentUpdate />
      </div>
    </>
  );
}

export default AbsNoPrePageEdit;
