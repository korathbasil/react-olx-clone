import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

import "./Home.css";
import Feed from "../Components/Feed/Feed";
// import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";

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
