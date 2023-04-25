import NavBar from "../../components/NavBar";
import AbsPreCreate from "../../components/AbsPrevistes/AbsPreComponentCreate";

function AbsPrePageNew() {
  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Nova absència prevista</h3>
        <AbsPreCreate />
      </div>
    </div>
  );
}

export default AbsPrePageNew;
