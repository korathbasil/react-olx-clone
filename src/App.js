import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import LoadingLogo from "./components/LoadingLogo/LoadingLogo";
import Home from "./pages/Home";
import MyAds from "./pages/MyAds/MyAds";
import Login from "./components/Login/Login";

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
        {showLoading && <LoadingLogo />}
        {!showLoading && (
          <>
            {showLoginOverlay && <Login />}
            <Route path="/" component={Home} exact />
            {/* <Route path="/sell" component={Sell} /> */}
            <Route path="/sell">
              {user && <Sell />}
              {/* {!user && <OpenLoginModal />} */}
            </Route>
            <Route path="/view/:adId" component={ViewPost} />
            <Route path="/profile" component={MyProfile} exact />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/myads" component={MyAds} />
            {user ? (
              <Route path="/editProfile" component={EditProfile} />
            ) : (
              <Route path="/editProfile" component={Error} />
            )}
            {/* {user ? () => console.log("Hello") : <OpenLoginModal />} */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
