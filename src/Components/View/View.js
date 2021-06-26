import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";
import styles from "./View.module.css";

function View() {
  const { adId } = useParams();
  const [ad, setAd] = useState(null);
  const [moreDetails, setMoreDetails] = useState();

  useEffect(() => {
    db.collection("products")
      .doc(adId)
      .get()
      .then((doc) => {
        const data = doc.data();
        const dataArray = Object.entries(data);
        const filteredArray = dataArray.filter((data) => {
          if (
            data[0] !== "title" &&
            data[0] !== "description" &&
            data[0] !== "price" &&
            data[0] !== "createdAt" &&
            data[0] !== "imageUrl" &&
            data[0] !== "userId"
          ) {
            return true;
          } else {
            return false;
          }
        });
        setAd(doc.data());
        setMoreDetails(filteredArray);
      });
  }, []);

  return (
    <div className={styles.viewParentDiv}>
      <div className={styles.viewChildDiv}>
        <div className={styles.left}>
          <div className={styles.imageView}>
            <img src={ad?.imageUrl} alt="" />
          </div>
          <div className={styles.imageSelector}></div>
          <div className={styles.infoContainer}>
            <h2>Details</h2>
            {moreDetails?.map((attribute) => {
              return (
                <p>
                  {attribute[0]} : {attribute[1]}
                </p>
                // <p></p>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.productInfo}>
            <h4>{ad?.price}</h4>
            <h4>{ad?.title}</h4>
            <p>Location is here</p>
          </div>
          <div className={styles.sellerInfo}>
            <h4>Name goes here</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default View;
