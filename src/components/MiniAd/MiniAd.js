import styles from "./MiniAd.module.css";

const MiniAd = ({ ad }) => {
  return (
    <div className={styles.miniAd}>
      <div className={styles.image}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>

      <div className={styles.title}>
        <h2>{ad.title}</h2>
      </div>
      <div className={styles.price}>
        <h2>₹{ad.price}</h2>
      </div>
      <div className={styles.date}>{ad.createdAt}</div>
    </div>
  );
};

export default MiniAd;
