import React from "react";
import "./ServiceCart.css";
import ServiceCartBanner from "../../Assets/Banner/banner3.jpg";
import { Link, Outlet, useParams } from "react-router-dom";
import useServiceCart from "../../Hooks/useServiceCart";
import { useState } from "react";
const ServiceCart = () => {
  const id = useParams();
  const [ServiceCart] = useServiceCart(id);
  const {
    _id,
    image,
    name,
    price,
    category,
    instructor,
    schedule,
    short,
    full,
    slots,
  } = ServiceCart;

  const [des, setDes] = useState(true);
  const [add, setAdd] = useState(false);
  const [rev, setRev] = useState(false);
  const Des = () => {
    setDes(true)
    setAdd(false);
    setRev(false);
  };
  const Add = () => {
    setAdd(true)
    setDes(false)
    setRev(false)
  };
  const Rev = () => {
    setRev(true)
    setDes(false)
    setAdd(false)
  };
  const BuyNow = () => {};
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
          <h1>${price}.00</h1>
          <p>{short}</p>
          <form onClick={BuyNow}>
            <p id="label">Choose a schedule:</p>
            <select id="slots" name="slots">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input className="buynow" type="submit" value="buy now" />
          </form>
          <div className="straight-line"></div>
          <h4>
            category: <span>{category}</span>
          </h4>
        </div>
      </div>
      <div className="ServiceCart-description">
        <div >
          <button onClick={Des} className={des?`active`:`description-button`}>description</button>
          <button onClick={Add} className={add?`active`:`description-button`}>additional information</button>
          <button onClick={Rev} className={rev?`active`:`description-button`}>reviews({})</button>
        </div>
        {des && <h1>des</h1>}
        {add && <h1>add</h1>}
        {rev && <h1>rev</h1>}
      </div>
    </div>
  );
};

export default ServiceCart;
