import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [signupInput, setsignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  
  const inputChangeHandler = (e) => {
    setsignupInput({
      ...signupInput,
      [e.target.name]: e.target.value
    })
  }

  const doSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(signupInput.email, signupInput.password)
    .then((result) => {
      result.user.updateProfile({displayName: signupInput.name})
      .then(user => console.log(user))
      return
    })
    .then(() => {
      
      setsignupInput({
        name: "",
        email: "",
        phone: "",
        password: ""
      });
      // history.push('/')
      alert("done")
    })
    .catch((e) => console.log(e))
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            name="name"
            value={signupInput.name}
            onChange={(e) => inputChangeHandler(e)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            value={signupInput.email}
            onChange={(e) => inputChangeHandler(e)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            name="phone"
            value={signupInput.phone}
            onChange={(e) => inputChangeHandler(e)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={signupInput.password}
            onChange={(e) => inputChangeHandler(e)}
          />
          <br />
          <br />
          <button onClick={doSignup}>Signup</button>
        </form>
        <Link to="/login">
        <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
