import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './components/Card/Booking.jsx'
import Work from './work.js'
import Payment from './components/Testimonials/Payment.jsx';
import App from './Admin/App.js';
import Registrationpay from './components/Contact/Registration_payment.jsx';
import Ordering from './components/Testimonials/Ordering.jsx';
import Register from './components/Contact/Register.jsx'
import { ToastContainer } from 'react-toastify';
function Apps() {
  


  return (
   <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Payment" element={<Payment />} />

          <Route path="/Registrationpay" element={<Registrationpay />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Ordering" element={<Ordering />}/>
          <Route path="/admin/*" element={<App />}/>
        </Routes>
        
      </BrowserRouter>

   </>
  );
}

export default Apps;






