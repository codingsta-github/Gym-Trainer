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
