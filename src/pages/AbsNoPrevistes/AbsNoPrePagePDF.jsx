import AbsNoPrePDF from "../../components/AbsNoPrevistes/AbsNoPreComponentDecresp";
import NavBar from "../../components/NavBar";

function AbsNoPrePagePDF() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Generar PDF</h3>
        <AbsNoPrePDF />
      </div>
    </>
  );
}

export default AbsNoPrePagePDF;