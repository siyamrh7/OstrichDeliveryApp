import { useState } from "react";
import BottomNav from "../components/BottomNav";
import "./Wallet1.css";
import { Link } from "react-router-dom";
const Wallet1 = () => {
  const [show,setShow]=useState(false)
  const showHandler=()=>{
    setShow(!show)
  }
  return (
    <div className="wallet4">
      <div className="title-top-sub-title-group">
        <div className="title-top-sub-title11">
          <div className="title-top-sub-title-inner4">
            <div className="lorem-wrapper4">
              <div className="lorem12">Transaction History</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper13">
          <div className="frame-parent37">
            <div className="group-parent2">
              <div className="frame-wrapper14">
                <div className="bank-cards-wrapper1">
                  <img
                    className="bank-cards-icon3"
                    alt=""
                    src="/bank-cards3@2x.png"
                  />
                </div>
              </div>
              <div className="frame-parent38">
                <div className="frame-parent39">
                  <div className="frame-wrapper13">
                    <div className="transfer-from-wallet-container3">
                      <span>{`Transfer from `}</span>
                      <b>Wallet</b>
                    </div>
                  </div>
                  <div className="fast-food-wrapper1">
                    <div className="fast-food3">Fast Food</div>
                  </div>
                </div>
                <div className="frame-parent40">
                  <div className="success-wrapper1">
                    <div className="success3">Success</div>
                  </div>
                  <img className="frame-child1" alt="" src="/ellipse-23.svg" />
                  <div className="am3">20:00 am</div>
                </div>
              </div>
            </div>
            <b className="b4">+$230</b>
          </div>
        </div>
        <div className="frame-wrapper13">
          <div className="frame-parent37">
            <div className="group-parent2">
              <div className="frame-wrapper14">
                <div className="bank-cards-wrapper1">
                  <img
                    className="bank-cards-icon3"
                    alt=""
                    src="/bank-cards4@2x.png"
                  />
                </div>
              </div>
              <div className="frame-parent38">
                <div className="frame-parent39">
                  <div className="frame-wrapper13">
                    <div className="transfer-from-wallet-container3">
                      <span>{`Transfer from `}</span>
                      <b>Wallet</b>
                    </div>
                  </div>
                  <div className="fast-food-wrapper1">
                    <div className="fast-food3">Fast Food</div>
                  </div>
                </div>
                <div className="frame-parent40">
                  <div className="success-wrapper1">
                    <div className="success3">Success</div>
                  </div>
                  <img className="frame-child1" alt="" src="/ellipse-24.svg" />
                  <div className="am3">20:00 am</div>
                </div>
              </div>
            </div>
            <b className="b4">+$230</b>
          </div>
        </div>
        <div className="frame-wrapper13">
          <div className="frame-parent37">
            <div className="group-parent2">
              <div className="frame-wrapper14">
                <div className="bank-cards-wrapper1">
                  <img
                    className="bank-cards-icon3"
                    alt=""
                    src="/bank-cards5@2x.png"
                  />
                </div>
              </div>
              <div className="frame-parent38">
                <div className="frame-parent39">
                  <div className="frame-wrapper13">
                    <div className="transfer-from-wallet-container3">
                      <span>{`Transfer from `}</span>
                      <b>Wallet</b>
                    </div>
                  </div>
                  <div className="fast-food-wrapper1">
                    <div className="fast-food3">Fast Food</div>
                  </div>
                </div>
                <div className="frame-parent40">
                  <div className="success-wrapper1">
                    <div className="success3">Success</div>
                  </div>
                  <img className="frame-child1" alt="" src="/ellipse-25.svg" />
                  <div className="am3">20:00 am</div>
                </div>
              </div>
            </div>
            <b className="b4">+$230</b>
          </div>
        </div>
      </div>
  
      <div className="statusbar-iphone-x-or-newer-group">
        
        <div className="title-top-sub-titlesee-al1">
          <div className="title-top-sub-title-inner4">
            <div className="lorem-wrapper4">
              <div className="lorem12">My Wallet</div>
            </div>
            <Link to="/add-card" className="see-all-group">
              <div className="lorem12">Add Card</div>
              <img
                className="iconlyregularlightfilter1"
                alt=""
                src="/iconlyregularlightfilter1.svg"
              />
            </Link>
          </div>
        </div>
        <div className="frame-wrapper19">
          <div className="frame-wrapper20">
            <div className="frame-wrapper21">
              <div className="frame-parent50">
                <div className="frame-parent51">
                  <div className="balance-group">
                    <div className="balance1">Balance</div>
                    <div className="parent3">
                      <div className="balance1">$</div>
                      <div className="div34">
                        <span>230,</span>
                        <span className="span1">00</span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="iconlyregularlighthome1"
                    alt=""
                    src="/dotsthreeoutline1.svg"
                    onClick={showHandler}
                  />
                </div>
                <b className="b7">4123 8412 4812 1923</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper22">
          <div className="iconlyboldwallet-group">
            <img
              className="iconlyboldwallet1"
              alt=""
              src="/iconlyboldwallet1.svg"
            />
            <div className="top-up1">Top Up</div>
          </div>
        </div>
      </div>
      <div className="cash-and-credit-card1" />
      <BottomNav />
     
      <div className={show? "background-dim-parent" : "displaynone"}>
        <div className="background-dim1" onClick={showHandler} />
        <div className="primary">
          <div className="text18" />
         
          <div className="button-wallet1" onClick={showHandler}>
            <div className="wallet-apply-wrapper">
              <div className="apply6">Apply</div>
            </div>
          </div>
          <div className="primary-inner">
            <div className="frame-wrapper11">
              <div className="balance-parent">
                <div className="title-top-sub-title-inner3">
                  <div className="transfer-from-wallet-wrapper">
                    <div className="set-as-primary">Set As Primary Payment</div>
                  </div>
                  <img className="switch-icon" alt="" src="/switch.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet1;
