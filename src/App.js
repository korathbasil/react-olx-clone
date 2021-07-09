import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import Home from "./Pages/Home";
// import Login from "./Pages/Login";

import CategorySelector from "./Components/CategorySelector/CategorySelector";

import Login from "./Components/Login/Login";
import Signup from "./Pages/Signup";
import Sell from "./Pages/Sell/Sell";
import ViewPost from "./Pages/ViewPost";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";

function App() {
  const [{ user, showLoginOverlay }, dispatch] = useGlobalStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((userDoc) => {
            dispatch({
              type: "SET_USER",
              user: {
                id: userDoc.id,
                displayName: userDoc.data().displayName,
                email: userDoc.data().email,
                phone: userDoc.data().phone,
                description: userDoc.data().description,
                profilePicture: user.photoURL,
              },
            });
          });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {showLoginOverlay && <Login />}
        <Route path="/" component={Home} exact />
        <Route path="/sell" component={Sell} />
        <Route path="/view/:adId" component={ViewPost} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/others" component={Profile} />
        {user && <Route path="/editProfile" component={EditProfile} />}
        <Route path="/abc" component={CategorySelector} />
        {/* <PrivateRoute path="/secret" component={Profile} /> */}
      </div>
    </Router>
  );
}

export default App;
