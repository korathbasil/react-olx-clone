import { Link } from "react-router-dom";

import styles from "./MinimalHeader.module.css";
import LeftArrow from "../../assets/left-arrow.png";
import OlxLogo from "../../assets/OlxLogo";

const MinimalHeader = () => (
  <header className={styles.minHeader}>
    <div className={styles.minHeaderChild}>
      <Link to="/">
        <img className={styles.backArrow} src={LeftArrow} alt="" />
      </Link>
      <Link to="/">
        <OlxLogo size={48} />
      </Link>
    </div>
  </header>
);

export default MinimalHeader;
