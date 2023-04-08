import Header from "../components/Header";
import "./AddCard.css";

const AddCard = () => {
  return (
    <div className="add-card">
     
    <Header text="Add Card" />
      <div className="card-parent">
        <div className="card">
          <div className="card-number">Card Number</div>
          <div className="mastercard-parent">
            <img className="mastercard-icon" alt="" src="/mastercard.svg" />
            <div className="div4">4123 8412 4812 1923</div>
          </div>
        </div>
        <div className="frame-container">
          <div className="expire-parent">
            <div className="card-number">Expire</div>
            <div className="mmyy-wrapper">
              <div className="mmyy">MM/YY</div>
            </div>
          </div>
          <div className="expire-parent">
            <div className="card-number">CVV</div>
            <div className="wrapper">
              <div className="mmyy">1234</div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <div className="apply-wrapper">
          <div className="apply">Add</div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
