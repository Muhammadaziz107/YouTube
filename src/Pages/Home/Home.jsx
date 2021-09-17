import React from "react";
import Header from "../../Component/Header/Header";
import Dollie from "../../Component/Main/Dollie/Dollie";
import Recommended from "../../Component/Main/Recommended/Recommended";
import Food from "../../Component/Main/Food/Food";
import { Switch, Route } from "react-router-dom";

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
