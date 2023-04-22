import AbsNoPreComponentAll from '../../components/AbsNoPrevistes/AbsNoPreComponentAll';
import NavBar from '../../components/NavBar';
import AbsNoPreComponentBotonCreate from '../../components/AbsNoPrevistes/AbsNoPreComponentBotonCreate';

document.title = "Projecte M12";

function AbsNoPrePage() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Absències no previstes</h3>
          <AbsNoPreComponentBotonCreate />  
          <AbsNoPreComponentAll /> 
      </div>
    </div>
  );

}

export default AbsNoPrePage;
