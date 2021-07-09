import styles from "./MiniFooter.module.css";

const MiniFooter = () => {
  return (
    <div className={styles.miniFooter}>
      <div className={styles.miniFooterChild}>
        <p>Sitemap</p>
        <div>
          <h4>Free Classifieds in India</h4>
          <p>© 2006-2021</p>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
