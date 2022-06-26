import React from "react";
import "./Brand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from '../../../Assets/logo.png'
const Brand = () => {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate("/");
  };
  return (
    <div className="Brand" onClick={Navigate}>
      <div className="icon">
        <img src={logo} alt="" />
      </div>
      <div className="brand">
        <h1>Lindsey </h1>
        <h1>Vonn.</h1>
      </div>
    </div>
  );
};

export default Brand;
