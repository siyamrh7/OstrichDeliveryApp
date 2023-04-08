import styles from "./NearFood.module.css";
import CloseHeader from '../components/CloseHeader'
const NearFood = () => {
  return (
    <div className={styles.foodDeliveryService}>
  <CloseHeader text="Near me"/>
      <div className={styles.searchBar}>
        <div className={styles.magnifyingglassParent}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/magnifyingglass.svg"
          />
        <input placeholder="search" className={styles.text}/>
        </div>
        <img className={styles.searchBarChild} alt="" src="/frame-1088.svg" />
      </div>
      <div className={styles.sortBy}>
        <div className={styles.categories}>
          <img
            className={styles.iconlyregularoutlinefilter}
            alt=""
            src="/iconlyregularoutlinefilter.svg"
          />
          <div className={styles.text1}>All</div>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle4.svg"
          />
        </div>
        <div className={styles.categories1}>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle5.svg"
          />
          <div className={styles.text}>All</div>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle5.svg"
          />
        </div>
        <div className={styles.categories1}>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle5.svg"
          />
          <div className={styles.text}>Near Me</div>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle6.svg"
          />
        </div>
        <div className={styles.categories1}>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle6.svg"
          />
          <div className={styles.text}>Promo</div>
          <img
            className={styles.iconlysharpbulktimeCircle}
            alt=""
            src="/iconlysharpbulktime-circle6.svg"
          />
        </div>
      </div>
     
      <div className={styles.itemSearchFound}>
        <div className={styles.cardBox}>
          <div className={styles.item}>
            <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
            <div className={styles.text5}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.pizzaHutComboSpecialWrapper}>
                    <div className={styles.pizzaHutCombo}>
                      Goodfellas Pizza and Pub
                    </div>
                  </div>
                  <div className={styles.fastFoodWrapper}>
                    <div className={styles.fastFood}>Fast Food</div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar1.svg"
                    />
                    <div className={styles.km}>4.9</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularbulktime-circle2.svg"
                    />
                    <div className={styles.min}>24min</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.star1}>
                <b className={styles.b}>
                  <span>{`$ `}</span>
                  <span className={styles.span}>24</span>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.item}>
            <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
            <div className={styles.text5}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.pizzaHutComboSpecialWrapper}>
                    <div className={styles.pizzaHutCombo}>
                      Roberto's Woodfired Pizza
                    </div>
                  </div>
                  <div className={styles.fastFoodWrapper}>
                    <div className={styles.fastFood}>Fast Food</div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar1.svg"
                    />
                    <div className={styles.km}>4.9</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularbulktime-circle2.svg"
                    />
                    <div className={styles.min}>24min</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.star1}>
                <b className={styles.b}>
                  <span>{`$ `}</span>
                  <span className={styles.span}>21</span>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.item}>
            <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
            <div className={styles.text5}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.pizzaHutComboSpecialWrapper}>
                    <div className={styles.pizzaHutCombo}>Debonairs Pizza</div>
                  </div>
                  <div className={styles.fastFoodWrapper}>
                    <div className={styles.fastFood}>Fast Food</div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar1.svg"
                    />
                    <div className={styles.km}>4.9</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularbulktime-circle2.svg"
                    />
                    <div className={styles.min}>24min</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.star1}>
                <b className={styles.b}>
                  <span>{`$ `}</span>
                  <span className={styles.span}>45</span>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.item}>
            <img className={styles.imageIcon} alt="" src="/image8@2x.png" />
            <div className={styles.text5}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.pizzaHutComboSpecialWrapper}>
                    <div className={styles.pizzaHutCombo}>
                      Eagles Pizza Klein Windhoek
                    </div>
                  </div>
                  <div className={styles.fastFoodWrapper}>
                    <div className={styles.fastFood}>Fast Food</div>
                  </div>
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
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularbulktime-circle3.svg"
                    />
                    <div className={styles.min}>24min</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.star1}>
                <b className={styles.b}>
                  <span>{`$ `}</span>
                  <span className={styles.span}>14</span>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.item}>
            <img className={styles.imageIcon} alt="" src="/image9@2x.png" />
            <div className={styles.text5}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.pizzaHutComboSpecialWrapper}>
                    <div className={styles.pizzaHutCombo}>Pizza Inn Nabta</div>
                  </div>
                  <div className={styles.fastFoodWrapper}>
                    <div className={styles.fastFood}>Fast Food</div>
                  </div>
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
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularbulktime-circle3.svg"
                    />
                    <div className={styles.min}>24min</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.star9}>
                <b className={styles.b}>$ 24</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.dividerIcon} alt="" src="/divider7.svg" />
      <div className={styles.navbar}>
        <div className={styles.navbarHome}>
          <div className={styles.navbarIcon}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularbulkhome.svg"
            />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightdocument4.svg"
            />
            <div className={styles.fastFood}>Activity</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightwallet1.svg"
            />
            <div className={styles.fastFood}>Wallet</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightprofile3.svg"
            />
            <div className={styles.fastFood}>Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearFood;
