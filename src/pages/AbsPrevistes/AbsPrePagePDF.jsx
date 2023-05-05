import AbsPrePDF from "../../components/AbsPrevistes/AbsPreComponentDecresp";
import NavBar from "../../components/NavBar";

function AbsPrePagePDF() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Generar PDF</h3>
        <AbsPrePDF />
      </div>
    </>
  );
}

export default AbsPrePagePDF;