import React from "react";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import Dollie from "../../Component/Main/Dollie/Dollie";
import Recommended from "../../Component/Main/Recommended/Recommended";
import Food from "../../Component/Main/Food/Food";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main__wrapper1">
        <Navbar />
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
