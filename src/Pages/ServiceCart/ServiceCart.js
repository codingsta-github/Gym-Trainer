import React from "react";
import "./ServiceCart.css";
import ServiceCartBanner from "../../Assets/Banner/banner.jpg";
const ServiceCart = () => {
  return (
    <div className="ServiceCart">
      <div className="ServiceCart-banner">
        <img src={ServiceCartBanner} alt="" />
        <h1>FITNESS CONSULTATION</h1>
      </div>
    </div>
  );
};

export default ServiceCart;
