import React from "react";
import "./Home.css";
import gardenrunner from "./gardenrunner.png";

const Home = () => {
  return (
    <div className="home">
      <img src={gardenrunner} alt="" />
      <div className="about_box">
        <h1>Shanelle's Gym</h1>
        <div>Strong is the new beautiful</div>
        <div className="link">About</div>
        <div className="link">About</div>
        <div className="link">About</div>
      </div>
    </div>
  );
};
export default Home;
