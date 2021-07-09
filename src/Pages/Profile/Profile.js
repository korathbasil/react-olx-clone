import styles from "./Profile.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Header />
      <div className={styles.profileChild}>
        <p>hello</p>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
