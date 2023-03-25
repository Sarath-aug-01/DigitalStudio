import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';


import Booking from './pages/Booking.jsx'
import Addbooking from './pages/Add_Booking'

import Photographer from './pages/Photographer.jsx'
import AddPhotographer from './pages/Add_photographer.jsx'


import Customer from './pages/Customers_details.jsx';
import Addcustomer from './pages/Addcustomer.jsx';

import Addproducts from './pages/Add_Products.jsx';
import ProductList from './pages/ProductList.jsx';

import AddArtgallery from './pages/Add_Artgallery.jsx';
import Artgallery from './pages/Artgallery.jsx';

import Classes from './pages/Classes.jsx';
import AddClasses from './pages/Add_classes.jsx';

import Addordering from './pages/Add_ordering.jsx';
import Ordering from './pages/Ordering.jsx';

import Preport from './pages/Report/Product_Report'
import Creport from './pages/Report/customer_report'
import Clsreport from './pages/Report/class_report'
import Phoreport from './pages/Report/photographer_report'
import Bookingreport from './pages/Report/booking_report'
import Report from './pages/Report.jsx'

const Main = () => {
  return (
    <div>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
                  
         <Route path="/customers_details" element={<Customer />} />
          <Route path="/addcustomer" element={<Addcustomer />} />
          <Route path="/update/:cus_id" element={<Addcustomer />} />

          <Route path="/Booking" element={<Booking />} />
          <Route path="/Add_booking" element={<Addbooking />} />
          <Route path="/bookingupdate/:book_id" element={<Addbooking />} />

          <Route path="/Photographer" element={<Photographer />} />
          <Route path="/Add_Photographer" element={<AddPhotographer />} />
          <Route path="/photographerupdate/:pho_id" element={<AddPhotographer />} />

          <Route path="/ArtGallery" element={<Artgallery />} />
          <Route path="/Add_Artgallery" element={<AddArtgallery />} />
          <Route path="/artupdate/:art_id" element={<AddArtgallery />} />

          <Route path="/productList" element={<ProductList />} />
          <Route path="/Add_Products" element={<Addproducts />} />
          <Route path="/productupdate/:Product_id" element={<Addproducts />} />

          <Route path="/Classes" element={<Classes />} />
          <Route path="/Add_classes" element={<AddClasses/>} />
          <Route path="/classesupdate/:cls_id" element={<AddClasses />} />

          <Route path="/Ordering" element={<Ordering />} />
          <Route path="/Add_ordering" element={<Addordering />} />

          <Route path="/Preport" element={<Preport />} />
          <Route path="/Creport" element={<Creport />} />
          <Route path="/Clsreport" element={<Clsreport />} />
          <Route path="/Phoreport" element={<Phoreport />} />
          <Route path="/Bookingreport" element={<Bookingreport />} />
          <Route path="/Report" element={<Report />} />
         
        </Routes>
      </Sidebar>
    </div>
  )
}

export default Main