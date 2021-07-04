import styles from "./Ad.module.css";

const Ad = ({ ad }) => {
  return (
    <div className={styles.ad}>
      <div className={styles.adTop}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>
      <div className={styles.adBottom}>
        <h3>₹ {ad.price}</h3>
        <p>2010 - 1000 KM</p>
        <p>{ad.title}</p>
        <div>
          <p>
            {ad.City} {ad.State}
          </p>
          <p>$ days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
