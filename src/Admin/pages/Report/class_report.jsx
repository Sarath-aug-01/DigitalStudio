import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../admin.css"

const columns =[
    {field:"cls_id", headerName:"Class ID",width:50},
    {field:"cls_name", headerName:"Class customer Name",width:400},
    {field:"cls_email", headerName:"Class customer Email",width:350},
    {field:"cls_contact", headerName:"Class customer Contact",width:150},
    {field:"cls_address", headerName:"Class customer Address",width:500},
]

const Clsreport = () => {

const [data, setData ] = useState([]);

const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/class/classdetails");
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
        <h1 style={{fontSize:'30px'}}>Classes Report</h1>
        <br></br>
      <div className="dataTable">
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId = {(row)=>row.cls_id}
          components={{Toolbar:GridToolbar}}
        />
      </div> 
        </>
    );
}
 
export default Clsreport;