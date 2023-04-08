import { Link } from "react-router-dom";
import "./RateOrder.css";

const RateOrder = () => {
  return (
    <div className="rate-order">
      <div className="rate-order-child" />
    
      <div className="title-top-sub-title8">
        <img className="x-icon3" alt="" src="/x3.svg" />
        <div className="lorem8">Rate Your Order</div>
      </div>
      <div className="button-container">
        <div className="button4">
          <div  className="apply-wrapper3" >
            <Link className="apply5 stylenone" to={"/activity"}>Submit</Link>
          </div>
        </div>
      </div>
      <div className="frame-parent15">
        <div className="frame-parent16">
          <div className="category-icon-parent5">
            <div className="category-icon7">
              <img className="burger-1-icon4" alt="" src="/burger-14@2x.png" />
              <div className="cheeseburger-container">
                <img
                  className="cheeseburger-icon2"
                  alt=""
                  src="/cheeseburger2@2x.png"
                />
                <div className="food2">Food</div>
              </div>
            </div>
            <div className="food-delivery-group">
              <div className="food-delivery1">Food Delivery</div>
              <b className="debonairs-pizza">Debonairs Pizza</b>
            </div>
          </div>
          <div className="frame-parent17">
            <div className="iconlylightdocument-group">
              <img
                className="iconlylightdocument1"
                alt=""
                src="/iconlylightdocument1.svg"
              />
              <div className="food-delivery1">#afb3b1923a5d-11</div>
            </div>
            <div className="wrapper2">
              <div className="food-delivery1">3/12/23</div>
            </div>
          </div>
        </div>
        <img className="divider-icon6" alt="" src="/divider6.svg" />
        <div className="frame-wrapper1">
          <div className="frame-parent18">
            <div className="frame-parent19">
              <div className="star-group">
                <img className="star-icon5" alt="" src="/star5.svg" />
                <img className="star-icon5" alt="" src="/star6.svg" />
                <img className="star-icon5" alt="" src="/star7.svg" />
                <img className="star-icon5" alt="" src="/star8.svg" />
                <img className="star-icon5" alt="" src="/star9.svg" />
              </div>
              <div className="please-rate-your1">
                Please rate your food delivery experience from 1-5
              </div>
            </div>
            <div className="suggestion-parent">
              <b className="suggestion">Suggestion</b>
              <div className="frame-parent20">
                <div className="categories-small-container">
                  <div className="categories-small6">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building6@2x.png"
                      />
                    </div>
                    <div className="save6">Fast Delivery</div>
                  </div>
                  <div className="categories-small6">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building7@2x.png"
                      />
                    </div>
                    <div className="save6">Good</div>
                  </div>
                  <div className="categories-small6">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building8@2x.png"
                      />
                    </div>
                    <div className="save6">Fastest</div>
                  </div>
                </div>
                <div className="categories-small-parent1">
                  <div className="categories-small9">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building9@2x.png"
                      />
                    </div>
                    <div className="save6">Cleanest</div>
                  </div>
                  <div className="categories-small10">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building10@2x.png"
                      />
                    </div>
                    <div className="save6">Cozy</div>
                  </div>
                  <div className="categories-small9">
                    <div className="icon7">
                      <img
                        className="school-building-icon6"
                        alt=""
                        src="/school-building11@2x.png"
                      />
                    </div>
                    <div className="save6">Super Fast</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="additional-service1">
              <div className="title-top-sub-title9">
                <div className="button4">
                  <div className="lorem-wrapper1">
                    <div className="food2">Leave Your Driver A Message</div>
                  </div>
                </div>
              </div>
              <input className="street1 leaveinput"   placeholder="Leave message here..."   />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateOrder;
