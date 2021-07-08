import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import styles from "./Login.module.css";
import OlxLogo from "../../assets/OlxLogo";
import BackArrowIcon from "../../assets/BackArrowIcon";

const EmailLogin = ({ pageHandler }) => {
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
    console.log(loginInput);
    auth
      .signInWithEmailAndPassword(loginInput.email, loginInput.password)
      .then(async (result) => {
        console.log(result.user);
        let phone, description, userId;
        await db
          .collection("users")
          .doc(result.user.uid)
          .get()
          .then((snapshot) => {
            console.log(snapshot);
            snapshot.forEach((doc) => {
              // phone = doc.data().phone;
              // description = doc.data().description;
              // userId = doc.id;
              console.log(doc.data());
            });
          });
        // dispatch({
        //   type: "SET_USER",
        //   user: {
        //     uid: result.user.uid,
        //     displayName: result.user.displayName,
        //     email: result.user.email,
        //     phone: phone,
        //     description: description,
        //     userId: userId,
        //   },
        // });
        // dispatch({
        //   type: "SET_LOGIN_OVERLAY",
        //   status: false,
        // });
        // console.log(result.user);
        // setLoginInput({
        //   email: "",
        //   password: "",
        // });
        // history.push("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.emailLoginContainer}>
      <div className={styles.arrowContainer} onClick={() => pageHandler("")}>
        <BackArrowIcon />
      </div>
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
