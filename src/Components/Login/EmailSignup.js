import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailSignup = ({ pageHandler }) => {
  const history = useHistory();

  const [{}, dispatch] = useGlobalStore();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const signupInputStateModifier = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const doSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(signupInput.email, signupInput.password)
      .then((res) => {
        res.user
          .updateProfile({ displayName: signupInput.name })
          .then(() => {
            return db.collection("users").add({
              uid: res.user.uid,
              phone: signupInput.phone,
              description: "",
            });
          })
          .then((result) => {
            dispatch({
              type: "SET_USER",
              user: {
                uid: res.user.uid,
                userId: result.id,
                displayName: res.user.displayName,
                phone: result.phone,
                email: result.email,
                description: result.description,
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
          onChange={signupInputStateModifier}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupInput.email}
          onChange={signupInputStateModifier}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={signupInput.phone}
          onChange={signupInputStateModifier}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={signupInput.password}
          onChange={signupInputStateModifier}
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
