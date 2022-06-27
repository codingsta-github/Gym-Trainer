import React from "react";
import { Link } from "react-router-dom";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SharedBanner from "../Shared/DetailsContainer/SharedBanner/SharedBanner";
import "./Shop.css";
const Shop = () => {
  const location = useLocation();
  return (
    <div className="Shop">
      <SharedBanner>{location.pathname}</SharedBanner>
      <div className="shop-container">
        <div className="shop-category">
          <Link to="/shop">
            <button>workout</button>
          </Link>
          <Link to="/shop/product">
          <button>product</button>
          </Link>
        </div>
        <div className="shop-ShowCase">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Shop;
