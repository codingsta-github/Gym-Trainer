import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import ProductBanner from "../ProductsBanner/ProductBanner";
import WorkoutBanner from "../WorkoutBanner/WorkoutBanner";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },1000);
  }, []);

  useEffect(()=>{
    window.scrollTo({
      top: 0
  });
  })
  return (
    <div className="home">
      <Banner></Banner>
      {loading && (
        <>
          <Banner2></Banner2>
          <WorkoutBanner></WorkoutBanner>
          <ProductBanner></ProductBanner>
        </>
      )}
      {/* <Features></Features> */}
    </div>
  );
};

export default Home;
