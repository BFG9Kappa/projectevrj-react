import AbsNoPreComponentAll from "../../components/AbsNoPrevistes/AbsNoPreComponentAll";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom";

import Button from 'react-bootstrap/Button';

document.title = "Projecte M12";

function AbsNoPrePage() {
  const history = useHistory();

  const handleNovaClick = (event) => {
    event.preventDefault();
    history.push("/absnoprevistes/new");
  };

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Absències no previstes</h3>
        <Button variant="primary" onClick={handleNovaClick}>Nova</Button>{' '}
        <AbsNoPreComponentAll />
      </div>
    </div>
  );
}

export default AbsNoPrePage;