import React from "react";
import "./Dollie.scss";
import UserLogo from "../../../Assets/Images/user1.jpg";
import { NavLink } from "react-router-dom";
function Dollie() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => setData(data.slice(1, 6)));
  }, []);
  return (
    <div className="dollie">
      <NavLink to="/channel" className="dollie__wrapper1">
        <img
          className="dollie__wrapper1__img"
          src={UserLogo}
          alt=""
          width="30"
          height="30"
        />
        <h4 className="dollie__wrapper1__username">Dollie Blair</h4>
      </NavLink>
      <div className="dollie__videos">
        <ul className="videos">
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
  );
}

export default Dollie;
