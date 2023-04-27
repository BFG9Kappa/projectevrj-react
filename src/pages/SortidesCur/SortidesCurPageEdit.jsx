import NavBar from "../../components/NavBar";
import SortidesCurUpdate from "../../components/SortidesCur/SortidesCurComponentUpdate";

function SortidesCurPageEdit() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Editar sortida curricular</h3>
        <SortidesCurUpdate />
      </div>
    </>
  );
}

export default SortidesCurPageEdit;
