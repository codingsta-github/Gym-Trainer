import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import Cart from "../../Cart/Cart";
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
    <div className="service-container" id="services">
      <div className="service-heading">
        <h1>CHOOSE THE PROGRAM</h1>
        <h4>NEW GYM EXPERIENCE</h4>
      </div>

      <div className="services">
        <Carousel responsive={responsive}>
          {services.map((service) => (
            <div>
              <Service
                service={service}
                key={service.id}
                addToCart={addToCart}
              ></Service>
            </div>
          ))}
        </Carousel>
        <div>more</div>
      </div>
    </div>
  );
};

export default Services;
