import BannerImage from "../../assets/images/banner-small.png";
import "./Home.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Feed from "../../components/Feed/Feed";
import Footer from "../../components/Footer/Footer";

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Menu home={true} />
      <img src={BannerImage} alt="" />
      <Feed />
      <Footer />
    </div>
  );
}

export default Home;
