import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id,image, name, price } = service;
  return (
    <div className="service">
      <img src={image} width="100%" alt="" />
      <div className="service-button">
        
          
          <Link to={`/DetailsContainer/${_id}`}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            </button>
          </Link>
       
      </div>
      <div className="service-details">
        <div className="service-info">
          <h1>{name}</h1>
        </div>
        <div className="service-price">
          <h1>
            $ {price} <span>/ month</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
