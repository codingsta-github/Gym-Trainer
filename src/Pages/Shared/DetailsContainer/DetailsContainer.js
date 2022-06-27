import React from "react";
import "./DetailsContainer.css";
import { useParams } from "react-router-dom";
import useServiceCart from "../../../Hooks/useServiceCart";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import MainInfo from "./MainInfo/MainInfo";
import SharedBanner from "./SharedBanner/SharedBanner";
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
          <MainInfo ServiceCart={ServiceCart}></MainInfo>
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
