import { useState } from "react";

import useGlobalStore from "../../store/GlobalStore";

import LoginEntryPointImage from "../../assets/images/login-entry-point-image.png";
import styles from "./Login.module.css";
import CloseIcon from "../../assets/CloseIcon";
import EmailLogin from "./EmailLogin";
import EmailSignup from "./EmailSignup";
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";

const Login = () => {
  const [, dispatch] = useGlobalStore();
  const [openedPage, setOpenedPage] = useState("");

  const openedPageHandler = (page) => {
    setOpenedPage(page);
  };

  const closeLoginOverlay = () => {
    dispatch({
      type: "SET_LOGIN_OVERLAY",
      status: false,
    });
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.login}>
        <div className={styles.closeIconContainer} onClick={closeLoginOverlay}>
          <CloseIcon />
        </div>
        {openedPage === "" && (
          <div className={styles.loginHome}>
            <div className={styles.imageContainer}>
              <img src={LoginEntryPointImage} alt="" />
              <h4>Help make OLX safer place to buy and sell</h4>
            </div>
            <div className={styles.linksContainer}>
              <button onClick={() => openedPageHandler("login")}>
                Login with Email
              </button>
              {/* <button>
                <GoogleIcon />
                Continue with Google
              </button>
              <button>
                <FacebookIcon />
                Continue with facebook
              </button> */}
              <h4>OR</h4>
              <button onClick={() => openedPageHandler("signup")}>
                Signup with Email
              </button>
              <p>We won't share your personal details with anyone</p>
              <p>
                If you continue, you are accepting OLX Terms and Conditions and
                Privacy Policy
              </p>
            </div>
          </div>
        )}
        {openedPage === "login" && (
          <EmailLogin pageHandler={openedPageHandler} />
        )}
        {openedPage === "signup" && (
          <EmailSignup pageHandler={openedPageHandler} />
        )}
      </div>
    </div>
  );
};

export default Login;
