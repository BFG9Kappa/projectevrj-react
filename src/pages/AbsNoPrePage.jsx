import AbsNoPreComponent_All from '../components/AbsNoPrevistes/AbsNoPreComponent_All';
import NavBar from '../components/NavBar';
import AbsNoPreComponent_Create from '../components/AbsNoPrevistes/AbsNoPreComponent_Create';

document.title = "Projecte M12";

function AbsNoPrePage() {

  return (
    <div className="">
      <NavBar />
      <div className="container">
        <h3>Abs no previstes tmp</h3>
          <AbsNoPreComponent_All />
          <AbsNoPreComponent_Create />
      </div>
    </div>
  );

}

export default AbsNoPrePage;
