import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailLogin = ({ pageHandler }) => {
  const history = useHistory();

  const [, dispatch] = useGlobalStore();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const inputFieldModifier = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = (e) => {
    e.preventDefault();
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
        history.push("/");
      })
      .catch((e) => console.log(e));
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
          type="email"
          name="email"
          placeholder="E-mail"
          value={loginInput.email}
          onChange={(e) => inputFieldModifier(e)}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={loginInput.password}
          onChange={(e) => inputFieldModifier(e)}
        />
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
