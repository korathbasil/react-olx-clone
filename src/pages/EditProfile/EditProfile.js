import { useState, useEffect, useRef } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { auth, db, storage } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./EditProfile.module.css";
import Header from "../../components/Header/Header";
import ProfilePicture from "../../assets/ProfilePicture";
import Footer from "../../components/Footer/Footer";

const EditProfile = () => {
  const [{ user }] = useGlobalStore();

  const [activeLink, setActiveLink] = useState("info");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const displayNameInput = useRef();
  const descriptionInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  useEffect(() => {
    if (user) {
      setProfilePictureUrl(user.profilePicture);
    }
  }, [user]);

  const updateProfile = (e) => {
    e.preventDefault();

    const displayName = displayNameInput.current.value;
    const description = descriptionInput.current.value;
    const phone = phoneInput.current.value;
    const email = emailInput.current.value;

    if (user.displayName !== displayName) {
      auth.currentUser
        .updateProfile({ displayName: displayName })
        .then(() => {
          return db.collection("users").doc(user.userId).update({
            phone: phone,
            email: email,
            description: description,
          });
        })
        .then(() => {});
    } else {
      db.collection("users").doc(user.userId).update({
        phone: phone,
        email: email,
        description: description,
      });
    }
  };

  const uploadNewProfilePicture = () => {
    if (user.profilePicture !== profilePicture) {
      // Upload new Profile Picture
      storage
        .ref(`/profiles/${profilePicture.name}`)
        .put(profilePicture)
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        })
        .then((url) => {
          auth.currentUser.updateProfile({ photoURL: url }).then(() => {});
        });
    } else {
    }
  };

  return (
    <div className={styles.editProfileParent}>
      <Header />
      <div className={styles.editProfileChild}>
        <div className={styles.left}>
          <Link to="/editProfile/info">
            <p
              onClick={() => setActiveLink("info")}
              style={{
                color: activeLink === "info" ? "var(--black)" : "grey",
                fontWeight: activeLink === "info" ? 800 : 500,
              }}
            >
              Edit Profile
            </p>
          </Link>
          <Link to="/editProfile/picture">
            <p
              onClick={() => setActiveLink("picture")}
              style={{
                color: activeLink === "picture" ? "var(--black)" : "grey",
                fontWeight: activeLink === "picture" ? 800 : 500,
              }}
            >
              Edit Profile Picture
            </p>
          </Link>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
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
                    readOnly
                  />
                </div>
                <div className={styles.rightBottom}>
                  <p>Discard</p>
                  <button type="submit">Save Changes</button>
                </div>
              </form>
            </Route>
            <Route path="/editProfile/picture">
              <div className={styles.rightTop}>
                <h3>Profile Picture</h3>
              </div>
              <div className={styles.pictureRightMiddle}>
                <div className={styles.pictureDisplay}>
                  {(user?.profilePicture === "" ||
                    user?.profilePicture == null) && (
                    <ProfilePicture size={"200px"} />
                  )}
                  {profilePictureUrl && <img src={profilePictureUrl} alt="" />}
                </div>
                <div>
                  <p>
                    Clear photos are an important way for buyers and sellers to
                    learn about each other. Be sure doesn’t include any personal
                    or sensitive info you’d rather not have others see.
                  </p>
                  <input
                    type="file"
                    onChange={(e) => {
                      setProfilePicture(e.target.files[0]);
                      setProfilePictureUrl(
                        URL.createObjectURL(e.target.files[0])
                      );
                    }}
                  />
                </div>
              </div>
              <div className={styles.rightBottom}>
                <p>Discard</p>
                <button type="submit" onClick={uploadNewProfilePicture}>
                  Upload
                </button>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
