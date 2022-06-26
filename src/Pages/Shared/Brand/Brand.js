import React from "react";
import "./Brand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Brand = () => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate("/");
  };
  return (
    <div className="Brand" onClick={Navigate}>
      <div className="icon">
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      <div className="brand">
        <h1>Lindsey Vonn.</h1>
        
      </div>
    </div>
  );
};

export default Brand;
