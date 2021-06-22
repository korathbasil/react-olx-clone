import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";
import styles from "./View.module.css";

function View() {
  const { adId } = useParams();

  useEffect(() => {}, []);

  return (
    <div className={styles.viewParentDiv}>
      {/* <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div> */}
      <div className={styles.viewChildDiv}>
        <div className={styles.left}>
          <div className={styles.imageView}>
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className={styles.imageSelector}></div>
          <div className={styles.infoContainer}>
            <h2>Details</h2>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.productInfo}>
            <h4>2000000</h4>
            <h4>Title goesw here</h4>
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
