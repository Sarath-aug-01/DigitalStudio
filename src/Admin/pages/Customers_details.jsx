import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";
const Customer_details = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (cus_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/api/remove/${cus_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1>Customer</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/addcustomer">
        <button className='btn btn-contact'>Add Customer</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Password</th>
                    <th style={{textAlign:"center"}}>conform_Password</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.cus_id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.cus_name}</td>
                            <td>{item.cus_email}</td>
                            <td>{item.cus_contact}</td>
                            <td>{item.cus_address}</td>
                            <td>{item.cus_password}</td>
                            <td>{item.cus_cpassword}</td>
                            <td>
                                <Link to={`/admin/main/update/${item.cus_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.cus_id)}>Delete</button>
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
export default Customer_details;