import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import useGlobalStore from "../../store/GlobalStore";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import AdsIcon from "../../assets/AdsIcon";
import ProfilePicture from "../../assets/ProfilePicture";
import LogoutIcon from "../../assets/LogoutIcon";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";

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
    } else {
      accountArrow.current.style.transform = "rotateZ(180deg)";
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
          <Link to="/">
            <OlxLogo size={48} />
          </Link>
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
              {(user?.profilePicture === "" ||
                user?.profilePicture == null) && <ProfilePicture size={30} />}
              {user?.profilePicture && (
                <img src={user?.profilePicture} alt="" />
              )}
              <div ref={accountArrow} className="userProfileArrowContainer">
                <Arrow />
              </div>
            </div>
            {showMenu && (
              <div className="userMenu">
                <div className="userMenuTop">
                  {(user?.profilePicture === "" ||
                    user?.profilePicture == null) && (
                    <ProfilePicture size={100} />
                  )}
                  {user?.profilePicture && (
                    <img src={user?.profilePicture} alt="" />
                  )}
                  <div className="userMenuTopRight">
                    <p>Hello</p>
                    <h2>{user.displayName}</h2>
                    <Link to="/editProfile/info">
                      <p>View and edit profile</p>
                    </Link>
                  </div>
                </div>
                <div className="userMenuOptions">
                  <Link to="/myads">
                    <div>
                      <AdsIcon />
                      <p>My Ads</p>
                    </div>
                  </Link>
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
            <span onClick={loginOverlayOpeningHandler}>Login</span>
            <hr />
          </div>
        )}
        {user && (
          <Link to="/sell">
            <div className="sellMenu">
              <SellButton />
              <div className="sellMenuContent">
                <SellButtonPlus />
                <span>SELL</span>
              </div>
            </div>
          </Link>
        )}
        {!user && (
          <div
            className="sellMenu"
            onClick={() => {
              dispatch({
                type: "SET_LOGIN_OVERLAY",
                status: true,
              });
            }}
          >
            <SellButton />
            <div className="sellMenuContent">
              <SellButtonPlus />
              <span>SELL</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
