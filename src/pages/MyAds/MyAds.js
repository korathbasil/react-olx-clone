import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import NoAdsImage from "../../assets/images/no-ads-image.png";
import styles from "./MyAds.module.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import MiniAd from "../../components/MiniAd/MiniAd";

const MyAds = () => {
  const [{ user }] = useGlobalStore();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("posts")
        .where("userId", "==", user.id)
        .get()
        .then((snapshot) => {
          let adsArray = [];
          snapshot.forEach((doc) => {
            adsArray.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setAds(adsArray);
        });
    }
  }, [user]);
  return (
    <div className={styles.myAds}>
      <Header />
      <Menu />
      <div className={styles.myAdsChild}>
        <div className={styles.switcher}>
          <div className={styles.adsContainer}>
            <div className={styles.myAds}>
              {ads.length === 0 && (
                <div className={styles.empty}>
                  <img src={NoAdsImage} alt="" />
                  <h4>You haven't listed anything yet.</h4>
                  <span>Let go of what you</span>
                  <span>don't use anymore</span>
                  <Link to="/sell">
                    <button>Start Selling</button>
                  </Link>
                </div>
              )}
              {ads.map((ad) => (
                <MiniAd ad={ad} />
              ))}
            </div>
            <div className={styles.favouriteAds}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
