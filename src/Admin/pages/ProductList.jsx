import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";

const ProductList = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/products/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (Product_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/products/remove/${Product_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1 style={{fontSize:'30px'}}>PRODUCTS</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/Add_Products">
        <button className='btn btn-contact'>Add Products</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Product Name</th>
                    <th style={{textAlign:"center"}}>Product Description</th>
                    <th style={{textAlign:"center"}}>Product Quantity</th>
                    <th style={{textAlign:"center"}}>Product price</th>
                    <th style={{textAlign:"center"}}>Product images</th>
                    <th style={{textAlign:"center"}}>product sales prices</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.Product_id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.P_name}</td>
                            <td>{item.P_description}</td>
                            <td>{item.P_quantity}</td>
                            <td>{item.P_price}</td>
                            <td><img src={require(`../image/${item.P_image}`)} alt={item.p_image} width={50} height={50}/></td>
                            <td>{item.sales_price}</td>
                            <td>
                                <Link to={`/admin/main/productupdate/${item.Product_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.Product_id)}>Delete</button>
                                
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
        </>
  );
};

export default ProductList;