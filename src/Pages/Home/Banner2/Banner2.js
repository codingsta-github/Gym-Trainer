import React from "react";
import "./Banner2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell,faCarrot,faBottleWater,faEgg,faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Banner2 = () => {
  
  return (
    <div className="Banner2">
      <div className="banner-details">
        <h1>WHAT WE OFFER</h1>
        <h4>OUR SERVICES</h4>
      </div>
      <div className="our-services">
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
          </h1>
          <h2>Workout</h2>
        </div>
        <button><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faBottleWater}></FontAwesomeIcon>
          </h1>
          <h2>product</h2>
        </div>
        <button><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon>
          </h1>
          <h2>dieting</h2>
        </div>
        <button><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faEgg}></FontAwesomeIcon>
          </h1>
          <h2>nutrition</h2>
        </div>
        <button><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
      </div>
      
    </div>
  );
};

export default Banner2;
