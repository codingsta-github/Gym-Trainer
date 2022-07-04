import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import "./CartDetails.css";
const CartDetails = ({data}) => {
  const [quantity, setQuantity] = useState(parseInt(data.inputValue));
  const QuantityPlus = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const QuantityMinus = () => {
    setQuantity((quantity) => quantity - 1);
  };
  const inputRef = useRef();
  // const inputValue = inputRef?.current.value;
  console.log(quantity);
  return (
    <div className="order">
      <div className="img">
        <img src={data.image} alt="" />
      </div>
      <div>
        <p>
          {data.name}-{data.company ? data.company : data.instructor}
        </p>
      </div>
      <p>$ {data.price}</p>
      <div>
        <div className="order-details-quantity">
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
      </div>
      <div>
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        DELETE
      </div>
    </div>
  );
};

export default CartDetails;
