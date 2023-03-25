import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../admin.css"

const columns =[
    {field:"Product_id", headerName:"Product ID",width:50},
    {field:"P_name", headerName:"Product Name",width:400},
    {field:"P_quantity", headerName:"Product Quantity",width:150},
    {field:"P_price", headerName:"Product Price",width:150},
    {field:"sales_price", headerName:"Product Sales Price",width:150},
]

const Preport = () => {

const [data, setData ] = useState([]);

const loadData = useCallback(async()=>{
    const response = await axios.get("http://localhost:4000/products/productsdetails");
    setData(response.data);
},[setData])
console.log(data)

useEffect(()=>{
    loadData();
},[loadData])


    return (  
        <>
        <h1 style={{fontSize:'30px'}}>Product Report</h1>
        <br></br>
      <div className="dataTable">
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId = {(row)=>row.Product_id}
          components={{Toolbar:GridToolbar}}
        />
      </div> 
        </>
    );
}
 
export default Preport;