import React from "react";
import "./DetailsContainer.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import MainInfo from "./MainInfo/MainInfo";
import SharedBanner from "./SharedBanner/SharedBanner";
import useDetails from "../../../Hooks/useDetails";
import { useState } from "react";
const DetailsContainer = () => {
  
  const id = useParams();
  const [details] = useDetails(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <div className="Details">
      <SharedBanner>{details.category}</SharedBanner>
      
          <MainInfo details={details}></MainInfo>
          <AdditionalInfo details={details}></AdditionalInfo>
      
    </div>
  );
};

export default DetailsContainer;
