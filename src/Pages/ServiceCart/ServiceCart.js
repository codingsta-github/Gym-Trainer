import React from "react";
import "./ServiceCart.css";
import ServiceCartBanner from "../../Assets/Banner/banner3.jpg";
import { useParams } from "react-router-dom";
import useServiceCart from "../../Hooks/useServiceCart";
const ServiceCart = () => {
    const id=useParams()
    const [ServiceCart]=useServiceCart(id)
    const {image,name,price}=ServiceCart
  return (
    <div className="ServiceCart">
      <div className="ServiceCart-banner">
        <img src={ServiceCartBanner} alt="" />
       <div className="head">
       <h1>FITNESS CONSULTATION</h1>
       </div>
      </div>
      <div className="ServiceCart-details">
        <div className="ServiceCart-details-img">
          <img src={image} alt="" />
        </div>
        <div className="ServiceCart-details-info">

        </div>
      </div>
      <div className="ServiceCart-description">
<p></p>
      </div>
    </div>
  );
};

export default ServiceCart;
