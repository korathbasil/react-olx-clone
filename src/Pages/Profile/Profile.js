import styles from "./Profile.module.css";
import Header from "../../Components/Header/Header";
import EditIcon from "../../assets/EditIcon";
import Footer from "../../Components/Footer/Footer";

const Profile = () => {
  return (
    <div className={styles.profileParent}>
      <Header />
      <div className={styles.profileChild}>
        <div className={styles.left}>
          <div className={styles.iamgeContainer}>
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <div>
              <EditIcon />
            </div>
          </div>
          .
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h1>ALEX JAMES</h1>
            <button>Edit Profile</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Profile;