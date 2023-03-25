import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import {toast} from "react-toastify";
import { useEffect } from 'react';
import { useState } from 'react';


const Bookingreport = () => {
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("");
  const [data,setData] = useState([]);

  const handleSubmit = (e) =>{
   e.preventDefault();
   const date = new Date();
   const today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+String(date.getDate());
   console.log(today);
   if(from>today)
       toast.error("From Date Should not be greater than today");
   else if(from>to)
       toast.error("From date should not be greater than to date");
   else{
           axios.get(`http://localhost:4000/bookings/bookingdetails/${from}/${to}`).then((response)=>{
              console.log("Response");
               console.log(response.data)
               setData(response.data)
           }).catch((err)=>{
               toast.error(err.body.data)
           })
   }
}

useEffect(()=>{
setData(data)},
[data,setData]
)


const colums = [
  {field:"book_id", headerName:"Book Id",width:100},
  {field:"pho_id", headerName:"Photographer Name",width:250},
  {field:"from_date", headerName:"From Date",width:200},
  {field:"to_date", headerName:"To Date",width:200},
  {field:"shoot_type", headerName:"Shoot Type",width:250},
  {field:"name", headerName:"Name",width:250},
  {field:"contact", headerName:"Contact",width:150},
  {field:"email", headerName:"Email",width:250},
  {field:"address", headerName:"Address",width:450},
  {field:"bookdate", headerName:"Booked Date",width:200},
]
return (
<> 

<br></br>
<br></br>
<h1>Booking Report</h1>
  <div className='report'>
   <br></br>
<br></br>
      <form className="form" onSubmit={handleSubmit}>
        <pre>
          <div className="formInput">
              <label htmlFor="from">From:</label>
                  <input type="date" name="from" id="from" value={from||""} onChange={(e)=>{setFrom(e.target.value)}}/>   
                 
              <label htmlFor="to">To:</label>
                  <input type="date" name="to" id="to" value={to||""} onChange={(e)=>{setTo(e.target.value)}} />  
                  
              <button type="submit" className="btn2">Submit</button>
          </div>
          </pre>
      </form>
<br></br>
<br></br>
      <div className="dataTable">
  
    <DataGrid 
  rows={data}
  columns={colums}
  getRowId = {(row)=>row.book_id}
  components={{Toolbar:GridToolbar}}
/>
</div> 
  
  </div>
  </>
);
};

export default Bookingreport;
