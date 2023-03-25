import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Price.docx';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Booking</span>
        <span>Phototype</span>
        <spane>
        NISHANTH DIGITAL PHOTO STUDIO [NDPS] we provide the
          <br />
          photography types like
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download price</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Wedding"}
            detail={"events of the day with posed images that are inspired by editorial fashion photography"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Baby shower"}
            detail={"Baby shower make that period your memorable"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Birthday"}
            detail={
              "Make your lovely day memories"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ left: "-11rem", top: "31rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Pre wedding"}
            detail={"Allows both partners to get to know each other better"}
          />
        </motion.div>
         {/* 5th */}
         <motion.div
          initial={{ top: "38rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Post wedding"}
            detail={
              "Documents your journey with your partner and can be done anytime you would like"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 6th */}
        <motion.div
          initial={{ left: "-11rem", top: "50rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Modeling photoshoot"}
            detail={"Trending photoshoot to make you style"}
          />
        </motion.div>
         {/* 7th */}
         <motion.div
          initial={{ top: "57rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Group photoshoot-college / schooll"}
            detail={
              "Make your memories with friends and staff"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>



        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
     
      
    </div>
  );
};

export default Services;
