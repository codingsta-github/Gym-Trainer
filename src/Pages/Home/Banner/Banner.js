import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter, faInstagram,faYoutube ,faFlickr } from '@fortawesome/free-brands-svg-icons'
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
        <img src={banner} alt="" />
      </div>
      
      <div className="details-mobile animate__animated animate__fadeInLeft animate__delay-0.5s">
        <h1>keep</h1>
        <h1>your</h1>
        <h1>body</h1>

        <h1>feet &</h1>
        <h1><span>strong</span></h1>
        <p >with <span>Lindsey Vonn.</span></p>
      </div>
      <div className="details-desktop ">
        <h1 className="animate__animated animate__fadeInDown animate__delay-0.5s">exercise <span>smarter.</span></h1> 
        <h1 className="animate__animated animate__fadeInDown animate__delay-0.5s">feel <span>better.</span> live <span>longer.</span></h1>
        <p className="animate__animated animate__fadeInLeft animate__delay-1s">with <span>Lindsey Vonn.</span></p>
      </div>
      <div className="social ">
        <ul>
          <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFlickr}></FontAwesomeIcon></li>
        </ul>
      </div>
      <div className="scroll"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div>
    </div>
  );
};

export default Banner;
