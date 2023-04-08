import styles from "./LoadingToOrder.module.css";

const LoadingToOrder = () => {
  return (
    <div className={styles.loadingToOrder}>
      <div className={styles.loadingParent}>
        <div className={styles.loading}>Loading</div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarHome}>
          <div className={styles.navbarIcon}>
            <img
              className={styles.iconlyregularbulkhome}
              alt=""
              src="/iconlyregularbulkhome.svg"
            />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularbulkhome}
              alt=""
              src="/iconlyregularlightdocument.svg"
            />
            <div className={styles.activity}>Activity</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularbulkhome}
              alt=""
              src="/iconlyregularlightwallet.svg"
            />
            <div className={styles.activity}>Wallet</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularbulkhome}
              alt=""
              src="/iconlyregularlightprofile.svg"
            />
            <div className={styles.activity}>Account</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
      <img
        className={styles.motorcycleDeliverySingleBox}
        alt=""
        src="/motorcycle-delivery-single-box@2x.png"
      />
    </div>
  );
};

export default LoadingToOrder;
