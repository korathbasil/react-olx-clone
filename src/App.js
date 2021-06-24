import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from "./firebase";
import useGlobalStore from "./store/GlobalStore";

import "./App.css";
import Home from "./Pages/Home";
// import Login from "./Pages/Login";
import Login from "./Components/Login/Login";
import Signup from "./Pages/Signup";
import Sell from "./Pages/Sell/Sell";
import ViewPost from "./Pages/ViewPost";
import Profile from "./Pages/Profile/Profile";

function App() {
  const [{ showLoginOverlay }, dispatch] = useGlobalStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          },
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {showLoginOverlay && <Login />}
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/sell" component={Sell} />
        <Route path="/view/:adId" component={ViewPost} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
