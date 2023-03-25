import React from 'react'
import Preport from './Report/Product_Report'
import Creport from './Report/customer_report'
import Phoreport from './Report/photographer_report';
import Clsreport from './Report/class_report';
import Bookingreport from './Report/booking_report';

const Report = () => {
    return ( 
        <>
        <h1 style={{fontSize:'40px'}}>Report</h1>
        <br></br>
        <br></br>
       <Preport />
       <Creport />
        <Phoreport />
        <Clsreport />
        <Bookingreport />
        </>
     );
}
 
export default Report;

