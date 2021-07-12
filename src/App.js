import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import Home from "./pages/Home";
import MyAds from "./pages/MyAds/MyAds";
import Login from "./components/Login/Login";

import Sell from "./pages/Sell/Sell";
import ViewPost from "./pages/ViewPost";
import MyProfile from "./pages/MyProfile/MyProfile";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";

import Error from "./pages/Error";

// const OpenLoginModal = () => {
//   const [{}, dispatch] = useGlobalStore();
//   return dispatch({
//     type: "SET_LOGIN_OVERLAY",
//     status: true,
//   });
// };

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
        <Route path="/profile" component={MyProfile} exact />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/myads" component={MyAds} />
        {user ? (
          <Route path="/editProfile" component={EditProfile} />
        ) : (
          <Route path="/editProfile" component={Error} />
        )}
      </div>
    </Router>
  );
}

export default App;
