import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { db } from "../../firebase";
import styles from "./Feed.module.css";
import Ad from "../Ad/Ad";

const Feed = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    db.collection("products")
      .get()
      .then(({ docs }) => {
        const products = docs.map((doc) => {
          return {
            uid: doc.id,
            ...doc.data(),
          };
        });
        setAds(products);
      });
  }, []);
  return (
    <div className={styles.feedParent}>
      <div className={styles.feedChild}>
        <h2>Fresh Recommendations</h2>
        <div className={styles.adsContainer}>
          {ads?.map((ad) => (
            <Link to={`/view/${ad.uid}`}>
              <Ad ad={ad} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
