import NavBar from "../../components/NavBar";
import AbsNoPreComponentUpdate from "../../components/AbsPrevistes/AbsPreComponentUpdate";

function AbsPrePageEdit() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar absència prevista</h3>
        <AbsNoPreComponentUpdate />
      </div>
    </>
  );
}

export default AbsPrePageEdit;
