import { Route, Switch, Link } from "react-router-dom";

import styles from "./EditProfile.module.css";
import Header from "../../Components/Header/Header";

const EditProfile = () => {
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
              <h2>Profile</h2>
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
