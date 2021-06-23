import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";

const EmailSignup = () => {
  const history = useHistory();
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
          .then(() => {
            return db.collection("users").add({
              uid: result.user.uid,
              name: signupInput.name,
              phone: signupInput.phone,
            });
          })
          .then((res) => {
            console.log(res);
            setSignupInput({
              name: "",
              email: "",
              phone: "",
              password: "",
            });
            history.push("/");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.emailSignupContainer}>
      <OlxLogo />
      <h3>Enter your details</h3>
      <div className={styles.emailSignupForm}>
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
        <input type="tel" name="phone" placeholder="Phone number" />
        <input type="Password" name="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </div>
      <p>
        We won't reveal your details to anyone else nor use it to send you spam
      </p>
    </div>
  );
};

export default EmailSignup;
