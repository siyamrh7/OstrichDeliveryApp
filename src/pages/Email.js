import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Name1.css";
const Email = () => {
  return (
    <div className="name">
     <Header text={"Get Started"} />
     <Link  to={"/home"} className="button-wrapper1">
        <div className="button3">
          <div className="apply-wrapper1">
          <div className="apply3 ">Next</div>
          </div>
        </div>
      </Link>
      <div className="whats-your-name-parent">
        <b className="whats-your-name">What’s Your Email?</b>
        <div className="frame-container">
          <div className="street-container">
                         <input className="street1" placeholder="Your Email" type="text"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
