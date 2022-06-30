import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShowCase.css";
const ShowCase = ({ data }) => {
  const navigate = useNavigate();
  const DetailsContainer = () => {
    navigate(`/DetailsContainer/${data._id}`);
  };
  return (
    <div className="ShowCase" onClick={DetailsContainer}>
      <div className="showcase-img">
        <img src={data.image} alt="" />
        
      </div>
      <div className={"ShowCase-details"}>
        <h2>{data.name}</h2>
        <h1>${data.price}.00</h1>
      </div>
    </div>
  );
};

export default ShowCase;
