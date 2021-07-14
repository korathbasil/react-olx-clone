import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import LoadingLogo from "./components/LoadingLogo/LoadingLogo";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Sell from "./pages/Sell/Sell";
import ViewPost from "./pages/ViewPost";
import Profile from "./pages/Profile/Profile";
import MyProfile from "./pages/MyProfile/MyProfile";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyAds from "./pages/MyAds/MyAds";

function App() {
  const [{ user, showLoginOverlay }, dispatch] = useGlobalStore();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        db.collection("users")
          .doc(loggedInUser.uid)
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
                profilePicture: loggedInUser.photoURL,
              },
            });
          })
          .then(() => {
            setShowLoading(false);
          });
      } else {
        setShowLoading(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {showLoading && <LoadingLogo />}
        {!showLoading && (
          <>
            {showLoginOverlay && <Login />}
            <Switch>
              <PrivateRoute path="/sell" component={Sell} />
              <Route path="/view/:adId" component={ViewPost} />
              <Route path="/profile/:id" component={Profile} />
              <PrivateRoute path="/profile" component={MyProfile} />
              <PrivateRoute path="/myads" component={MyAds} />
              <PrivateRoute path="/editProfile" component={EditProfile} />
              <Route path="/" component={Home} exact />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
