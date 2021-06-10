import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  })

  const inputFieldModifier = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value
    })
  }

  const doLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(loginInput.email, loginInput.password)
    .then((user) => {
      setLoginInput({
        email: "",
        password: ""
      });
      history.push('/')
    })
    .catch(e => console.log(e))
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            value={loginInput.email}
            onChange={(e) => inputFieldModifier(e)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={loginInput.password}
            onChange={(e) => inputFieldModifier(e)}
          />
          <br />
          <br />
          <button onClick={doLogin}>Login</button>
        </form>
        <Link to="/signup">
        <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
