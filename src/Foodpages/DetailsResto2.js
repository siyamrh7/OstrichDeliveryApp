import styles from "./DetailsResto2.module.css";

const DetailsResto2 = () => {
  return (
    <div className={styles.detailsResto}>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side2.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side2.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.titleTopSubTitle}>
        <div className={styles.frameParent}>
          <div className={styles.iconlyregularoutlinearrowParent}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularoutlinearrow--left.svg"
            />
            <div className={styles.lorem}>{`Your Restaurant `}</div>
          </div>
          <img
            className={styles.iconlyregularoutlinearrow}
            alt=""
            src="/iconinforegularbulkinfo-circle1.svg"
          />
        </div>
      </div>
      <div className={styles.detailsResto1}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.namibSeafoodParent}>
                <div className={styles.namibSeafood}>Namib Seafood</div>
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
                  <div className={styles.km}>2.1km</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.openWrapper}>
                  <div className={styles.open}>Open</div>
                </div>
                <div className={styles.closeAt1900pm}>close at 19.00pm</div>
              </div>
            </div>
          </div>
          <div className={styles.mapsParent}>
            <img className={styles.mapsIcon} alt="" src="/maps.svg" />
            <img className={styles.mapsIcon} alt="" src="/fav.svg" />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.iconlyregularbulkticketParent}>
            <img
              className={styles.iconlyregularbulkticket}
              alt=""
              src="/iconlyregularbulkticket.svg"
            />
            <div className={styles.promo30OffParent}>
              <div className={styles.open}>Promo 30% Off</div>
              <div className={styles.noMinumumOrder}>
                No minumum order amount
              </div>
            </div>
          </div>
          <img
            className={styles.iconlyregularboldstar}
            alt=""
            src="/iconlyregularlightarrow--right-23.svg"
          />
        </div>
      </div>
      <div className={styles.categoryParent}>
        <div className={styles.category}>
          <div className={styles.sortByRestoPage}>
            <div className={styles.textParent}>
              <div className={styles.text}>All</div>
              <img className={styles.frameItem} alt="" src="/vector-171.svg" />
            </div>
          </div>
          <div className={styles.sortByRestoPage1}>
            <div className={styles.textParent}>
              <div className={styles.text}>Salmon</div>
              <img className={styles.frameInner} alt="" />
            </div>
          </div>
          <div className={styles.sortByRestoPage1}>
            <div className={styles.textParent}>
              <div className={styles.text}>Sashimi</div>
              <img className={styles.frameInner} alt="" />
            </div>
          </div>
          <div className={styles.sortByRestoPage1}>
            <div className={styles.textParent}>
              <div className={styles.text}>Prawns</div>
              <img className={styles.frameInner} alt="" />
            </div>
          </div>
          <div className={styles.sortByRestoPage1}>
            <div className={styles.textParent}>
              <div className={styles.text}>Best Selling</div>
              <img className={styles.frameInner} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.popularItem}>
          <div className={styles.popularItemInner}>
            <div className={styles.category}>
              <div className={styles.card}>
                <div className={styles.recommenededResto}>
                  <div className={styles.image}>
                    <img
                      className={styles.unsplashsnlfvyml8osIcon}
                      alt=""
                      src="/unsplashsnlfvyml8os@2x.png"
                    />
                    <div className={styles.heartSaveButton}>
                      <img
                        className={styles.iconlyregularboldstar}
                        alt=""
                        src="/iconlyboldheart2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <div className={styles.foodNameParent}>
                      <div className={styles.foodName}>Sashimi</div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.parent}>
                          <div className={styles.div3}>$14</div>
                          <b className={styles.b}>$</b>
                          <b className={styles.b}>20</b>
                          <div className={styles.miniText}>
                            <div className={styles.jajanan}>Save 12%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonForResto}>
                      <div className={styles.add}>Add</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.recommenededResto}>
                  <div className={styles.image}>
                    <img
                      className={styles.unsplashsnlfvyml8osIcon}
                      alt=""
                      src="/unsplashsnlfvyml8os4@2x.png"
                    />
                  </div>
                  <div className={styles.text5}>
                    <div className={styles.foodNameParent}>
                      <div className={styles.foodName}>Nigiri</div>
                      <b className={styles.b2}>$ 14</b>
                      <div className={styles.frameParent2}>
                        <div className={styles.jajananWrapper}>
                          <div className={styles.jajanan}>Jajanan</div>
                        </div>
                        <div className={styles.jajananWrapper}>
                          <div className={styles.jajanan}>Coffee</div>
                        </div>
                        <div className={styles.jajananWrapper}>
                          <div className={styles.jajanan}>Gorengan</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.minusWrapper}>
                          <img
                            className={styles.iconlyregularboldstar}
                            alt=""
                            src="/minus.svg"
                          />
                        </div>
                        <b className={styles.b}>1</b>
                        <div className={styles.minusWrapper}>
                          <img
                            className={styles.iconlyregularboldstar}
                            alt=""
                            src="/plus1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className={styles.iconlyregularlightdocument}
                        alt=""
                        src="/iconlyregularlightdocument6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popularItemInner}>
            <div className={styles.category}>
              <div className={styles.card}>
                <div className={styles.recommenededResto}>
                  <div className={styles.image}>
                    <img
                      className={styles.unsplashsnlfvyml8osIcon}
                      alt=""
                      src="/unsplashsnlfvyml8os2@2x.png"
                    />
                    <div className={styles.heartSaveButton}>
                      <img
                        className={styles.iconlyregularboldstar}
                        alt=""
                        src="/iconlyboldheart2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <div className={styles.foodNameParent}>
                      <div className={styles.foodName}>California</div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.parent}>
                          <div className={styles.div3}>$14</div>
                          <b className={styles.b}>$</b>
                          <b className={styles.b}>20</b>
                          <div className={styles.miniText}>
                            <div className={styles.jajanan}>Save 12%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonForResto}>
                      <div className={styles.add}>Add</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.recommenededResto}>
                  <div className={styles.image}>
                    <img
                      className={styles.unsplashsnlfvyml8osIcon}
                      alt=""
                      src="/unsplashsnlfvyml8os3@2x.png"
                    />
                    <div className={styles.heartSaveButton}>
                      <img
                        className={styles.iconlyregularboldstar}
                        alt=""
                        src="/iconlyboldheart2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <div className={styles.foodNameParent}>
                      <div className={styles.foodName}>Roses</div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.parent}>
                          <div className={styles.div3}>$14</div>
                          <b className={styles.b}>$</b>
                          <b className={styles.b}>20</b>
                          <div className={styles.miniText}>
                            <div className={styles.jajanan}>Save 12%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonForResto}>
                      <div className={styles.add}>Add</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cartFlying}>
        <div className={styles.frameParent5}>
          <div className={styles.itemParent}>
            <div className={styles.item}>Item</div>
            <div className={styles.item}>1</div>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularbulkbag-31.svg"
            />
          </div>
          <div className={styles.iconlyregularlightarrowRParent}>
            <img
              className={styles.iconlyregularlightarrowR1}
              alt=""
              src="/iconlyregularlightarrow--right-24.svg"
            />
            <img
              className={styles.iconlyregularlightarrowR2}
              alt=""
              src="/iconlyregularlightarrow--right-24.svg"
            />
          </div>
          <b className={styles.b8}>$ 52</b>
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
            <div className={styles.jajanan}>Activity</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightwallet1.svg"
            />
            <div className={styles.jajanan}>Wallet</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightprofile3.svg"
            />
            <div className={styles.jajanan}>Account</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
    </div>
  );
};

export default DetailsResto2;
