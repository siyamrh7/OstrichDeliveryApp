import styles from "./Ordering.module.css";

const Ordering = () => {
  return (
    <div className={styles.ordering}>
      <img
        className={styles.mapsicleMapIcon}
        alt=""
        src="/mapsicle-map@2x.png"
      />
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
      <div className={styles.orderingInner}>
        <div className={styles.frameParent}>
          <div className={styles.backWrapper}>
            <div className={styles.back}>Back</div>
          </div>
          <div className={styles.applyWrapper}>
            <div className={styles.back}>Apply</div>
          </div>
        </div>
      </div>
      <div className={styles.a}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.cookingPotWrapper}>
                  <img
                    className={styles.cookingPotIcon}
                    alt=""
                    src="/cooking-pot@2x.png"
                  />
                </div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.cookingPotWrapper}>
                  <img
                    className={styles.foodBarIcon}
                    alt=""
                    src="/food-bar@2x.png"
                  />
                </div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.deliveryScooterWrapper}>
                  <img
                    className={styles.deliveryScooterIcon}
                    alt=""
                    src="/delivery-scooter@2x.png"
                  />
                </div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.deliveryScooterWrapper}>
                  <img
                    className={styles.takeAwayFood}
                    alt=""
                    src="/take-away-food@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.yourFoodIsBeingPreparedParent}>
              <div className={styles.yourFoodIs}>
                Your Food Is Being Prepared
              </div>
              <div className={styles.theHalalFood}>
                The Halal Food is Preparing Your food
              </div>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector-20.svg" />
          </div>
          <div className={styles.motorcycleDeliveryMultipleBParent}>
            <img
              className={styles.motorcycleDeliveryMultipleB}
              alt=""
              src="/motorcycle-delivery-multiple-boxes@2x.png"
            />
            <div className={styles.yourDeliveryIsOnTheWayWrapper}>
              <div className={styles.yourDeliveryIsContainer}>
                <p className={styles.yourDeliveryIs}>{`Your delivery is `}</p>
                <p className={styles.yourDeliveryIs}>on the way</p>
              </div>
            </div>
            <b className={styles.min}>31 Min</b>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-9@2x.png"
              />
              <b className={styles.pangestu}>PANGESTU</b>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.iconlyregularlightcallWrapper}>
                <img
                  className={styles.iconlyregularlightcall}
                  alt=""
                  src="/iconlyregularlightcall.svg"
                />
              </div>
              <div className={styles.iconlyregularlightchatWrapper}>
                <img
                  className={styles.iconlyregularlightcall}
                  alt=""
                  src="/iconlyregularlightchat.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.backWrapper}>
            <div className={styles.back}>Back</div>
          </div>
          <div className={styles.applyWrapper}>
            <div className={styles.back}>Apply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
