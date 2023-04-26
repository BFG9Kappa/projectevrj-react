import NavBar from '../../components/NavBar';
import AbsNoPreComponentCreate from '../../components/AbsNoPrevistes/AbsNoPreComponentCreate';

function AbsNoPrePageNew() {

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Nova absències no prevista</h3>
        <AbsNoPreComponentCreate />
      </div>
    </>
  );
}

export default AbsNoPrePageNew;
