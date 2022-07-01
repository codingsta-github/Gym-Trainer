import React from "react";
import "./MainInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
const MainInfo = ({ details }) => {
  const { name, image, price, category, short, slots, instructor } = details;
  const [quantity, setQuantity] = useState(1);
  const QuantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const QuantityMinus = () => {
    setQuantity(quantity - 1);
  };
  const inputRef = useRef();
  const addToCart = (e) => {
    e.preventDefault();
    const id = details._id;
    const inputValue = inputRef.current.value;
    const cart={
      id,inputValue
    }
    console.log(cart);
  };

  return (
    <div className="main-info">
      <div className="main-info-img">
        <img src={image} alt="" />
      </div>
      <div className="main-info-info">
        <h1>${price}.00</h1>
        <p>{short}</p>

        {slots && (
          <form onSubmit={addToCart}>
            <p id="label">Choose a schedule:</p>
            <div className="workout-info">
              {" "}
              <select id="slots" name="slots" ref={inputRef}>
                {slots?.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <input className="buynow" type="submit" value="add to cart" />
            </div>
          </form>
        )}
        {category === "product" && (
          <form onSubmit={addToCart}>
            <div className="product-info">
              <div className="quantity">
                <div onClick={QuantityMinus}>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </div>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  name="quantity"
                  ref={inputRef}
                />
                <div onClick={QuantityPlus}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </div>
              </div>
              <input className="buynow" type="submit" value="add to cart" />
            </div>
          </form>
        )}

        <div className="straight-line"></div>

        <div className="link">
          See also :
          <Link to="/shop">
            <span>courses</span>{" "}
          </Link>
          <Link to={"/shop/product"}>
            <span>product</span>{" "}
          </Link>
          <Link to="/shop">
            <span>courses</span>{" "}
          </Link>
          <Link to={"/shop/product"}>
            <span>product</span>{" "}
          </Link>
          <Link to={"/shop/product"}>
            <span>product</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
