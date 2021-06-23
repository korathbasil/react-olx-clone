import styles from "./Login.module.css";
import EmailLogin from "./EmailLogin";
import EmailSignup from "./EmailSignup";
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";

const Login = () => {
  return (
    <div className={styles.loginParent}>
      <div className={styles.login}>
        {/* <div className={styles.linksContainer}>
          <button>Login with Email</button>
          <button>
            <GoogleIcon />
            Continue with Google
          </button>
          <button>
            <FacebookIcon />
            Continue with facebook
          </button>
          <h4>OR</h4>
          <button>Signup with Email</button>
        </div> */}
        {/* <EmailLogin /> */}
        <EmailSignup />
      </div>
    </div>
  );
};

export default Login;
