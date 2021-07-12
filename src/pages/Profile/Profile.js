import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";

import styles from "./Profile.module.css";
import Header from "../../components/Header/Header";
import Ad from "../../components/Ad/Ad";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        setUser({
          id: doc.id,
          ...doc.data(),
        });
      });
    db.collection("posts")
      .where("userId", "==", id)
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
  }, []);
  return (
    <div className={styles.profile}>
      <Header />
      <div className={styles.profileChild}>
        {/* <p>{user?.displayName}</p> */}
        <div className={styles.mainInfo}>
          <img
            src="https://statics.olx.in/external/base/img/avatar_4.png"
            alt=""
          />
          <h1>{user?.displayName}</h1>
        </div>
        <h4>Published Ads</h4>
        <div className={styles.ads}>
          <div className={styles.left}>
            {ads?.map((ad) => (
              <Ad ad={ad} />
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.rightChild}>
              <p>Friends</p>
              <div>
                <div>
                  <p>Followers</p>
                  <p>3</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>3</p>
                </div>
                <div>
                  <p>Mutual Friends</p>
                  <p>3</p>
                </div>
                <button>Follow</button>
              </div>
            </div>
            <div className={styles.rightChild}>
              <p>Linked Accounts</p>
              <div>
                <div>
                  <p>Phone Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
