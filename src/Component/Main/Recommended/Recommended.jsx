import React from "react";
import "./Recommended.scss";
import { NavLink } from "react-router-dom";
function Recommended() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => setData(data.slice(1, 4)));
  }, []);
  return (
    <div className="recommended">
      <h2 className="recommended__heading">Recommended</h2>

      <div className="recommended-videos">
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
                    <p className="recommended-video__p">Gussie French</p>
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
