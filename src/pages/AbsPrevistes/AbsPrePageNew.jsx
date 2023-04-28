import NavBar from "../../components/NavBar";
import AbsPreComponentCreate from "../../components/AbsPrevistes/AbsPreComponentCreate";

function AbsPrePageNew() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova absència prevista</h3>
        <AbsPreComponentCreate />
      </div>
    </>
  );
}

export default AbsPrePageNew;
