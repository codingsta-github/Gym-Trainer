import React from "react";
import "./Banner2.css";
import banner2 from "../../../Assets/Banner/banner2.jpg";
import { useState } from "react";
const Banner2 = () => {
  const [learn, setLearn] = useState(false);
  const LearnMore=()=>{
    setLearn(!learn)
  }
  return (
    <div className="Banner2">
      <img src={banner2} alt="" />
      <div className="banner-details">
        <h1>BECOME </h1>
        <h1>YOUR</h1>
        <h1> STRONGEST </h1>
        <h1>SELF</h1>
        <h4>exercise smarter. feel better . live longer.</h4>
        <p>
          I'm a forty-something fitness professional, specializing in health and
          wellness optimization through a vehicle of cardiovascular, flexibility
          and resistance training sometimes presented through circuit training.
          You will be completely revitalized by my program!
        </p>
        <div className="button">
          {" "}
          <button onClick={LearnMore}>learn more</button>
        </div>
      </div>
      {learn && <div className="banner-info">
        <p id="close" onClick={LearnMore}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </p>
        <p>
          I'm a forty-something fitness professional, specializing in health and
          wellness optimization through a vehicle of cardiovascular, flexibility
          and resistance training sometimes presented through circuit training.
          You will be completely revitalized by my program!
        </p>
      </div>}
    </div>
  );
};

export default Banner2;
