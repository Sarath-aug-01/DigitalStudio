import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/m2.png";
import Fiverr from "../../img/m3.png";
import Amazon from "../../img/m1.png";
import Shopify from "../../img/m4.png";
import Facebook from "../../img/m5.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          ABOUT - [NDPS]
          </span>
          <span>Photography & Classes</span>
          <spane>
          In order to give you priceless experiences, we help you construct your memories.
            <br />
            We provide presents that may be personalised for other people,
            <br />
            to aid in your growth as a photographer, we offer photography classes.
            <br />
            We give everything our all to make sure you succeed.
          </spane>
          <Link to="services" smooth={true} spy={true}>
            <button className="button s-button">Book Now</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />

          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
