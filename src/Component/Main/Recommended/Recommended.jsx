import React from "react";
import "./Recommended.scss";
import { NavLink } from "react-router-dom";
import LeftArrow from "../../Lib/Left";
import RightArrow from "../../Lib/Right";
function Recommended() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setData(data.slice(1, 4));
        setLoading(false);
      });
  }, []);
  return (
    <div className="recommended">
      <h2 className="recommended__heading">Recommended</h2>

      <div className="recommended-videos">
        {loading && <p>loading...</p>}
        <div className="dollie__videos__div1">
          <div className="dollie__videos__left">
            <LeftArrow />
          </div>

          <div className="dollie__videos__right">
            <RightArrow />
          </div>
        </div>
        <ul className="recommended-video">
          {data.length &&
            data.map(row => (
              <li className="recommended-video__item">
                <NavLink className="recommended-video-navlink" to="/video">
                  <img
                    className="recommended-video-img"
                    src={row.url}
                    alt="row url img"
                    width="250"
                    height="150"
                  />
                  <p className="recommended-video-title">{row.title}</p>

                  <span className="video__span-wrapper recommeded__span-wrapper">
                    <p className="video__span-wrapper__p">80k views · 3 days ago</p>
                    <NavLink to="/channel" className="recommended-video__p">
                      Gussie French
                    </NavLink>
                  </span>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Recommended;
