import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer">
        <div className="footer-li">
          <ul>
            <li>home</li>
            <li>blogs</li>
            <li>events</li>
          </ul>
          <ul>
            <li>faq</li>
            <li>shop</li>
            <li>about</li>
          </ul>
          <ul>
            <li>services</li>
            <li>contacts</li>
            <li>programs</li>
          </ul>
        </div>
        <div className="footer-admin">
          <p>Copyright © {new Date().getFullYear()} Lindsey Vonn.</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
