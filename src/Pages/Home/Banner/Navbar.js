import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Ham = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  return (
    <nav className="navbar">
      {sidebar ? (
        <div className="sidebar">
          <div className="ham-container" onClick={Ham}>
          <div className="bar">
            {sidebar ? (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            )}
          </div>
        </div>
        <ul>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">Home</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">about</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">service</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">feature</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">events</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">blogs</li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s">shop</li>
        </ul>
        </div>
      ) : (
        <div className="ham-container" onClick={Ham}>
          <div className="bar">
            {sidebar ? (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
