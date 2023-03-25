import React from 'react';
import {Link} from 'react-scroll'



const Registrationpay = () => {

    const handleBuy = () =>{
        window.location.replace("https://rzp.io/l/YwmdDY8")
      }

    return ( 
        <>
        <br></br>
        <br></br>
        <center>
        <Link to="/Payment" smooth={true} spy={true}>
            <h1>Learn 5 days Professional photography class</h1>
            <br></br>
            <h2>Class Free ₹1000</h2>
            <button className="button s-button" onClick={handleBuy}>Pay Fees</button>
          </Link>
          </center>
        </>
     );
}
 
export default Registrationpay;