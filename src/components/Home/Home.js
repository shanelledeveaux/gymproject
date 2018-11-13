import React from "react";
import "./Home.css";
import gardenrunner from "./gardenrunner.png";
import downarrow from "./downarrow.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title_box">
        <h1>Shanelle's Gym</h1>
        <div>Strong is the new beautiful</div>
        <p>About</p>
        <p>Shop</p>
        <p>Join</p>
      </div>
      <img src={gardenrunner} alt="" />
    </div>
  );
};
export default Home;
