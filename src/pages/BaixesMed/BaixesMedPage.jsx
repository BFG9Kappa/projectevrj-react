import BaixesAll from "../../components/BaixesMed/BaixesMedComponentAll";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function AbsNoPrePage() {
  const history = useHistory();

  const handleNovaClick = (event) => {
    event.preventDefault();
    history.push("/baixesmediques/new");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Llista de baixes mèdiques</h3>
        <Button variant="primary" onClick={handleNovaClick}>Nova</Button>{' '}
        <br />
        <br />
        <BaixesAll />
      </div>
    </>
  );
}

export default AbsNoPrePage;
