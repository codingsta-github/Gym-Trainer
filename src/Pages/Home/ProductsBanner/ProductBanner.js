import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../App";
import ShowCase from "../../Shop/ShowCase/ShowCase";
import MobileProductBanner from "./MobileProductBanner";
import "./ProductBanner.css";
const ProductBanner = ({children}) => {
  const product = useContext(productContext);
  return (
    <div className="Product-banner">
      <div className="banner-details">
        <h1>{children}</h1>
        <h4>BEST FOR YOU</h4>
      </div>
      <div className="product-banner">
      {
        product.slice(0,3).map(data=><ShowCase data={data}></ShowCase>)
      }
      </div>
      <div className="product-banner1">
        <MobileProductBanner></MobileProductBanner>
      </div>
      <div className="workouts-btn">
        <Link to="/shop/product">
          {" "}
          <button>more products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductBanner;
