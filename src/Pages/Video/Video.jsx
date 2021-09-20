import React from "react";
import "./Video.scss";
import ShareVideo from "../../Component/Lib/ShareVideo";
import LikeVideo from "../../Component/Lib/LikeVideo";
import DislikeVideo from "../../Component/Lib/DislikeVideo";
import MoreVideo from "../../Component/Lib/MoreVideo";
import VideoPageImg from "../../Assets/Images/videopage-img.jpg";
import { NavLink } from "react-router-dom";
function Videolar() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setData(data.slice(1, 9));
        setLoading(false);
      });
  });
  return (
    <div className="videopage">
      <div className="videopage__wrapper1">
        <iframe
          className="videopage__video"
          width="950"
          height="500"
          src="https://www.youtube.com/embed/fw-M92KDKYo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="videopage__wrapper__div">
          <span className="videopage__wrapper__div__span1">
            <h2>Dude You Re Getting A Telescope</h2>
            <p>123k views</p>
          </span>

          <span className="videopage__wrapper__div__span2">
            <button className="videopage__wrapper__div__span2__btn1">
              <LikeVideo />
              123k
            </button>
            <button className="videopage__wrapper__div__span2__btn1">
              <DislikeVideo />
              435k
            </button>
            <button className="videopage__wrapper__div__span2__btn1">
              <ShareVideo />
              Share
            </button>
            <MoreVideo />
          </span>
        </div>

        <div className="videopage__channelinfo">
          <img src={VideoPageImg} alt="" />

          <span className="videopage__channelinfo__span">
            <NavLink to="/channel" className="h3">
              Food & Drink
            </NavLink>
            <p className="videopage__channelinfo__span__p1">Published on 14 Jun 2019</p>

            <p className="videopage__channelinfo__span__p2">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as it must
              appeal to, entice, and convince consumers to take action. There is no magic
              formula to write perfect ad copy; it is based on a number of factors,
              including ad placement, demographic, even the consumer’s mood when they see
              your ad.{" "}
            </p>

            <NavLink className="videopage__channelinfo__span__link" to="/more">
              Show more
            </NavLink>
          </span>
          <button className="videopage__subsc-btn">Subscribe 2.3m</button>
        </div>
      </div>

      <div className="videopage__wrapper2">
        <span className="videopage__span-wrapper1">
          <h2>Next</h2>

          <span className="videopage__span1">
            <p>Autoplay</p>

            <main className="input-checkbox">
              <input className="input-checkbox__input" type="checkbox" id="check" />
              <label htmlFor="check" className="input-checkbox__label"></label>
            </main>
          </span>
        </span>

        <div>
          {loading && <p>loading...</p>}
          <ul className="videopage__list">
            {data.length &&
              data.map(row => (
                <li className="videopage__list__item" key={row.id}>
                  <NavLink className="videopage__list__item__link" to="/video">
                    <img
                      className="videopage-img"
                      src={row.url}
                      alt="row url img"
                      width="370"
                      height="215"
                    />
                    <p className="videopage-title">{row.title}</p>

                    <span className="video__span-wrapper">
                      <p className="video__span-wrapper__p">80k views · 3 days ago</p>
                      <NavLink to="/channel" className="videopage__span-wrapper__navlink">
                        Dollie Blair
                      </NavLink>
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Videolar;
