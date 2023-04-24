import SortidesAll from "../../components/SortidesCur/SortidesCurComponentAll";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SortidesCurPage() {
  const history = useHistory();

  const handleNovaClick = (event) => {
    event.preventDefault();
    history.push("/sortidescurriculars/new");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Llista de sortides curriculars</h3>
        <Button variant="primary" onClick={handleNovaClick}>Nova</Button>{' '}
        <br />
        <br />
        <SortidesAll />
      </div>
    </>
  );
}

export default SortidesCurPage;
