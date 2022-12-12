import SignUpForm from "./SignUpForm";
import LogoImage from "../../assets/Logo-hodu.png";

function SignUp() {
  const ongoHome = () => {
    window.location = "/";
  };
  return (
    <div>
      <img
        src={LogoImage}
        alt="logo"
        className="loginLogoImage"
        onClick={ongoHome}
      ></img>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
