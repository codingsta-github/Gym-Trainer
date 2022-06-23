import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer">
        <div className="footer-li">
          <ul>
            <li>home</li>
            <li>events</li>
            <li>blogs</li>
          </ul>
          <ul>
            <li>about</li>
            <li>shop</li>
            <li>faq</li>
          </ul>
          <ul>
            <li>programs</li>
            <li>services</li>
            <li>contacts</li>
          </ul>
        </div>
        <div className="footer-admin">
          <p>Copyright © {new Date().getFullYear()} GURU MANN</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
