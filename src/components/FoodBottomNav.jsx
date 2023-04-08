import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import styles from "./FoodBottom.module.css";

const FoodBottomNav = () => {
  const location = useLocation()
    
  return (
    <div className={styles.navbar}>
    <div className={styles.navbar2}>
      {
        location.pathname=="/foods" ? (
      <Link to={'/foods'} className={styles.navbarFoodDelivery}>
        <img
          className={styles.iconlyregularlightarrowD}
          alt=""
          src="/iconlyregularbulkdiscovery.svg"
        />
        <div className={styles.active}>Explore</div>
      </Link>

        ):(
          <Link to={'/foods'}  className={styles.navbarFoodDelivery}>
          <img
            className={styles.iconlyregularoutlinearrow}
            alt=""
            src="/iconlyregularlightdiscovery.svg"
          />
          <div className={styles.lorem}>Explore</div>
        </Link>
        )
      }
         {
        location.pathname=="/foods/activity" ? (
      <Link to={'/foods'} className={styles.navbarFoodDelivery}>
        <img
          className={styles.iconlyregularlightarrowD}
          alt=""
          src="/iconlyregularbulkdocument.svg"
        />
        <div className={styles.active}>Activity</div>
      </Link>
      
        ):(
          <Link to={'/foods/activity'} className={styles.navbarFoodDelivery1}>
          <img
            className={styles.iconlyregularlightarrowD}
            alt=""
            src="/iconlyregularlightdocument9.svg"
          />
          <div className={styles.lorem}>Activity</div>
        </Link>
        )
      }
       {
        location.pathname=="/foods/chats" ? (
      <Link to={'/foods'} className={styles.navbarFoodDelivery}>
        <img
          className={styles.iconlyregularlightarrowD}
          alt=""
          src="/iconlyregularbulkchat.svg"
        />
        <div className={styles.active}>Chat</div>
      </Link>
      
        ):(
          <Link to={'/foods/chats'} className={styles.navbarFoodDelivery1}>
          <img
            className={styles.iconlyregularlightarrowD}
            alt=""
            src="/iconlyregularlightchat2.svg"
          />
          <div className={styles.lorem}>Chat</div>
        </Link>
        )
      }
    
    </div>
  </div>
  )
}

export default FoodBottomNav