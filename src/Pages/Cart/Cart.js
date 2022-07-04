import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import useOrder from "../../Hooks/useOrder";
import SharedBanner from "../Shared/DetailsContainer/SharedBanner/SharedBanner";
import "./Cart.css";
import CartDetails from "./CartDetails/CartDetails";
const Cart = () => {
  const [order] = useOrder();

  return (
    <div className="Cart">
      <SharedBanner>cart</SharedBanner>
      <div className="cart-container">
        <div className="cart-details">
          {order.map((data) => (
            <CartDetails data={data} key={data._id}></CartDetails>
          ))}
        </div>
        <div className="cart-proceed"></div>
      </div>
    </div>
  );
};

export default Cart;
