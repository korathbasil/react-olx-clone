import { useState } from "react";

import styles from "./Login.module.css";
import EmailLogin from "./EmailLogin";
import EmailSignup from "./EmailSignup";
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";

const Login = () => {
  const [openedPage, setOpenedPage] = useState("");
  const openedPageHandler = (page) => {
    setOpenedPage(page);
  };
  return (
    <div className={styles.loginParent}>
      <div className={styles.login}>
        {openedPage === "" && (
          <div className={styles.loginHome}>
            <div className={styles.linksContainer}>
              <button onClick={() => openedPageHandler("login")}>
                Login with Email
              </button>
              <button>
                <GoogleIcon />
                Continue with Google
              </button>
              <button>
                <FacebookIcon />
                Continue with facebook
              </button>
              <h4>OR</h4>
              <button onClick={() => openedPageHandler("signup")}>
                Signup with Email
              </button>
            </div>
          </div>
        )}
        {openedPage === "login" && <EmailLogin />}
        {openedPage === "signup" && <EmailSignup />}
      </div>
    </div>
  );
};

export default Login;
