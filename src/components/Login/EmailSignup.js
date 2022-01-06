import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailSignup = ({ pageHandler }) => {
  const navigate = useNavigate();

  const [, dispatch] = useGlobalStore();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});

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
            navigate("/");
          })
          .catch((e) => console.error(e.message));
      })
      .catch((err) => {
        if (
          err.message.includes("email") ||
          err.message.includes("Email") ||
          err.message.includes("user") ||
          err.message.includes("User")
        ) {
          setErrorMessage({
            email: err.message,
          });
        }
        if (
          err.message.includes("password") ||
          err.message.includes("Password")
        )
          setErrorMessage({
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
        <input
          style={{
            border: errorMessage?.email
              ? "2px solid red"
              : "2px solid var(--black)",
          }}
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
          style={{
            border: errorMessage?.password
              ? "2px solid red"
              : "2px solid var(--black)",
          }}
          type="Password"
          name="password"
          placeholder="Password"
          value={signupInput.password}
          onChange={signupInputStateModifier}
        />
        <div>
          {errorMessage?.email && <p>{errorMessage.email}</p>}
          {errorMessage?.password && <p>{errorMessage.password}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        We won't reveal your details to anyone else nor use it to send you spam
      </p>
    </div>
  );
};

export default EmailSignup;
