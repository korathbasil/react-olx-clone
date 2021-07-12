import { Link } from "react-router-dom";

import NoAdsImage from "../../assets/images/no-ads-image.png";

import styles from "./MyAds.module.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

const MyAds = () => {
  return (
    <div className={styles.myAds}>
      <Header />
      <Menu />
      <div className={styles.myAdsChild}>
        <div className={styles.switcher}>
          <p>Ads</p>
          <p>Favourites</p>
          <div className={styles.adsContainer}>
            <div className={styles.myAds}>
              <div className={styles.empty}>
                <img src={NoAdsImage} alt="" />
                <h4>You haven't listed anything yet.</h4>
                <span>Let go of what you</span>
                <span>don't use anymore</span>
                <Link to="/sell">
                  <button>Start Selling</button>
                </Link>
              </div>
            </div>
            <div className={styles.favouriteAds}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
