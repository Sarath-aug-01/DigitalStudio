import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";
const Customer_details = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/classes/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (cls_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/classes/remove/${cls_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1 style={{fontSize:'30px'}}>Classes</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/Add_classes">
        <button className='btn btn-contact'>Add Classes</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.cls_id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.cls_name}</td>
                            <td>{item.cls_email}</td>
                            <td>{item.cls_contact}</td>
                            <td>{item.cls_address}</td>
                            <td>
                                <Link to={`/admin/main/classesupdate/${item.cls_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.cls_id)}>Delete</button>
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