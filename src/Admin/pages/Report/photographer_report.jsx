import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../admin.css"

const columns =[
    {field:"pho_id", headerName:"Photographer ID",width:50},
    {field:"pho_name", headerName:"Photographer Name",width:400},
    {field:"pho_email", headerName:"Photographer Email",width:350},
    {field:"pho_contact", headerName:"Photographer Contact",width:150},
    {field:"pho_experience", headerName:"Photographer Experience",width:150},
    {field:"previous_experience", headerName:"Previous Experience",width:250},
    {field:"Pho_address", headerName:"Photographer Address",width:500},
]

const Phoreport = () => {

const [data, setData ] = useState([]);

const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/photographer/photographerdetails");
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
        <h1 style={{fontSize:'30px'}}>Photographer Report</h1>
        <br></br>
      <div className="dataTable">
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId = {(row)=>row.pho_id}
          components={{Toolbar:GridToolbar}}
        />
      </div> 
        </>
    );
}
 
export default Phoreport;