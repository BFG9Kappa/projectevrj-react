import LoginComponentAll from "../../components/Login/LoginComponentAll";
import NavBar from "../../components/NavBar";

function LoginPage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <br />
        <LoginComponentAll />
      </div>
    </>
  );
}

export default LoginPage;
