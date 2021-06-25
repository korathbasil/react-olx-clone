import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailSignup = ({ pageHandler }) => {
  const history = useHistory();

  const [{ user }, dispatch] = useGlobalStore();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const inputFieldModifier = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const doSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(signupInput.email, signupInput.password)
      .then((result) => {
        result.user
          .updateProfile({ displayName: signupInput.name })
          .then((res) => {
            return db.collection("users").add({
              uid: result.user.uid,
              phone: signupInput.phone,
            });
          })
          .then((result) => {
            dispatch({
              type: "SET_USER",
              user: {
                uid: result.uid,
                displayName: signupInput.name,
                phone: result.phone,
                email: result.email,
              },
            });
            setSignupInput({
              name: "",
              email: "",
              phone: "",
              password: "",
            });
            dispatch({
              type: "SET_LOGIN_OVERLAY",
              status: false,
            });
            history.push("/");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.emailSignupContainer}>
      <div className={styles.arrowContainer} onClick={() => pageHandler("")}>
        <BackArrowIcon />
      </div>
      <OlxLogo />
      <h3>Enter your details</h3>
      <form className={styles.emailSignupForm} onSubmit={doSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={signupInput.name}
          onChange={(e) => inputFieldModifier(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupInput.email}
          onChange={(e) => inputFieldModifier(e)}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={signupInput.phone}
          onChange={(e) => inputFieldModifier(e)}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={signupInput.password}
          onChange={(e) => inputFieldModifier(e)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        We won't reveal your details to anyone else nor use it to send you spam
      </p>
    </div>
  );
};

export default EmailSignup;
