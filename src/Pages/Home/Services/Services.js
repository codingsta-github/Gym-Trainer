import React, { useState } from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Services = () => {
  

  const [services, setServices] = useServices();
  const [cart, setCart] = useState([]);
  const addToCart = (services) => {
    const newArray = [...cart, services];
    setCart(newArray);
  };
  return (
    <div className="service-container">
      <div className="service-heading">
        <h1>CHOOSE THE Workout</h1>
        <h4>NEW GYM EXPERIENCE</h4>
      </div>

      <div className="services">
       
          {services?.slice(0,3).map((service) => (
           
              <Service
                service={service}
                key={service.id}
                addToCart={addToCart}
              ></Service>
           
          ))}
       
        
      </div>
      <div className="workouts-btn">
        <button >more Workouts</button>
        </div>
    </div>
  );
};

export default Services;
