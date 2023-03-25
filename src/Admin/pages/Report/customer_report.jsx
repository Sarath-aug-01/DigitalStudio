import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../admin.css"

const columns =[
    {field:"cus_id", headerName:"Customers ID",width:50},
    {field:"cus_name", headerName:"customer Name",width:400},
    {field:"cus_email", headerName:"Customer Email",width:350},
    {field:"gender", headerName:"Gender",width:200},
    {field:"cus_contact", headerName:"Customer Contact",width:150},
    {field:"cus_address", headerName:"Customer Address",width:500},
]

const Creport = () => {

const [data, setData ] = useState([]);

const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/customers/customersdetails");
    setData(response.data);
},[setData])
console.log(data)

useEffect(()=>{
    loadData();
},[loadData])


    return (  
        <>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{fontSize:'30px'}}>Customers Report</h1>
        <br></br>
      <div className="dataTable">
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId = {(row)=>row.cus_id}
          components={{Toolbar:GridToolbar}}
        />
      </div> 
        </>
    );
}
 
export default Creport;