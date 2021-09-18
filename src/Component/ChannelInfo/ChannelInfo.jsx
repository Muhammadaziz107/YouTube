import React from "react";

import "./ChannelInfo.scss";
import User2 from "../../Assets/Images/user2.jpg";
import { NavLink } from "react-router-dom";
import NotificationChannel from "../Lib/NotificationChannel";
import SearchBtn from "../Lib/HeaderSearch";
import User7 from "../../Assets/Images/user7.jpg";
import User8 from "../../Assets/Images/user8.jpg";
import User9 from "../../Assets/Images/user9.svg";

function ChannelInfo() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setData(data.slice(1, 6));
        setLoading(false);
      });
  }, []);
  return (
    <div className="ChannelInfo">
      <div className="channelinfo__wrapper1">
        <NavLink to="/channel" className="channelinfo__wrapper1__link">
          <img src={User2} alt="user2 logo" width="40" height="40" />

          <span>
            <h3 className="channelinfo__heading">Margaret Phelps</h3>
            <p className="channelinfo__p">245K subscribed</p>
          </span>
        </NavLink>
        <span className="channelinfo__wrapper1__span1">
          <NotificationChannel className="channelinfo__wrapper1__span1__svg" />
          <button type="button" className="subsc-btn">
            Subscribe 2.3m
          </button>
        </span>
      </div>

      <div className="channelinfo__wrapper2">
        <nav className="channelinfo__wrapper2__navbar">
          <ul className="wrapper2__list">
            <li className="wrapper2__list__item wrapper2__list__item--active">Home</li>
            <li className="wrapper2__list__item">Videos</li>
            <li className="wrapper2__list__item">Playlists</li>
            <li className="wrapper2__list__item">Channels</li>
            <li className="wrapper2__list__item">Discussion</li>
            <li className="wrapper2__list__item">About</li>
            <li className="wrapper2__list__item">
              <SearchBtn />
            </li>
          </ul>
        </nav>
        <div className="channelinfo__wrapper2__div">
          <div className="wrapper2__div__div1">
            <NavLink to="/video" className="div__div1__div1"></NavLink>
            <div className="div__div1__div2">
              <h2>Choosing The Best Audio Player Software For Your Computer</h2>
              <p>
                Your cheap internet-based banner advertising will become one of the sought
                for ads there are. Today, the world of Internet advertising is rapidly
                evolving beyond banner ads and intrusive pop-ups. Bayles A common medium
                for advertising on the Internet is the use of banner ads.{" "}
              </p>

              <p>11k views · 6 months ago</p>
            </div>
          </div>
          <div className="wrapper2__div__div2">
            <p className="div__div2__p">Recommended channel</p>

            <ul className="div__div2__list">
              <li className="div2__list__item">
                <img src={User7} alt="user7" />
                <h4>Flora Benson</h4>
              </li>
              <li className="div2__list__item">
                <img src={User8} alt="user7" />
                <h4>Violet Cobb</h4>
              </li>
              <li className="div2__list__item">
                <img src={User9} alt="user7" />
                <h4>Phillip Mullins</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="channelinfo__videos">
        {/* ============ */}
        <div className="dollie ">
          <NavLink to="/channel" className="dollie__wrapper1 dollie-active">
            <h4 className="dollie__wrapper1__username1">Margaret Phelps videos</h4>
          </NavLink>
          <div className="dollie__videos">
            {loading && <p>loading...</p>}
            <ul className="videos1">
              {data.length &&
                data.map(row => (
                  <li className="videos__item">
                    <NavLink className="video-navlink" to="/video">
                      <img
                        className="video-img"
                        src={row.url}
                        alt="row url img"
                        width="250"
                        height="150"
                      />
                      <p className="video-title">{row.title}</p>

                      <span className="video__span-wrapper">
                        <p className="video__span-wrapper__p">80k views · 3 days ago</p>
                        <p>Dollie Blair</p>
                      </span>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* ================= */}
      </div>
    </div>
  );
}
export default ChannelInfo;
