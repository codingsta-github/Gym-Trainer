import React from 'react';
import './Brand.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell,faAngleDown} from "@fortawesome/free-solid-svg-icons";
const Brand = () => {
    return (
        <div className="Brand">
        <div className="icon">
          <FontAwesomeIcon icon={faDumbbell} />
        </div>
        <div className="brand">
          <h1>GURU </h1>
          <h1>MANN</h1>
        </div>
      </div>
    );
};

export default Brand;