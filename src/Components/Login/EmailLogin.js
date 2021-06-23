import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";

const EmailLogin = () => {
  const history = useHistory();

  const [{}, dispatch] = useGlobalStore();

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
        dispatch({
          type: "SET_USER",
          user: {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
          },
        });
        dispatch({
          type: "SET_LOGIN_OVERLAY",
          status: false,
        });
        console.log(result.user);
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
      <OlxLogo />
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
