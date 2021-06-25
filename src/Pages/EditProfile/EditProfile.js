import { useRef } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./EditProfile.module.css";
import Header from "../../Components/Header/Header";

const EditProfile = () => {
  const [{ user }, dispatch] = useGlobalStore();

  const displayNameInput = useRef();
  const descriptionInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const updateProfile = (e) => {
    e.preventDefault();

    const displayName = displayNameInput.current.value;
    const description = descriptionInput.current.value;
    const phone = phoneInput.current.value;
    const email = emailInput.current.value;

    if (user.displayName !== displayName) {
      auth.current.user
        .updateProfile({ displayName: displayName })
        .then(() => {});
    }
    db.collection("users");
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
                    name="displayName"
                    placeholder="name"
                    defaultValue={user?.displayName}
                    ref={displayNameInput}
                    required
                  />
                  <input
                    type="text"
                    placeholder="About me (Optional)"
                    name="description"
                    defaultValue={user?.description}
                    ref={descriptionInput}
                    required
                  />
                  <hr />
                  <p>Contact information</p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    defaultValue={user?.phone}
                    ref={phoneInput}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={user?.email}
                    ref={emailInput}
                    required
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
