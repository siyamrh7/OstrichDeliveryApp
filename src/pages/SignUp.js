import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./LoginSignUp.css";

const SignUp = () => {
  return (
    <div className="login-sign-up">
      <Header text={"Get Started"}/>
      <b className="whats-your-phone">What’s your phone number</b>
      <div className="button-wrapper1">
        <Link to={"/verification"}  className="button3">
          <div className="apply-wrapper1">
            <div className="apply3 ">Next</div>
          </div>
        </Link>
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="number-wrapper">
            <div className="div">+27</div>
          </div>
          <input className="street2" placeholder="12345678910" type="number"/>
        </div>
        <div className="will-send-verification">
          Will send verification code
        </div>
      </div>
    </div>
  );
};

export default SignUp;
