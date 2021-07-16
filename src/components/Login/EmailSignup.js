import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import { AVATAR_URL } from "../../config/constants";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailSignup = ({ pageHandler }) => {
  const history = useHistory();

  const [, dispatch] = useGlobalStore();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({});

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
          .updateProfile({
            displayName: signupInput.name,
            phoneNumber: signupInput.phone,
          })
          .then(() => {
            return db.collection("users").doc(res.user.uid).set({
              displayName: res.user.displayName,
              email: res.user.email,
              phone: signupInput.phone,
              description: "",
              photoURL: "",
            });
          })
          .then(() => {
            dispatch({
              type: "SET_USER",
              user: {
                id: res.user.uid,
                displayName: res.user.displayName,
                phone: signupInput.phone,
                email: res.user.email,
                description: "",
                profilePicture: "",
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
          .catch((e) => console.log(e.message));
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("email") || err.message.includes("Email"))
          setErrorMessages({
            email: err.message,
          });
        if (
          err.message.includes("password") ||
          err.message.includes("Password")
        )
          setErrorMessages({
            password: err.message,
          });
      });
  };
  return (
    <div className={styles.emailSignupContainer}>
      <div className={styles.arrowContainer} onClick={() => pageHandler("")}>
        <BackArrowIcon />
      </div>
      <OlxLogo size={50} />
      <h3>Enter your details</h3>
      <form className={styles.emailSignupForm} onSubmit={doSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={signupInput.name}
          onChange={signupInputStateModifier}
        />

        <div>
          <p></p>
        </div>
        <input
          style={{
            border: errorMessages?.email
              ? "2px solid red"
              : "2px solid var(--black)",
          }}
          type="email"
          name="email"
          placeholder="Email"
          value={signupInput.email}
          onChange={signupInputStateModifier}
        />
        <div>{<p>{errorMessages.email}</p>}</div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={signupInput.phone}
          onChange={signupInputStateModifier}
        />
        <div>
          <p></p>
        </div>
        <input
          style={{
            border: errorMessages?.password
              ? "2px solid red"
              : "2px solid var(--black)",
          }}
          type="Password"
          name="password"
          placeholder="Password"
          value={signupInput.password}
          onChange={signupInputStateModifier}
        />
        <div>{errorMessages?.password && <p>{errorMessages.password}</p>}</div>
        <button type="submit">Signup</button>
      </form>
      <p>
        We won't reveal your details to anyone else nor use it to send you spam
      </p>
    </div>
  );
};

export default EmailSignup;
