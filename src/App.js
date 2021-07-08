import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { auth, db } from "./firebase";
import useGlobalStore from "./store/GlobalStore";
import "./App.css";
import Home from "./Pages/Home";
// import Login from "./Pages/Login";

import CategorySelector from "./Components/CategorySelector/CategorySelector";

import Login from "./Components/Login/Login";
import Signup from "./Pages/Signup";
import Sell from "./Pages/Sell/Sell";
import ViewPost from "./Pages/ViewPost";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";

function App() {
  const [{ showLoginOverlay }, dispatch] = useGlobalStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc()
          .get(user.uid)
          .then((userDoc) => {
            phone = doc.data().phone;
            description = doc.data().description;
            userId = doc.id;
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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/sell" component={Sell} />
        <Route path="/view/:adId" component={ViewPost} />
        <Route path="/profile" component={Profile} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/abc" component={CategorySelector} />
      </div>
    </Router>
  );
}

export default App;
