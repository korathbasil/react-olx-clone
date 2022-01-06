import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailLogin = ({ pageHandler }) => {
  const navigate = useNavigate();

  const [, dispatch] = useGlobalStore();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  const inputFieldModifier = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = (e) => {
    e.preventDefault();
    setErrorMessage({});
    auth
      .signInWithEmailAndPassword(loginInput.email, loginInput.password)
      .then((result) => {
        return db.collection("users").doc(result.user.uid).get();
      })
      .then((userDoc) => {
        dispatch({
          type: "SET_USER",
          user: {
            id: userDoc.id,
            displayName: userDoc.data().displayName,
            email: userDoc.data().email,
            phone: userDoc.data().phone,
            description: userDoc.data().description,
          },
        });
        dispatch({
          type: "SET_LOGIN_OVERLAY",
          status: false,
        });
        setLoginInput({
          email: "",
          password: "",
        });
        navigate("/");
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
    <div className={styles.emailLoginContainer}>
      <div className={styles.arrowContainer} onClick={() => pageHandler("")}>
        <BackArrowIcon />
      </div>
      <OlxLogo size={50} />
      <h3>Enter your Email and Password</h3>
      <form className={styles.emailLoginForm} onSubmit={doLogin}>
        <input
          style={{
            border: errorMessage?.email
              ? "2px solid red"
              : "2px solid var(--black)",
          }}
          type="email"
          name="email"
          placeholder="E-mail"
          value={loginInput.email}
          onChange={(e) => inputFieldModifier(e)}
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
          value={loginInput.password}
          onChange={(e) => inputFieldModifier(e)}
        />
        <div>
          {errorMessage?.email && <p>{errorMessage.email}</p>}
          {errorMessage?.password && <p>{errorMessage.password}</p>}
        </div>
        <p>
          If you are a new user please select any other option from previous
          page
        </p>
        <button type="submit">Login</button>
      </form>
      <p>
        We won't reveal your email to anyone else nor use it to send you spam
      </p>
    </div>
  );
};

export default EmailLogin;
