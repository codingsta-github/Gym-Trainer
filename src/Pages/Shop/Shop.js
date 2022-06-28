import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCarrot,
  faBottleWater,
  faEgg,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SharedBanner from "../Shared/DetailsContainer/SharedBanner/SharedBanner";
import "./Shop.css";

const Shop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  const location = useLocation();
  return (
    <div className="Shop">
      <SharedBanner>{location.pathname}</SharedBanner>
      <div className="shop-container">
        <div className="shop-category">
          <h1 >cart</h1>
          <h1>category</h1>
          <ul>
            <li>
              <Link to="/shop">
                Workout <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link to="/shop/product">
                product <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link to="/shop/devices">
                devices <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link to="/shop/magazine">
                magazine <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        
        </div>
        <div className="shop-ShowCase">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Shop;
