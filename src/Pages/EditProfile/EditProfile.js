import { Route, Switch, Link } from "react-router-dom";

import { db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./EditProfile.module.css";
import Header from "../../Components/Header/Header";

const EditProfile = () => {
  const [{ user }, dispatch] = useGlobalStore();

  const updateProfile = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.editProfileParent}>
      <Header />
      <div className={styles.editProfileChild}>
        <div className={styles.left}>
          <Link to="/editProfile/info">
            <p>Edit Profile</p>
          </Link>
          <Link to="/editProfile/picture">
            <p>Edit Profile Picture</p>
          </Link>
          <button>View Profile</button>
        </div>
        <div className={styles.right}>
          <Switch>
            <Route path="/editProfile/info">
              <div className={styles.rightTop}>
                <h3>Edit Profile</h3>
              </div>
              <form onSubmit={updateProfile}>
                <div className={styles.rightMiddle}>
                  <p>Basic information</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={user?.displayName}
                  />
                  <input
                    type="text"
                    placeholder="About me (Optional)"
                    name="description"
                  />
                  <hr />
                  <p>Contact information</p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={user?.phone}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user?.email}
                  />
                </div>
                <div className={styles.rightBottom}>
                  <p>Discard</p>
                  <button type="submit">Save Changes</button>
                </div>
              </form>
            </Route>
            <Route path="/editProfile/picture">
              <h2>Profile Picture</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
