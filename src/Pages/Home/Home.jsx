import React from "react";

import Dollie from "../../Component/Main/Dollie/Dollie";
import Recommended from "../../Component/Main/Recommended/Recommended";
import Food from "../../Component/Main/Food/Food";

import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="main__wrapper1">
        <div className="main__wrapper1__wrapper">
          <Dollie />
          <Recommended />
          <Food />
        </div>
      </div>
    </div>
  );
}
export default Home;
