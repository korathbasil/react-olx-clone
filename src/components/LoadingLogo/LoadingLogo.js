import styles from "./LoadingLogo.module.css";
import OlxLogo from "../../assets/OlxLogo";

const LoadingLogo = () => {
  return (
    <div className={styles.parent}>
      <div>
        <OlxLogo size={300} />
      </div>
    </div>
  );
};

export default LoadingLogo;
