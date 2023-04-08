import React from 'react'
import './categoriespopup.css'
const CategoriesPopup = ({show,showHandler}) => {
  return (
    <div className={show?"search-page":"search-page-none"}>

      <div className="what-do-you-want-to-ride">
       
        <div className="frame-parent5">
          <div className="text-parent">
            <div className="text3">
              <div className="kebab">More Services</div>
              <div onClick={showHandler} className="kebab">X</div>

            </div>
            
            <img className="divider-icon4" alt="" src="/divider4.svg" />
          </div>
          <div className="frame-parent6">
            <div className="category-icon-parent">
              <div className="category-icon">
                <img className="burger-1-icon" alt="" src="/burger-1@2x.png" />
                <div className="cheeseburger-parent">
                  <img
                    className="cheeseburger-icon"
                    alt=""
                    src="/cheeseburger@2x.png"
                  />
                  <div className="see-all2">Food</div>
                </div>
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">Get Food Now</div>
                <div className="get-your-food">
                  Get your food delivered fast and reliably
                </div>
              </div>
            </div>
            <div className="category-icon-group">
              <div className="category-icon1">
                <div className="taxi-parent">
                  <img className="taxi-icon" alt="" src="/taxi@2x.png" />
                  <div className="see-all2">Car</div>
                </div>
                <img className="taxi-2-icon" alt="" src="/taxi-2@2x.png" />
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">Hail A Ride</div>
                <div className="get-your-food">
                  Get to your destination on time with our reliable Rides
                </div>
              </div>
            </div>
            <div className="category-icon-group">
              <div className="category-icon">
                <img
                  className="broccoli-1-icon"
                  alt=""
                  src="/broccoli-1@2x.png"
                />
                <div className="vegetables-box-parent">
                  <img
                    className="taxi-icon"
                    alt=""
                    src="/vegetables-box@2x.png"
                  />
                  <div className="see-all2">Grocery</div>
                </div>
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">My Grocery</div>
                <div className="get-your-food">
                  Save time with our quick and easy grocery shopping feature.
                </div>
              </div>
            </div>
            <div className="category-icon-parent">
              <div className="category-icon">
                <div className="car-parent">
                  <img className="car-icon" alt="" src="/car@2x.png" />
                  <img className="vpn-icon" alt="" src="/vpn@2x.png" />
                </div>
                <div className="car-rental-parent">
                  <img className="taxi-icon" alt="" src="/car-rental@2x.png" />
                  <div className="see-all2">Rent</div>
                </div>
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">Rent A Car</div>
                <div className="get-your-food">
                  Get a great deal on your rental car with our affordable rates.
                </div>
              </div>
            </div>
            <div className="category-icon-parent">
              <div className="category-icon">
                <img className="burger-1-icon" alt="" src="/burger-11@2x.png" />
                <div className="worker-parent">
                  <img className="taxi-icon" alt="" src="/worker@2x.png" />
                  <div className="see-all2">Worker</div>
                </div>
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">Domestic Help</div>
                <div className="get-your-food">
                  Get your food delivered fast and reliably
                </div>
              </div>
            </div>
            <div className="category-icon-parent">
              <div className="category-icon">
                <img className="burger-1-icon" alt="" src="/burger-12@2x.png" />
                <div className="glossy-lips-parent">
                  <img className="taxi-icon" alt="" src="/glossy-lips@2x.png" />
                  <div className="see-all2">Beauty</div>
                </div>
              </div>
              <div className="get-food-now-parent">
                <div className="see-all2">Beauty Service</div>
                <div className="get-your-food">
                  Get your food delivered fast and reliably
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPopup