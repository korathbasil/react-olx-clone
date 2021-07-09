import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase";

import styles from "./Profile.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        setUser({
          id: doc.id,
          ...doc.data(),
        });
      });
  }, []);
  return (
    <div className={styles.profile}>
      <Header />
      <div className={styles.profileChild}>
        <p>{user?.displayName}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
