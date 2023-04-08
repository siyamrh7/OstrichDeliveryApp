import styles from "./SortingBy.module.css";

const SortingBy = () => {
  return (
    <div className={styles.sortingBy}>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side3.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.magnifyingglassParent}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/magnifyingglass.svg"
          />
          <div className={styles.text}>Pizza</div>
        </div>
        <img className={styles.searchBarChild} alt="" src="/frame-1087.svg" />
      </div>
      <div className={styles.sortByParent}>
        <div className={styles.sortBy}>
          <div className={styles.categoriesnonActiveFilter}>
            <img
              className={styles.iconiconlyregularlightsort}
              alt=""
              src="/iconiconlyregularlightsort.svg"
            />
          </div>
          <div className={styles.categoriesnonActive}>
            <div className={styles.text}>All</div>
          </div>
          <div className={styles.categoriesnonActive}>
            <div className={styles.text}>Near Me</div>
          </div>
          <div className={styles.categoriesnonActive}>
            <div className={styles.text}>Promo</div>
          </div>
        </div>
        <div className={styles.titleTopSubTitle}>
          <img
            className={styles.iconlyregularoutlinearrow}
            alt=""
            src="/iconlyregularoutlinearrow--left.svg"
          />
          <div className={styles.text}>Search</div>
        </div>
        <div className={styles.itemSearchFound}>
          <div className={styles.cardBox}>
            <div className={styles.item}>
              <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
              <div className={styles.text1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pizzaHutComboSpecialWrapper}>
                      <div className={styles.pizzaHutCombo}>
                        Pizza Hut Combo Special
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
                        src="/iconlyregularboldstar.svg"
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
              <div className={styles.text1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pizzaHutComboSpecialWrapper}>
                      <div className={styles.pizzaHutCombo}>Brummie Pizza</div>
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
                        src="/iconlyregularboldstar.svg"
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
              <div className={styles.text1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pizzaHutComboSpecialWrapper}>
                      <div className={styles.pizzaHutCombo}>Brummie Pizza</div>
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
                        src="/iconlyregularboldstar.svg"
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
              <div className={styles.text1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pizzaHutComboSpecialWrapper}>
                      <div className={styles.pizzaHutCombo}>Pizza in Bali</div>
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
                        src="/iconlyregularboldstar4.svg"
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
              <div className={styles.text1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pizzaHutComboSpecialWrapper}>
                      <div className={styles.pizzaHutCombo}>Brummie Pizza</div>
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
                        src="/iconlyregularboldstar4.svg"
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
      </div>
      <div className={styles.backgroundDim} />
      <div className={styles.whatDoYouWantToRide}>
        <div className={styles.button}>
          <div className={styles.applyWrapper}>
            <div className={styles.pizzaHutCombo}>Apply</div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.textParent}>
            <div className={styles.text6}>
              <div className={styles.text}>Search Filter</div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider7.svg" />
          </div>
          <div className={styles.sortByGroup}>
            <b className={styles.bestMatch}>Sort by</b>
            <div className={styles.nearestParent}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>Nearest</div>
                  <div className={styles.radiobutton}>
                    <div className={styles.container}>
                      <div className={styles.circle} />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>Best Match</div>
                  <div className={styles.radiobutton1}>
                    <div className={styles.container1} />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>Recommendation</div>
                  <div className={styles.radiobutton1}>
                    <div className={styles.container1} />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.sortByGroup}>
            <b className={styles.bestMatch}>Resto Option</b>
            <div className={styles.nearestWrapper}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.promo}>Promo</div>
                  <div className={styles.checkbox}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.sortByGroup}>
            <b className={styles.bestMatch}>Price Range</b>
            <div className={styles.pizzaHutComboSpecialWrapper}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>Under 15$</div>
                  <div className={styles.checkbox1}>
                    <div className={styles.box}>
                      <img
                        className={styles.boxChild}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
            <div className={styles.pizzaHutComboSpecialWrapper}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>15$ to 30$</div>
                  <div className={styles.checkbox}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
            <div className={styles.pizzaHutComboSpecialWrapper}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>30$ to 50$</div>
                  <div className={styles.checkbox}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
            <div className={styles.pizzaHutComboSpecialWrapper}>
              <div className={styles.nearest}>
                <div className={styles.nearestGroup}>
                  <div className={styles.bestMatch}>Up to 50$</div>
                  <div className={styles.checkbox}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider7.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.applyWrapper}>
            <div className={styles.pizzaHutCombo}>Apply</div>
          </div>
        </div>
      </div>
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
              src="/iconlyregularlightprofile5.svg"
            />
            <div className={styles.fastFood}>Account</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
    </div>
  );
};

export default SortingBy;
