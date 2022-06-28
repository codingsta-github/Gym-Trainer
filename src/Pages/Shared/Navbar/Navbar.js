import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Ham = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className="Navbar">
      
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
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">Home</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/shop">shop</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">about</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">service</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">feature</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">events</Link></li>
          <li className="animate__animated animate__fadeInRight animate__delay-0.8s"><Link to="/">blogs</Link></li>
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
