import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { themeContext } from "../../Context";
const initialState = {
    cus_name:"",
    cus_email:"",
    cus_contact:"",
    cus_address:"",
    cus_password:"",
    cus_cpassword:"",

};
const Contact = () => {
  const[state,setState] = useState(initialState)
  const navigate = useNavigate();

  const{cls_name,cls_email,cls_contact,cls_address} = state;

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Register Form");
    if(!cls_name || !cls_email || !cls_contact || !cls_address)
        toast.error("Please provide value in input field");
    else{
            axios.post("http://localhost:4000/classes/post",{
                cls_name,
                cls_email,
                cls_contact,
                cls_address
            }).then(()=>{
                setState({cls_name:"",cls_email:"",cls_contact:"",cls_address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
            navigate("/Registrationpay")       
        }
    }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>We providing the <br />
          photography class to learn</span>
          
          <span style={{color: darkMode?'white': ''}}>Register it</span>
          
          <br></br>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="cls_name" className="user"  placeholder="Name" onChange={handleInputChange}/>
          <input type="email" name="cls_email" className="user" placeholder="Email" onChange={handleInputChange}/>
          
          <input type="phoneno" name="cls_contact" className="user" placeholder="Phone_no" onChange={handleInputChange}/>
          <input type="text" name="cls_address" className="user" placeholder="Address" onChange={handleInputChange}/>
          <input type="submit" value="Register" className="button"/>
          <span>{done && "Thanks for register in class we will make a call"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
