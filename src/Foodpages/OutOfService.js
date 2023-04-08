import { useParams } from "react-router-dom";
import styles from "./OutOfService.module.css";
import CloseHeader from "../components/CloseHeader";
const OutOfService = () => {
  const params=useParams()

  return (
    <div className={styles.outOfService}>
     <CloseHeader text={"Search"}/>
      <div className={styles.searchBar}>
        <div className={styles.magnifyingglassParent}>
          <img
            className={styles.magnifyingglassIcon}
            alt=""
            src="/magnifyingglass.svg"
          />
          <input  className={styles.text} placeholder={params.search} />
        </div>
        <img className={styles.searchBarChild} alt="" src="/frame-1086.svg" />
      </div>
     
      <img className={styles.dividerIcon} alt="" src="/divider7.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <b className={styles.wereSorryWeContainer}>
          <p className={styles.wereSorryWe}>{`We're sorry, we don't have `}</p>
          <p className={styles.wereSorryWe}>that product in stock</p>
        </b>
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
              src="/iconlyregularlightdocument8.svg"
            />
            <div className={styles.activity}>Activity</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightwallet2.svg"
            />
            <div className={styles.activity}>Wallet</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightprofile4.svg"
            />
            <div className={styles.activity}>Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutOfService;
