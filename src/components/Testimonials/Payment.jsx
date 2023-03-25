import React from 'react';
import {Link} from 'react-scroll'
const Payment = () => {

    const handleBuy = () =>{
        window.location.replace("https://rzp.io/l/YwmdDY8")
      }

    return ( 
        <>
        <br></br>
        <br></br>
        <br></br>
        <center>
        <h1 style={{fontSize:'50px'}}>Make a Payment through online</h1>
        <Link to="/Payment" smooth={true} spy={true}>
            <button className="button s-button" onClick={handleBuy}>Make payment</button>
          </Link>
          </center>
        </>
     );
}
 
export default Payment;