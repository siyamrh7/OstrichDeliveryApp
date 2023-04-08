import "./landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="login">
      <div className="button-parent">
        <Link to={"login"} className="button5">
          <div className="apply-wrapper3">
            <div  className="apply5 ">Login</div>
          </div>
        </Link>
        <Link to={"signup"} className="button6">
          <div className="apply-wrapper4">
            <div className="apply6">I’m New here, Sign me up</div>
          </div>
        </Link>
      </div>
      <div className="login-inner">
        <div className="frame-parent3">
          <div className="frame-child" />
          <div className="ellipse-parent">
            <img className="frame-item" alt="" src="/ellipse-32.svg" />
            <img className="frame-item" alt="" src="/ellipse-33.svg" />
            <img className="frame-item" alt="" src="/ellipse-33.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
