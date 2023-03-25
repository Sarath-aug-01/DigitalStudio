import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";
const Customer_details = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/booking/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (book_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/booking/remove/${book_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1>BOOKING</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/Add_Booking">
        <button className='btn btn-contact'>Add Booking</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    
                    <th style={{textAlign:"center"}}>FROM DATE</th>
                    <th style={{textAlign:"center"}}>TO DATE</th>
                    <th style={{textAlign:"center"}}>SHOOT TYPE</th>
                    <th style={{textAlign:"center"}}>NAME</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>BOOKING DATE</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.book_id}>
                            <th scope="row">{index+1}</th>
                           
                            <td>{item.from_date}</td>
                            <td>{item.to_date}</td>
                            <td>{item.shoot_type}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.bookdate}</td>
                            <td>
                                <Link to={`/admin/main/bookingupdate/${item.book_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.book_id)}>Delete</button>
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