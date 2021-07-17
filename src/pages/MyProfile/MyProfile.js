import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import NoAdsImage from "../../assets/images/no-ads-image.png";
import styles from "./MyProfile.module.css";
import Header from "../../components/Header/Header";
import EditIcon from "../../assets/EditIcon";
import MiniAd from "../../components/MiniAd/MiniAd";
import Footer from "../../components/Footer/Footer";

const MyProfile = () => {
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
            console.log(doc.data());
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
    <div className={styles.profileParent}>
      <Header />
      <div className={styles.profileChild}>
        <div className={styles.left}>
          <div className={styles.iamgeContainer}>
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <div>
              <Link to="editProfile/picture">
                <EditIcon />
              </Link>
            </div>
          </div>
          <div className={styles.leftChild}>
            <h4>FRIENDS</h4>
            <div>
              <p>FOLLOWERS</p>
              <p>0</p>
            </div>
            <div>
              <p>FOLLOWING</p>
              <p>0</p>
            </div>
          </div>
          <div className={styles.leftChild}>
            <h4>Linked Accounts</h4>
            <div>
              <p>FOLLOWERS</p>
            </div>
            <div>
              <p>FOLLOWING</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h1>{user?.displayName}</h1>
            <Link to="/editProfile/info">
              <button>Edit Profile</button>
            </Link>
          </div>
          <div className={styles.rightAds}>
            {ads.length === 0 && (
              <div className={styles.empty}>
                <img src={NoAdsImage} alt="" />
                <h4>There is no ads</h4>
                <p>
                  When users post ads, will appear here. If you want to post
                  something you can do it now
                </p>
                <Link to="/sell">
                  <button>Start Selling</button>
                </Link>
              </div>
            )}
            {ads.map((ad) => (
              <Link to={`/view/${ad.id}`}>
                <MiniAd ad={ad} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
