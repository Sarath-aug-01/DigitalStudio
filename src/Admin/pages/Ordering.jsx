import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";

const Ordering = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/ordering/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (order_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/ordering/remove/${order_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
    return (
        <>
    
            <h1 style={{fontSize:'45px'}}>Ordering</h1>

            <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/Add_ordering">
        <button className='btn btn-contact'>Add Ordering</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    
                    <th style={{textAlign:"center"}}>Product Name</th>
                    <th style={{textAlign:"center"}}>Product Price</th>
                    <th style={{textAlign:"center"}}>Quantity</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Payment_status</th>
                    <th style={{textAlign:"center"}}>ORDER DATE</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.order_id}>
                            <th scope="row">{index+1}</th>
                           
                            <td>{item.P_name}</td>
                            <td>{item.sales_price}</td>
                            <td>{item.order_quantity}</td>
                            <td>{item.cus_name}</td>
                            <td>{item.cus_contact}</td>
                            <td>{item.cus_email}</td>
                            <td>{item.cus_address}</td>
                            <td>{item.payment_status}</td>
                            <td>{item.orderdate}</td>
                            <td>
                                <Link to={`/admin/main/bookingupdate/${item.order_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.order_id)}>Delete</button>
                                {/* <Link to={`/view/${item.cus_id}`}>
                                <button className='btn btn-view'>View</button>
                                </Link> */}
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

export default Ordering;