import { Link, useHistory } from "react-router-dom";

import styles from "./MiniHeader.module.css";
import BackArrowIcon from "../../assets/BackArrowIcon";
import OlxLogo from "../../assets/OlxLogo";

const MinimalHeader = () => {
  const history = useHistory();
  return (
    <header className={styles.minHeader}>
      <div className={styles.minHeaderChild}>
        <div onClick={() => history.goBack()}>
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
