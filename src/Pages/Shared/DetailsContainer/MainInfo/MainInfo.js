import React from "react";
import "./MainInfo.css";
const MainInfo = ({ details }) => {
  const { image, price, category, short, slots } = details;
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
          <input className="buynow" type="submit" value="buy now" />
        </form>
        <div className="straight-line"></div>
        <h4>
          category: <span>{category}</span>
        </h4>
      </div>
    </div>
  );
};

export default MainInfo;
