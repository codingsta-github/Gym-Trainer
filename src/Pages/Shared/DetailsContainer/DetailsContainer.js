import React from "react";
import "./DetailsContainer.css";
import { useParams } from "react-router-dom";
import useServiceCart from "../../../Hooks/useServiceCart";
import { useEffect } from "react";
import SharedBanner from "../SharedBanner/SharedBanner";
import ProductDetails from "../ProductDetails/ProductDetails";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import Loading from "../Loading/Loading";
const DetailsContainer = () => {
  const id = useParams();
  const [ServiceCart] = useServiceCart(id);
  const { image, price, category, short, slots } = ServiceCart;

 

  useEffect(()=>{
    window.scrollTo({
      top: 0
  });
  })

  return (
    <div className="ServiceCart">
      <SharedBanner>{category}</SharedBanner>
      {ServiceCart ? (
        <>
          <ProductDetails ServiceCart={ServiceCart}></ProductDetails>
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

export default DetailsContainer;
