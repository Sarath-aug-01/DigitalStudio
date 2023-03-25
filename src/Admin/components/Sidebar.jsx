import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaPhotoVideo
}from "react-icons/fa";
import LoginIcon from '@mui/icons-material/Login';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CollectionsIcon from '@mui/icons-material/Collections';
import ClassIcon from '@mui/icons-material/Class';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LogoutIcon from '@mui/icons-material/Logout';

import { NavLink } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin/main",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/admin/main/customers_details",
            name:"Customers details",
            icon:<LoginIcon/>
        },
        {
            path:"/admin/main/Booking",
            name:"Booking",
            icon:<FaPhotoVideo/>
        },
        {
            path:"/admin/main/Photographer",
            name:"Photographer",
            icon:<PersonAddAltIcon/>
        },
        {
            path:"/admin/main/Add_Products",
            name:"Add Products",
            icon:<AddCardIcon/>
        },
        {
            path:"/admin/main/productList",
            name:"Product List",
            icon:<FormatListBulletedIcon />
        },
        {
            path:"/admin/main/ArtGallery",
            name:"Art gallery",
            icon:<CollectionsIcon/>
        },
        {
            path:"/admin/main/Classes",
            name:"Classes",
            icon:<ClassIcon/>
        },
        {
            path:"/admin/main/Ordering",
            name:"Ordering",
            icon:<TbTruckDelivery/>
        },
        {
            path:"/admin/main/Report",
            name:"Product Reports",
            icon:<ReportGmailerrorredIcon/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                <div className="heading">
                   <h1 style={{display: isOpen ? "block" : "none" }} className="logo">NDPS</h1></div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <NavLink to="/admin" className="link">
                    <div className='icon'><LogoutIcon /></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
               </NavLink>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;