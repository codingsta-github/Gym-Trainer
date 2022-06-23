import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell,faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter, faInstagram, faFlickr } from '@fortawesome/free-brands-svg-icons'
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
      <div className="details animate__animated animate__fadeInLeft animate__delay-0.5s">
        <h1>keep</h1>
        <h1>your</h1>
        <h1>body</h1>

        <h1>feet &</h1>
        <h1><span>strong</span></h1>
        <p >with <span>Guru Mann</span></p>
      </div>
      <div className="social ">
        <ul>
          <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFlickr}></FontAwesomeIcon></li>
        </ul>
      </div>
      <div className="scroll"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div>
    </div>
  );
};

export default Banner;
