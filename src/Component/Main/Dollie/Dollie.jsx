import React from "react";
import "./Dollie.scss";
import UserLogo from "../../../Assets/Images/user1.jpg";
import { NavLink } from "react-router-dom";
import LeftArrow from "../../Lib/Left";
import RightArrow from "../../Lib/Right";
function Dollie() {
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
    <div className="dollie ">
      <NavLink to="/channel" className="dollie__wrapper1 dollie-active">
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
        {loading && <p>loading...</p>}
        <div className="dollie__videos__div1">
          <div className="dollie__videos__left">
            <LeftArrow />
          </div>

          <div className="dollie__videos__right">
            <RightArrow />
          </div>
        </div>
        <ul className="videos">
          {data.length &&
            data.map(row => (
              <li className="videos__item" key={row.id}>
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
                    <NavLink to="/channel" className="video__span-wrapper__navlink">
                      Dollie Blair
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

export default Dollie;
