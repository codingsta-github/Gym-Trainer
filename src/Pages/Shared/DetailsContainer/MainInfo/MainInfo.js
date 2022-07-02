import React from "react";
import "./MainInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
const MainInfo = ({ details }) => {
  const { name, image, price, category, short, slots, instructor, company } =
    details;
  const [quantity, setQuantity] = useState(1);
  const QuantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const QuantityMinus = () => {
    setQuantity(quantity - 1);
  };
  const inputRef = useRef();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const addToCart = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      const email = user.email;
      const inputValue = inputRef.current.value;
      const cart = {
        email,
        name,
        image,
        price,
        category,
        inputValue,
        instructor,
        company,
      };

      console.log(cart);
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
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
