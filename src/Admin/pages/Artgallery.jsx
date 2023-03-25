import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./admin.css";
import {toast} from "react-toastify";
import axios from "axios";
import "./design.css";

const Artgallery = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/art/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

const deleteContact = (art_id) => {
        if(window.confirm("Delete?")) {
            axios.delete(`http://localhost:4000/art/remove/${art_id}`);
            toast.success("Deleted Sucessfully");
            setTimeout(() => loadData(), 500);
        }
    };
  return (<>
    <h1>ART GALLERY</h1>
    <div style={{marginTop: "30px"}}>
        <Link to="/admin/main/Add_Artgallery">
        <button className='btn btn-contact'>Add photos</button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>gallery images</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=> {
                    return (
                        <tr keys={item.art_id}>
                            <th scope="row">{index+1}</th>
                            
                            <td><img src={require(`../image/${item.art_image}`)} alt={item.art_image} width={100} height={100}/></td>
                            <td>
                                <Link to={`/admin/main/artupdate/${item.art_id}`}>
                                <button className='btn btn-edit'>Edit</button>
                              </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.art_id)}>Delete</button>
                                
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

export default Artgallery;