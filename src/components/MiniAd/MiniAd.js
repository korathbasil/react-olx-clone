import styles from "./MiniAd.module.css";

const MiniAd = ({ ad }) => {
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
      <div className={styles.date}>{ad.createdAt}</div>
    </div>
  );
};

export default MiniAd;
