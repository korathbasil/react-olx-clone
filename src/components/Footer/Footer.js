import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.linkCoumns}>
            <h4>POPULAR LOCATIONS</h4>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>
          <div className={styles.linkCoumns}>
            <h4>TRENDING LOCATIONS</h4>
            <p>Bhuwaneshwar</p>
            <p>Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </div>
          <div className={styles.linkCoumns}>
            <h4>ABOUT US</h4>
            <p>About OLX Group</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>OLX People</p>
            <p>Wash Jobs</p>
          </div>
          <div className={styles.linkCoumns}>
            <h4>OLX</h4>
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy Information</p>
          </div>
          <div className={styles.linkCoumns}>
            <h4>FOLLOW US</h4>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomChild}>
            <h4>Other Countries</h4>
            <p>Pakistan - South Africa - Indonesia</p>
          </div>
          <div className={styles.bottomChild}>
            <h4>Free Classifieds in India</h4>
            <p>© 2006-2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
