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
  const [orderStatus, setOrderStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const addToCart = (e) => {
    e.preventDefault();
    setLoading(true);
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

      fetch("https://calm-dusk-64094.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((data) => {
          setOrderStatus(true);
          setLoading(false);
          setTimeout(() => {
            setOrderStatus(false);
          }, 10000);
        });
    }
  };
  const cartRoute = () => {
    navigate("/cart");
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
              <input
                className="buynow"
                type="submit"
                value={!loading ? "add to cart" : "adding..."}
              />
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
              <input
                className="buynow"
                type="submit"
                value={!loading ? "add to cart" : "adding..."}
              />
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
      <div className="order-status">
        {orderStatus && (
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{" "}
            "{name}" has been added to your cart.{" "}
            <button onClick={cartRoute}>Go to cart </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default MainInfo;
