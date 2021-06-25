import styles from "./EditProfile.module.css";
import Header from "../../Components/Header/Header";

const EditProfile = () => {
  return (
    <div className={styles.editProfileParent}>
      <Header />
      <div className={styles.editProfileChild}>
        <div className={styles.left}>
          <p>Edit Profile</p>
          <p>Edit Profile Picture</p>
          <button>View Profile</button>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default EditProfile;
