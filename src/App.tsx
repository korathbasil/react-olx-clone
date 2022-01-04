import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import LoadingLogo from "./components/LoadingLogo/LoadingLogo";
import Login from "./components/Login/Login";

import {
  Home,
  Sell,
  ViewPost,
  Profile,
  MyProfile,
  EditProfile,
  MyAds,
  Error,
} from "pages";

function App() {
  const [{ showLoginOverlay }, dispatch] = useGlobalStore();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        db.collection("users")
          .doc(loggedInUser.uid)
          .get()
          .then((userDoc) => {
            if (userDoc)
              return dispatch({
                type: "SET_USER",
                user: {
                  id: userDoc.id,
                  ...userDoc.data(),
                },
              });
            return;
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
              <Route path="*" component={Error} />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
