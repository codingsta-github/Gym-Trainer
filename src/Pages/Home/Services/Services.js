import React, { useState } from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [services, setServices] = useServices();
  const [cart, setCart] = useState([]);
  const addToCart = (services) => {
    const newArray = [...cart, services];
    setCart(newArray);
  };
  return (
    <div className="service-container">
      <div className="service-heading">
        <h1>CHOOSE THE PROGRAM</h1>
        <h4>NEW GYM EXPERIENCE</h4>
      </div>

      <div className="services">
        <Carousel responsive={responsive}>
          {services.map((service) => (
           
              <Service
                service={service}
                key={service.id}
                addToCart={addToCart}
              ></Service>
           
          ))}
        </Carousel>
        <div>*cart and product section coming soon</div>
      </div>
    </div>
  );
};

export default Services;
