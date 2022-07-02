import React from 'react';
import './SharedBanner.css'
import SharedBannerImg from "../../../../Assets/Banner/sharedBannerImg.jpg";
const SharedBanner = ({children}) => {
    return (
        <div className="SharedBanner">
        <img src={SharedBannerImg} alt="" />
        <div className="head">
          <h1>{children==="shop"?"workout":children}</h1>
        </div>
      </div>
    );
};

export default SharedBanner;