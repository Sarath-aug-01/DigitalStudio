import React from 'react'
import {Link} from 'react-router-dom'
const Ordering = () => {
    return (  
        <>
    
        
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Add icon library */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\n\n.input-container {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.icon {\n  padding: 10px;\n  background: dodgerblue;\n  color: white;\n  min-width: 50px;\n  text-align: center;\n}\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n\n.input-field:focus {\n  border: 2px solid dodgerblue;\n}\n\n/* Set a style for the submit button */\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.btn:hover {\n  opacity: 1;\n}\n"
    }}
  />
  <form action="/action_page.php" style={{ maxWidth: 500, margin: "auto" }}>
    <br></br>
    <br></br>
    <center>
    <h2 style={{fontSize:'50px'}}>Make Orders</h2></center>
    <br></br>
    
    <h1>Product Name</h1>
    <div className="input-container">
      <i className="fa fa-product-hunt icon" />
      <select id="productname" name="productname" >
                <option value="select">---Select---</option>
                <option value="Pillow">Pillow</option>
                <option value="Photoframes">Photoframes</option>
                <option value="Clocks">Clocks</option>
                <option value="Water bottles">Water bottles</option>
                <option value="Cups">Cups</option>
                <option value="Bluetooth speaker">Bluetooth speaker</option>

              </select>
    </div>

    <h1>Quantity</h1>
    <div className="input-container">
      <i className="fa fa-sort-amount-asc icon" />
      <input
        className="input-field"
        type="number"
        placeholder="quantity"
        name="quantity"
      />
    </div>

<h1>Name</h1>
    <div className="input-container">
      <i className="fa fa-user icon" />
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        name="name"
      />
    </div>
<h1>Contact</h1>
    <div className="input-container">
      <i className="fa fa-address-book icon" />
      <input
        className="input-field"
        type="number"
        placeholder="Phone number"
        name="phone no"
      />
    </div>
    
    <h1>Email</h1>
    <div className="input-container">
      <i className="fa fa-envelope icon" />
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        name="email"
      />
    </div>

    <h1>Address</h1>
    <div className="input-container">
      <i className="fa fa-address-card icon" />
      <input
        className="input-field"
        type="address"
        placeholder="Address"
        name="Address"
      />
    </div>

    <center>
    <Link to="/Payment">
    <button className="button s-button">Next</button>
    </Link></center>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </form>

        </>
    );
}
 
export default Ordering;
