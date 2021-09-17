import React from "react";
import "./Navbar.scss";
import { NavLink, Switch, Route } from "react-router-dom";

// icons

import HomeIcon from "../Lib/HomeIcon";
import TrendIcon from "../Lib/TrendIcon";
import SubscriptionsIcon from "../Lib/SubscriptionsIcon";
import LibraryIcon from "../Lib/LibraryIcon";
import HistoryIcon from "../Lib/HistoryIcon";
import WatchLaterIcon from "../Lib/WatchLaterIcon";
import FavotireIcon from "../Lib/FavotireIcon";
import LikedIcon from "../Lib/LikedIcon";
import MusicIcon from "../Lib/MusicIcon";
import GamesIcon from "../Lib/GamesIcon";
import ShowMoreIcon from "../Lib/ShowMoreIcon";
import SettingsIcon from "../Lib/SettingsIcon";

// pages

import Home from "../../Pages/Home/Home";
import Channel from "../../Pages/Channel/Channel";
import Videolar from "../../Pages/Video/Video";
// userimages

import user1 from "../../Assets/Images/user1.jpg";
import user2 from "../../Assets/Images/user2.jpg";
import user3 from "../../Assets/Images/user3.jpg";
import user4 from "../../Assets/Images/user4.jpg";
import user5 from "../../Assets/Images/user5.jpg";
import user6 from "../../Assets/Images/user6.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__list1">
        <li className="list1__item">
          <HomeIcon />
          <NavLink className="list1__item__link--active list1__item__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="list1__item">
          <TrendIcon />
          <NavLink className="list1__item__link" to="/trending">
            Trending
          </NavLink>
        </li>
        <li className="list1__item">
          <SubscriptionsIcon />
          <NavLink className="list1__item__link" to="/subscriptions">
            Subscriptions
          </NavLink>
        </li>
        <li className="list1__item">
          <LibraryIcon />
          <NavLink className="list1__item__link" to="/library">
            Library
          </NavLink>
        </li>
        <li className="list1__item">
          <HistoryIcon />
          <NavLink className="list1__item__link" to="/history">
            History
          </NavLink>
        </li>
        <li className="list1__item">
          <WatchLaterIcon />
          <NavLink className="list1__item__link" to="/later">
            Watch later
          </NavLink>
        </li>
        <li className="list1__item">
          <FavotireIcon />
          <NavLink className="list1__item__link" to="/favorites">
            Favourites
          </NavLink>
        </li>
        <li className="list1__item">
          <LikedIcon />
          <NavLink className="list1__item__link" to="/liked">
            Liked videos
          </NavLink>
        </li>
        <li className="list1__item">
          <MusicIcon />
          <NavLink className="list1__item__link" to="/music">
            Music
          </NavLink>
        </li>
        <li className="list1__item">
          <GamesIcon />
          <NavLink className="list1__item__link" to="/games">
            Games
          </NavLink>
        </li>
        <li className="list1__item">
          <ShowMoreIcon />
          <NavLink className="list1__item__link" to="/more">
            Show more
          </NavLink>
        </li>
      </ul>
      <ul className="navbar__list2">
        <h3 className="list2__heading">Subscriptions</h3>
        <li className="list2__item">
          <img src={user1} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Gussie Singleton
          </NavLink>
        </li>
        <li className="list2__item">
          <img src={user2} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Nora Francis
          </NavLink>
        </li>
        <li className="list2__item">
          <img src={user3} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Belle Briggs
          </NavLink>
        </li>
        <li className="list2__item">
          <img src={user4} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Eunice Cortez
          </NavLink>
        </li>
        <li className="list2__item">
          <img src={user5} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Emma Hanson
          </NavLink>
        </li>
        <li className="list2__item">
          <img src={user6} alt="user logo" />
          <NavLink className="list2__item__link" to="/channel">
            Leah Berry
          </NavLink>
        </li>
      </ul>
      <button className="settingsBtn" type="button">
        <SettingsIcon />
        <p className="settingsBtn__p">Setting</p>
      </button>
    </div>
  );
}

export default Navbar;
