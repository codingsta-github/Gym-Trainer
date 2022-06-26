import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({ServiceCart}) => {
    const { image, price, category, short, slots } = ServiceCart;
    const BuyNow = () => {};
    return (
        <div className="product-details">
            <div className="product-details-img">
              <img src={image} alt="" />
            </div>
            <div className="product-details-info">
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
    );
};

export default ProductDetails;