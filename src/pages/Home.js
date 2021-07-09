import React from "react";

import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

import "./Home.css";
import Feed from "../components/Feed/Feed";
// import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      {/* <Posts /> */}
      <Feed />
      <Footer />
    </div>
  );
}

export default Home;
