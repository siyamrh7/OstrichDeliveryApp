import styles from "./AddCard.module.css";

const AddCard = () => {
  return (
    <div className={styles.addCard}>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side1.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.titleTopSubTitle}>
        <img
          className={styles.iconlyregularoutlinearrow}
          alt=""
          src="/iconlyregularoutlinearrow--left.svg"
        />
        <div className={styles.lorem}>Add Credit Card</div>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.lorem}>Card Number</div>
          <div className={styles.mastercardParent}>
            <img
              className={styles.mastercardIcon}
              alt=""
              src="/mastercard.svg"
            />
            <div className={styles.div1}>4123 8412 4812 1923</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.expireParent}>
            <div className={styles.lorem}>Expire</div>
            <div className={styles.mmyyWrapper}>
              <div className={styles.mmyy}>MM/YY</div>
            </div>
          </div>
          <div className={styles.expireParent}>
            <div className={styles.lorem}>CVV</div>
            <div className={styles.wrapper}>
              <div className={styles.mmyy}>1234</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.applyWrapper}>
          <div className={styles.apply}>Add</div>
        </div>
      </div>
      <div className={styles.iosBar} />
    </div>
  );
};

export default AddCard;
