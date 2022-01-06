import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import { RequireAuth } from "utils/RequireAuth";

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
            <Routes>
              <Route
                path="/sell"
                element={
                  <RequireAuth>
                    <Sell />
                  </RequireAuth>
                }
              />
              <Route path="/view/:adId" element={<ViewPost />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <MyProfile />
                  </RequireAuth>
                }
              />
              <Route
                path="/myads"
                element={
                  <RequireAuth>
                    <MyAds />
                  </RequireAuth>
                }
              />
              <Route
                path="/editprofile"
                element={
                  <RequireAuth>
                    <EditProfile />
                  </RequireAuth>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
