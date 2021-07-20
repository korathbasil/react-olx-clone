import { useState, useEffect } from "react";
import format from "date-fns/format";

import styles from "./MiniAd.module.css";

const MiniAd = ({ ad }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    formatDate();
  });

  function formatDate() {
    const createdAt = new Date(ad.createdAt.seconds * 1000);

    setDate(format(createdAt, "MMMM dd yyyy"));
  }

  return (
    <div className={styles.miniAd}>
      <div className={styles.image}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>

      <div className={styles.title}>
        <h4>{ad.title}</h4>
      </div>
      <div className={styles.price}>
        <h4>₹{ad.price}</h4>
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default MiniAd;
