import styles from "./Ad.module.css";

const Ad = () => {
  return (
    <div className={styles.ad}>
      <div className={styles.adTop}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprestigeportraits.com%2Fwp-content%2Fthemes%2Fprestige%2Fassets%2Fbuild%2Fimages%2Fgalleries%2Fgallery-2%2Fgallery-image-3.jpg&f=1&nofb=1"
          alt=""
        />
      </div>
      <div className={styles.adBottom}>
        <p>kjbh</p>
      </div>
    </div>
  );
};

export default Ad;
