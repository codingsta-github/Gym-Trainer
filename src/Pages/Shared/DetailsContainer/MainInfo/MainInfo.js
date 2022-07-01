import React from "react";
import "./MainInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const MainInfo = ({ details }) => {
  const { image, price, category, short, slots } = details;
  const [quantity, setQuantity] = useState(1);
  const QuantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const QuantityMinus = () => {
    setQuantity(quantity - 1);
  };
  const BuyNow = () => {};

  return (
    <div className="main-info">
      <div className="main-info-img">
        <img src={image} alt="" />
      </div>
      <div className="main-info-info">
        <h1>${price}.00</h1>
        <p>{short}</p>
        <form onClick={BuyNow}>
          {slots && (
            <>
              {" "}
              <p id="label">Choose a schedule:</p>
              <select id="slots" name="slots">
                {slots?.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
            </>
          )}
          {category === "product" && (
            <div className="quantity">
              <div onClick={QuantityMinus}>
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </div>
              <input type="number" value={quantity} min="1" />
              <div onClick={QuantityPlus}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </div>
            </div>
          )}
          <input className="buynow" type="submit" value="buy now" />
        </form>
        <div className="straight-line"></div>
        <h4>
          category : <span>{category}</span>
        </h4>
      </div>
    </div>
  );
};

export default MainInfo;
