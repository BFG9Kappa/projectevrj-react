import NavBar from '../../components/NavBar';
import AbsNoPreComponentCreate from '../../components/AbsNoPrevistes/AbsNoPreComponentCreate';

function AbsNoPrePageNew() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Absències no previstes new</h3>
        <AbsNoPreComponentCreate />
      </div>
    </div>
  );

}

export default AbsNoPrePageNew;
