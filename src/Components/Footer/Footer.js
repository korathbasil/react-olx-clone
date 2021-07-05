import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerParent}>
      <div className={styles.top}>
        <div className={styles.footerChild}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footerChild}></div>
      </div>
    </div>
  );
};

export default Footer;
