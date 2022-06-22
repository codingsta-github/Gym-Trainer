import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell,faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
        <img src={banner} alt="" />
      </div>
      <div className="logo">
        <div className="icon">
          <FontAwesomeIcon icon={faDumbbell} />
        </div>
        <div className="brand">
          <h1>GURU </h1>
          <h1>MANN</h1>
        </div>
      </div>
      <div className="details">
        <h1>keep</h1>
        <h1>your</h1>
        <h1>body</h1>

        <h1>feet &</h1>
        <h1><span>strong</span></h1>
        <p>with Guru Mann</p>
      </div>
      <div className="button">
      {/* <button>MORE ABOUT HEALTH    <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></button> */}
      </div>
    </div>
  );
};

export default Banner;
