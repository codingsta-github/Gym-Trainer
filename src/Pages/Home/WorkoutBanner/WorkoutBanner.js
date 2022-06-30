import React from "react";
import Service from "../Service/Service";
import "./WorkoutBanner.css";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { workoutContext } from "../../../App";
import { Link } from "react-router-dom";
import MobileServices from "./MobileWorkoutBanner";
const WorkoutBanner = () => {
  const workout = useContext(workoutContext);

  return (
    <div className="service-container">
      <div className="service-heading">
        <h1>CHOOSE THE Workout</h1>
        <h4>NEW GYM EXPERIENCE</h4>
      </div>

      <div className="services">
        {workout?.slice(0, 3).map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
      <div className="services1">
        <MobileServices></MobileServices>
      </div>

      <div className="workouts-btn">
        <Link to="/shop">
          {" "}
          <button>more Workouts</button>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutBanner;
