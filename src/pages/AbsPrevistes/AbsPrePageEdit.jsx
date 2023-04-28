import AbsPreComponentUpdate from "../../components/AbsPrevistes/AbsPreComponentUpdate";
import NavBar from "../../components/NavBar";


function AbsPrePageEdit() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar absència no prevista</h3>
        <AbsPreComponentUpdate />
      </div>
    </>
  );
}

export default AbsPrePageEdit;
