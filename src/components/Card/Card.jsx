import React from "react";
import {Link} from "react-router-dom";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="/Booking">
      <button className="c-button">Book Now</button>
      </Link>
    </div>
  );
};

export default Card;
