import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import AdsIcon from "../../assets/AdsIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Disposer } from "bluebird";

function Header() {
  const [{ user, showLoginOverlay }, dispatch] = useGlobalStore();
  const [showMenu, setShowMenu] = useState(false);

  const accountArrow = useRef();

  const loginOverlayOpeningHandler = () => {
    dispatch({
      type: "SET_LOGIN_OVERLAY",
      status: !showLoginOverlay,
    });
  };

  const menuOpeningHandler = () => {
    if (showMenu) {
      accountArrow.current.style.transform = "rotateZ(0deg)";
      // accountArrow.current.style.transform = "translateY(-5px)";
    } else {
      accountArrow.current.style.transform = "rotateZ(180deg)";
      // accountArrow.current.style.transform = "translateY(0px)";
    }
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    auth.signOut().then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
      setShowMenu(false);
    });
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <input type="text" placeholder="Find car,mobile phone and more..." />
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="userOptions"></div>
        {user && (
          <div className="userProfile">
            <div className="userProfileBubble" onClick={menuOpeningHandler}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
                alt=""
              />
              <div ref={accountArrow} className="userProfileArrowContainer">
                <Arrow />
              </div>
            </div>
            {showMenu && (
              <div className="userMenu">
                <div className="userMenuTop">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
                    alt=""
                  />
                  <div className="userMenuTopRight">
                    <p>Hello</p>
                    <h2>{user.displayName}</h2>
                    <Link to="/editProfile/info">
                      <p>View and edit profile</p>
                    </Link>
                  </div>
                </div>
                <div className="userMenuOptions">
                  <div>
                    <AdsIcon />
                    <p>My Ads</p>
                  </div>
                  <div onClick={logoutHandler}>
                    <LogoutIcon />
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {!user && (
          <div className="loginPage">
            {/* <Link to="/login"> */}
            <span onClick={loginOverlayOpeningHandler}>Login</span>
            {/* </Link> */}
            <hr />
          </div>
        )}
        <Link to="/sell">
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
