import React from "react";
import "./Header.scss";
import HamburgerMenu from "../Lib/HamburgerMenu";
import YoutubeIcon from "../Lib/YoutubeIcon";
import HeaderSearch from "../Lib/HeaderSearch";
import MeetingIcon from "../Lib/MeetingIcon";
import MoreApps from "../Lib/MoreApps";
import Notifications from "../Lib/Notifications";
import UserLogoImg from "../../Assets/Images/userlogo.jpg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <button className="hamburgerMenu" type="button">
          <HamburgerMenu />
        </button>
        <NavLink to="/" className="youtubeIcon" type="button">
          <YoutubeIcon />
        </NavLink>
        <label className="search-wrapper">
          <input className="search-input" type="text" placeholder="Search" />
          <HeaderSearch className="search-icon" />
        </label>
        <div className="header__wrapper">
          <button className="icon" type="button">
            <MeetingIcon />
          </button>
          <button className="icon" type="button">
            <MoreApps />
          </button>
          <button className="icon" type="button">
            <Notifications />
          </button>
        </div>{" "}
        <img className="userlogo" src={UserLogoImg} alt="UserLogoImg" />
      </div>
    </header>
  );
}

export default Header;
