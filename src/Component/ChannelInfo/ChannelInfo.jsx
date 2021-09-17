import React from "react";

import "./ChannelInfo.scss";
import User2 from "../../Assets/Images/user2.jpg";
import { NavLink } from "react-router-dom";
import NotificationChannel from "../Lib/NotificationChannel";
function ChannelInfo() {
  return (
    <div className="ChannelInfo">
      <NavLink to="/channel" className="channelinfo__wrapper1">
        <img src={User2} alt="user2 logo" width="40" height="40" />

        <span>
          <h3 className="channelinfo__heading">Margaret Phelps</h3>
          <p className="channelinfo__p">245K subscribed</p>
        </span>

        <span className="channelinfo__wrapper1__span1">
          <NotificationChannel />
          <button type="button" className="subsc-btn">
            Subscribe 2.3m
          </button>
        </span>
      </NavLink>
    </div>
  );
}
export default ChannelInfo;
