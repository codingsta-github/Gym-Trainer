import React from "react";
import "./Banner2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell,faCarrot,faBottleWater,faEgg,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Banner3 from "./MobileBanner2";
import { Link } from "react-router-dom";
import MobileBanner2 from "./MobileBanner2";
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
          <Link to="/shop" className="banner2-button"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>
        </div>
        
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faBottleWater}></FontAwesomeIcon>
          </h1>
          <h2>product</h2>
          <Link to="/shop/product" className="banner2-button"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>
        </div>
        
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon>
          </h1>
          <h2>dieting</h2>
          <Link to="/shop/dieting" className="banner2-button"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>
        </div>
        
        <div className="front">
          <h1>
            <FontAwesomeIcon icon={faEgg}></FontAwesomeIcon>
          </h1>
          <h2>nutrition</h2>
          <Link to="/shop/nutrition" className="banner2-button"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>
        </div>
        
      </div>
      <div className="swiper">
      <MobileBanner2></MobileBanner2>
      </div>
    </div>
  );
};

export default Banner2;
