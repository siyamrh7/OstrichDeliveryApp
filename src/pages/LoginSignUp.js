import Header from "../components/Header";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
const LoginSignUp = () => {
  return (
    <div className="login-sign-up">
      <Header text={"Get Started"}/>
      <b className="whats-your-phone">What’s your phone number</b>
      <Link to={"/verification"} className="button-wrapper1">
        <div  className="button3">
          <div className="apply-wrapper1 ">
          <div  className="apply3 ">Next</div>
          </div>
        </div>
      </Link>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="number-wrapper">
            <div className="div">+27</div>
          </div>
            <input className="street2" placeholder="123456780" type="number"/>
        </div>
        <div className="will-send-verification">
          Will send verification code
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
