import Header from "../components/Header";
import "./Verification.css";
import { Link } from "react-router-dom";
import "./LoginSignUp.css"
const Verification = () => {
  return (
    <div className="verification">
    <Header text="Verification" />
      
      <Link to="/name" className="button-wrapper1">
        <div  className="button2 ">
          <div className="apply-frame">
            <div  className="apply2 ">Next</div>
          </div>
        </div>
      </Link>
      <div className="input-4-digit-has-been-sent-to-parent">
        <div className="input-4-digit-container">
          <p className="input-4-digit">Input 4 digit has been sent to number</p>
          <p className="p">
            <b>123-456-789-101</b>
          </p>
        </div>
        <div className="otp-code">
          <input className="otp-code-child" size="1" maxLength={"1"} type="number"/>
          <input className="otp-code-child"  size="1" maxLength={"1"} type="number"/>
          <input className="otp-code-child"  size="1" maxLength={"1"} type="number"/>
          <input className="otp-code-child"  size="1" maxLength={"1"} type="number"/>
        </div>
        <div className="didnt-send-resend-container">
          <span className="didnt-send">{`Didn’t send? `}</span>
          <b className="resend">Resend</b>
        </div>
      </div>
     
    </div>
  );
};

export default Verification;
