import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import LoadingLogo from "./components/LoadingLogo/LoadingLogo";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import MyAds from "./pages/MyAds/MyAds";
import Sell from "./pages/Sell/Sell";
import ViewPost from "./pages/ViewPost";
import MyProfile from "./pages/MyProfile/MyProfile";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";

import Error from "./pages/Error";

function App() {
  const [{ user, showLoginOverlay }, dispatch] = useGlobalStore();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((userDoc) => {
            return dispatch({
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
          })
          .then(() => {
            if (user) setShowLoading(false);
          });
      }
      setShowLoading(false);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {showLoading && <LoadingLogo />}
        {
          <>
            {showLoginOverlay && <Login />}
            <Switch>
              <PrivateRoute path="sell" component={Sell} />
              <Route path="/view/:adId" component={ViewPost} />
              <Route path="/profile/:id" component={Profile} />
              <PrivateRoute path="/profile" component={MyProfile} />
              <PrivateRoute path="/myads" component={MyAds} />
              <PrivateRoute path="/editProfile" component={EditProfile} />
              <Route path="/" component={Home} exact />
            </Switch>
          </>
        }
      </div>
    </Router>
  );
}

export default App;
