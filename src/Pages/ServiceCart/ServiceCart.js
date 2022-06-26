import React, { createContext } from "react";
import "./ServiceCart.css";
import ServiceCartBanner from "../../Assets/Banner/banner3.jpg";
import { useParams } from "react-router-dom";
import useServiceCart from "../../Hooks/useServiceCart";
import Loading from "../Shared/Loading/Loading";
import AdditionalInfo from "../Shared/AdditionalInfo/AdditionalInfo";
import { useEffect } from "react";
// export const AdditionalContext = createContext({});
const ServiceCart = () => {
  const id = useParams();
  const [ServiceCart] = useServiceCart(id);
  const { image, price, category, short, slots } = ServiceCart;

  const BuyNow = () => {};

  useEffect(()=>{
    window.scrollTo({
      top: 0
  });
  })

  return (
    <div className="ServiceCart">
      <div className="ServiceCart-banner">
        <img src={ServiceCartBanner} alt="" />
        <div className="head">
          <h1>FITNESS CONSULTATION</h1>
        </div>
      </div>
      {ServiceCart ? (
        <>
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
          {/* <AdditionalContext.Provider value={ServiceCart}>
            <AdditionalInfo></AdditionalInfo>
          </AdditionalContext.Provider> */}
          <AdditionalInfo Cart={ServiceCart}></AdditionalInfo>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default ServiceCart;
