import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuChild}>
        <div className={styles.toggle}>
          <h4>ALL CATEGORIES</h4>
        </div>
        <div className={styles.linksContainer}>
          <p>Cars</p>
          <p>Motor Cycles</p>
          <p>Mobile Phones</p>
          <p>For Sale: Houses & Appartments</p>
          <p>Scooters</p>
          <p>Commercial & Other Vehicles</p>
          <p>For Rent: Houses & Appartments</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
