import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

// import Sign from "../Login/Sign";

const navbar = () => {
  return (
    <>
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <div className="n-name">Colour</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Booking
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
              Gallery
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Products
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Photography Class
              </Link>
            </li>
            <li>
              <NavLink to="/admin">
                Admin
              </NavLink>
            </li>
            <li>
            
        <button className="button n-button">
        <Link to="sign" spy={true} smooth={true}>
                Login
              </Link>
          </button>
        
            </li>
          </ul>
        </div>
       
        
      </div>
      
    </div>
    </>
  );
};

export default navbar;
