import { Link } from "react-router-dom";
import CloseHeader from "../components/CloseHeader";
import FoodBottomNav from "../components/FoodBottomNav";
import styles from "./HomePageFood.module.css";

const HomePageFood = () => {
  return (
    <div className={styles.foodDeliveryService}>
      <FoodBottomNav />
   <div className={styles.foodMain}>

   <div className={styles.bannerAdsParent}>
        <div className={styles.bannerAds} />
        <div className={styles.bannerAds} />
      </div>
      <div className={styles.promoWrapper}>
        <div className={styles.promo}>
          <div className={styles.hotPromo}>
            <div className={styles.image}>
              <img
                className={styles.unsplashsnlfvyml8osIcon}
                alt=""
                src="/unsplashsnlfvyml8os15@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <b className={styles.kebabMarroco}>Kebab Marroco</b>
              </div>
              <div className={styles.ratingStarEtc}>
                <div className={styles.star}>
                  <img
                    className={styles.iconlyregularboldstar}
                    alt=""
                    src="/iconlyregularboldstar5.svg"
                  />
                  <div className={styles.km}>4.8</div>
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.k}>
                  1.5<span className={styles.k1}>k</span>+
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.km}>2.5km</div>
              </div>
            </div>
          </div>
          <div className={styles.hotPromo}>
            <div className={styles.image}>
              <img
                className={styles.unsplashsnlfvyml8osIcon1}
                alt=""
                src="/unsplashsnlfvyml8os16@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <b className={styles.kebabMarroco}>Pizza</b>
              </div>
              <div className={styles.ratingStarEtc}>
                <div className={styles.star}>
                  <img
                    className={styles.iconlyregularboldstar}
                    alt=""
                    src="/iconlyregularboldstar5.svg"
                  />
                  <div className={styles.km}>4.9</div>
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.k}>
                  1<span className={styles.k1}>k</span>+
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.km}>2.1km</div>
              </div>
            </div>
          </div>
          <div className={styles.hotPromo}>
            <div className={styles.image}>
              <img
                className={styles.unsplashsnlfvyml8osIcon1}
                alt=""
                src="/unsplashsnlfvyml8os17@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <b className={styles.kebabMarroco}>Spagetti</b>
              </div>
              <div className={styles.ratingStarEtc}>
                <div className={styles.star}>
                  <img
                    className={styles.iconlyregularboldstar}
                    alt=""
                    src="/iconlyregularboldstar5.svg"
                  />
                  <div className={styles.km}>4.4</div>
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.k}>
                  1.5<span className={styles.k1}>k</span>+
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.km}>2.3km</div>
              </div>
            </div>
          </div>
          <div className={styles.hotPromo}>
            <div className={styles.image}>
              <img
                className={styles.unsplashsnlfvyml8osIcon3}
                alt=""
                src="/unsplashsnlfvyml8os18@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <b className={styles.kebabMarroco}>Rendang</b>
              </div>
              <div className={styles.ratingStarEtc}>
                <div className={styles.star}>
                  <img
                    className={styles.iconlyregularboldstar}
                    alt=""
                    src="/iconlyregularboldstar5.svg"
                  />
                  <div className={styles.km}>5</div>
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.k}>
                  4<span className={styles.k1}>k</span>+
                </div>
                <img
                  className={styles.ratingStarEtcChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <div className={styles.km}>1.3km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titleTopSubTitleseeAlParent}>
        <div className={styles.titleTopSubTitleseeAl}>
          <div className={styles.frameParent}>
            <div className={styles.loremWrapper}>
              <b className={styles.lorem}>Most Visited</b>
            </div>
            <div className={styles.seeAllParent}>
              <div className={styles.seeAll}>see all</div>
              <img
                className={styles.iconlyregularlightfilter}
                alt=""
                src="/iconlyregularlightfilter1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.FoodItemFlex}>
        <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div> <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image4}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon4}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text4}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameGroup}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.lorem}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc4}>
                  <div className={styles.star4}>
                    <img
                      className={styles.iconlyregularboldstar4}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.div6}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild5}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.div6}>2.5km</div>
                </div>
              </div>
            </div>
          </div>

        </div>
       
        
        
      </div>
      <div className={styles.titleTopSubTitleParent}>
        <div className={styles.titleTopSubTitle}>
          <div className={styles.frameParent}>
            <div className={styles.loremWrapper}>
              <div className={styles.lorem1}>Category</div>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          <Link to={"/foods/near"} className={styles.categoryIcon}>
            <div className={styles.placeMarkerParent}>
              <img
                className={styles.placeMarkerIcon}
                alt=""
                src="/place-marker@2x.png"
              />
              <div className={styles.seeAll}>Near Me</div>
            </div>
          </Link>
          <div className={styles.categoryIcon}>
            <img className={styles.taxi2Icon} alt="" src="/taxi-2@2x.png" />
            <div className={styles.priceTagParent}>
              <img
                className={styles.placeMarkerIcon}
                alt=""
                src="/price-tag@2x.png"
              />
              <div className={styles.seeAll}>Discount</div>
            </div>
          </div>
          <div className={styles.categoryIcon}>
            <img className={styles.burger1Icon} alt="" src="/burger-1@2x.png" />
            <div className={styles.cheeseburgerParent}>
              <img
                className={styles.cheeseburgerIcon}
                alt=""
                src="/cheeseburger@2x.png"
              />
              <div className={styles.seeAll}>Food</div>
            </div>
          </div>
          <div className={styles.categoryIcon}>
            <img
              className={styles.broccoli1Icon}
              alt=""
              src="/broccoli-1@2x.png"
            />
            <div className={styles.vegetablesBoxParent}>
              <img
                className={styles.placeMarkerIcon}
                alt=""
                src="/vegetables-box@2x.png"
              />
              <div className={styles.seeAll}>Grocery</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.locationParent}>
        <div className={styles.title}>
          <div className={styles.frameParent4}>
            <div className={styles.locationGroup}>
              <div className={styles.location1}>
                <img
                  className={styles.iconlyregularbulklocation}
                  alt=""
                  src="/iconlyregularbulklocation1.svg"
                />
              </div>
              <div className={styles.title}>
                <div className={styles.deliverTo}>Deliver to</div>
                <Link to={'/select-location'} className={styles.nairobiKenyaParent}>
                  <div className={styles.nairobiKenya}>Nairobi, Kenya</div>
                  <img
                    className={styles.iconlyregularlightarrowD}
                    alt=""
                    src="/iconlyregularlightarrow--down-2.svg"
                  />
                </Link>
              </div>
            </div>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <img className={styles.frameChild} alt="" src="/ellipse-5.svg" />
          </div>
        </div>
        <div className={styles.magnifyingglassParent}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/magnifyingglass1.svg"
          />
          <Link to={"/foods/search"} style={{all:"unset"}}  className={styles.vegetablesFruits}>Vegetables, Fruits...</Link>
        </div>
      </div>
     <CloseHeader text={"Your Food"}/>
     
   </div>

    </div>
  );
};

export default HomePageFood;
