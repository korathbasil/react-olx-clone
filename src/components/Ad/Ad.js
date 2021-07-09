import styles from "./Ad.module.css";

const Ad = ({ ad }) => {
  // console.log(ad[ad.attributes.featuredAttributes[0]]);
  return (
    <div className={styles.ad}>
      <div className={styles.adTop}>
        <img src={ad.imageUrl[0]} alt="" />
      </div>
      <div className={styles.adBottom}>
        <h3>₹ {ad.price}</h3>
        <p>
          {ad.attributes[ad.featuredAttributes[0]]} -{" "}
          {ad.attributes[ad.featuredAttributes[1]]}
        </p>
        <p>{ad.title}</p>
        <div>
          <p>
            {ad.address.City} {ad.address.State}
          </p>
          <p>$ days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
