import styles from "./Feed.module.css";
import Ad from "../Ad/Ad";

const Feed = () => {
  return (
    <div className={styles.feedParent}>
      <div className={styles.feedChild}>
        <h2>Iam Feed Components</h2>
        <div className={styles.adsContainer}>
          <Ad />
        </div>
      </div>
    </div>
  );
};

export default Feed;
