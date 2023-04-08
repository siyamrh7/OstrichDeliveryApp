import BottomNav from "../components/BottomNav";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import CategoriesPopup from "../components/CategoriesPopup";
import { useState } from "react";
const HomePage = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(false)
  const showHandler=()=>{
    setShow(!show)
  }
  return (
    <div className="home-page">
      <div className="home-page-child" />
      <BottomNav/>
    <div className="home-main-con" >
    <div className="location-parent">
        <div className="location">
          <div className="frame-parent71">
            <div className="location-group">
              <div className="location1">
                <img
                  className="iconlyregularbulklocation"
                  alt=""
                  src="/iconlyregularbulklocation.svg"
                />
              </div>
              <div className="location">
                <div className="deliver-to">Deliver to</div>
                <div  className="nairobi-kenya-parent " onClick={()=>navigate("/select-location")} >
                  <div className="nairobi-kenya">Windhoek, Namibia</div>
                  <img
                    className="iconlyregularlightarrow-d"
                    alt=""
                    src="/iconlyregularlightarrow--down-2.svg"
                  />
                </div>
              </div>
            </div>
            <img className="icon17" alt="" src="/icon1.svg" />
            <img className="frame-child4" alt="" src="/ellipse-5.svg" />
          </div>
        </div>
        <div className="search-bar2" >
          <img
          onClick={()=>navigate("/search")}
            className="magnifyingglass-icon2"
            alt=""
            src="/magnifyingglass2.svg"
          />
          <input onClick={()=>navigate("/search")} className="vegetables-fruits2" placeholder="Vegetables, Fruits"/>
        </div>
      </div>
      <div className="home-page-inner">
        <div className="banner-ads-parent">
          <div className="banner-ads">
            <div className="banner-ads-inner">
              <div />
            </div>
          </div>
          <div className="banner-ads">
            <div className="banner-ads-inner">
              <div />
            </div>
          </div>
        </div>
      </div>
    
      <div className="title-top-sub-title-container">
        <div className="title-top-sub-title13">
          <div className="frame-parent72">
            <div className="lorem-wrapper6">
              <div className="home5">Categories</div>
            </div>
            <div className="icon-parent" onClick={showHandler}>
              <div className="icon18">
                <img
                  className="school-building-icon16"
                  alt=""
                  src="/school-building16@2x.png"
                />
              </div>
              <div className="home5">see all</div>
            </div>
          </div>
        </div>
        <div className="frame-parent73">
          <div className="category-icon-wrapper">
            <Link to={'/foods'} className="category-icon12 ">
              <img className="burger-1-icon7" alt="" src="/burger-17@2x.png" />
              <div className="cheeseburger-parent3 ">
                <img
                  className="cheeseburger-icon5"
                  alt=""
                  src="/cheeseburger5@2x.png"
                />
                <div  className="home5 ">Food</div>
              </div>
            </Link>
          </div>
          <div className="category-icon-wrapper">
            <div className="category-icon13">
              <div className="taxi-group">
                <img className="taxi-icon1" alt="" src="/taxi1@2x.png" />
                <div className="home5">Car</div>
              </div>
              <img className="taxi-2-icon2" alt="" src="/taxi-22@2x.png" />
            </div>
          </div>
          <div className="category-icon-wrapper">
            <div className="category-icon12">
              <img
                className="broccoli-1-icon2"
                alt=""
                src="/broccoli-12@2x.png"
              />
              <div className="vegetables-box-container">
                <img
                  className="taxi-icon1"
                  alt=""
                  src="/vegetables-box2@2x.png"
                />
                <div className="home5">Grocery</div>
              </div>
            </div>
          </div>
          <div className="category-icon-wrapper">
            <div className="category-icon12">
              <div className="car-group">
                <img className="car-icon1" alt="" src="/car1@2x.png" />
                <img className="vpn-icon1" alt="" src="/vpn1@2x.png" />
              </div>
              <div className="car-rental-group">
                <img className="taxi-icon1" alt="" src="/car-rental1@2x.png" />
                <div className="home5">Rent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-promo-parent">
        <div className="discount-promo">
          <div className="title-top-sub-title13">
            <div className="frame-parent72">
              <div className="lorem-wrapper6">
                <div className="home5">Discount Promo</div>
              </div>
              <div className="icon-parent">
                <div className="home5">see all</div>
                <img
                  className="iconlyregularlightfilter2"
                  alt=""
                  src="/iconlyregularlightfilter2.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent75">
            <div className="frame-child5" />
            <div className="frame-child5" />
          </div>
        </div>
        <div className="best-selling">
          <div className="title-top-sub-title13">
            <div className="frame-parent72">
              <div className="lorem-wrapper6">
                <div className="home5">Best Selling</div>
              </div>
              <div className="icon-parent">
                <div className="home5">see all</div>
                {/* <img
                  className="iconlyregularlightfilter2"
                  alt=""
                  src="/iconlyregularlightfilter3.svg"
                /> */}
              </div>
            </div>
          </div>
          <div className="hot-promo-parent">
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon6"
                  alt=""
                  src="/unsplashsnlfvyml8os6@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="kebab-marroco">Papa G’s Chicken</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className="div37">4.8</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-16.svg"
                  />
                  <div className="k">
                    1.5<span className="k1">k</span>+
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-26.svg"
                  />
                  <div className="div37">2.5km</div>
                </div>
              </div>
            </div>
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon6"
                  alt=""
                  src="/unsplashsnlfvyml8os7@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="pizza">Garnish Indian</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar7.svg"
                    />
                    <div className="div37">4.9</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-17.svg"
                  />
                  <div className="k">
                    1<span className="k1">k</span>+
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-27.svg"
                  />
                  <div className="div37">2.1km</div>
                </div>
              </div>
            </div>
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon8"
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="kebab-marroco">Spagetti</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar8.svg"
                    />
                    <div className="div37">4.4</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-18.svg"
                  />
                  <div className="k">
                    1.5<span className="k1">k</span>+
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-28.svg"
                  />
                  <div className="div37">2.3km</div>
                </div>
              </div>
            </div>
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon8"
                  alt=""
                  src="/unsplashsnlfvyml8os9@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="kebab-marroco">Rendang</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar9.svg"
                    />
                    <div className="div37">5</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-19.svg"
                  />
                  <div className="k">
                    4<span className="k1">k</span>+
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-29.svg"
                  />
                  <div className="div37">1.3km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended-resto2">
          <div className="title-top-sub-title13">
            <div className="frame-parent72">
              <div className="lorem-wrapper6">
                <div className="home5">Recommend Resto</div>
              </div>
              <div className="icon-parent">
                <div className="home5">see all</div>
                {/* <img
                  className="iconlyregularlightfilter4"
                  alt=""
                  src="/iconlyregularlightfilter4.svg"
                /> */}
              </div>
            </div>
          </div>
          <div className="hot-promo-parent">
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon6"
                  alt=""
                  src="/unsplashsnlfvyml8os10@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="pizza">Waroeng Ummi</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar10.svg"
                    />
                    <div className="div37">4.8</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-110.svg"
                  />
                  <div className="div37">2.5km</div>
                </div>
              </div>
            </div>
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon6"
                  alt=""
                  src="/unsplashsnlfvyml8os11@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="pizza">The Halal Food</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar11.svg"
                    />
                    <div className="div37">4.8</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-111.svg"
                  />
                  <div className="div37">2.5km</div>
                </div>
              </div>
            </div>
            <div className="hot-promo">
              <div className="image6">
                <img
                  className="unsplashsnlfvyml8os-icon8"
                  alt=""
                  src="/unsplashsnlfvyml8os12@2x.png"
                />
              </div>
              <div className="text19">
                <div className="location">
                  <b className="pizza">KFC - Kentucky Fried Chicken</b>
                </div>
                <div className="rating-star-etc6">
                  <div className="star10">
                    <img
                      className="iconlyregularboldstar6"
                      alt=""
                      src="/iconlyregularboldstar12.svg"
                    />
                    <div className="div37">4.8</div>
                  </div>
                  <img
                    className="rating-star-etc-child3"
                    alt=""
                    src="/ellipse-112.svg"
                  />
                  <div className="div37">2.5km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <CategoriesPopup show={show} showHandler={showHandler}/>
      
    </div>
  );
};

export default HomePage;
