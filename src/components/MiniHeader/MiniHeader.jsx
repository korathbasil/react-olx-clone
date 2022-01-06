import { Link, useNavigate } from "react-router-dom";

import styles from "./MiniHeader.module.css";
import BackArrowIcon from "../../assets/BackArrowIcon";
import OlxLogo from "../../assets/OlxLogo";

const MinimalHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.minHeader}>
      <div className={styles.minHeaderChild}>
        <div onClick={() => navigate(-1)}>
          <BackArrowIcon />
        </div>
        <Link to="/">
          <OlxLogo size={48} />
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
