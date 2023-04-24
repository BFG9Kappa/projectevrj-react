import NavBar from "../../components/NavBar";
import SortidesCreate from "../../components/SortidesCur/SortidesCurComponentCreate";

function SortidesCurPageNew() {
  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Nova sortida curricular</h3>
        <SortidesCreate />
      </div>
    </div>
  );
}

export default SortidesCurPageNew;
