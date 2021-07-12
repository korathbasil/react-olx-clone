import styles from "./MyAds.module.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

const MyAds = () => {
  return (
    <div className={styles.myAds}>
      <Header />
      <Menu />
      <p>This is my ads</p>
    </div>
  );
};

export default MyAds;
