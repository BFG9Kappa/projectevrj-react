import AbsPreComponentAll from "../../components/AbsPrevistes/AbsPreComponentAll";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function AbsPrePage() {
  const history = useHistory();

  const handleNovaClick = (event) => {
    event.preventDefault();
    history.push("/absprevistes/new");
  };

  const handleDecrespClick = (event) => {
    event.preventDefault();
    history.push("/absprevistes/decresp");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Llista d'absències previstes</h3>
        <Button variant="primary" onClick={handleNovaClick}>Nova</Button>{' '}
        <Button variant="primary" onClick={handleDecrespClick}>Declaració responsable</Button>{' '}
        <br />
        <br />
        <AbsPreComponentAll />
      </div>
    </>
  );
}

export default AbsPrePage;