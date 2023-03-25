import React ,{useState,useEffect, useCallback}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    P_name:"",
    P_description:"",
    P_quantity:"",
    P_price:"",
    sales_price:"",
}

const Add_products = () => {
    const[state,setState] = useState(initialState)

  const{P_name, P_description, P_quantity, P_price, sales_price} = state;
  
  const navigator = useNavigate();

  const {Product_id} = useParams();
  
  const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:4000/products/get/${Product_id}`);
    setState(response.data);
  },[Product_id])

  const [picture,setPicture] = useState([]);
  useEffect(() =>{
    loadData();
  },[loadData])  

  const handleImage = (e) =>{
    console.log(e.target.files[0])
    setPicture({ images: e.target.files[0].name})
  }

  console.log(state);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!P_name || !P_description || !P_quantity || !P_price ||  !sales_price)
        toast.error("Please provide value in input field");
    else{
        if(!Product_id){
            axios.post("http://localhost:4000/products/post",{
                P_name,
                P_description,
                P_quantity,
                P_price,
                sales_price,
                picture
            }).then(()=>{
                setState({P_name:"",P_description:"",P_quantity:"",P_price:"",P_image:"",sales_price:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/products/productupdate/${Product_id}`,{
                P_name,
                P_description,
                P_quantity,
                P_price,
                sales_price,
                picture
            }).then(()=>{
                setState({P_name:"",P_description:"",P_quantity:"",P_price:"",P_image:"",sales_price:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Custmer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/main/productList"), 500);
    }
  }  

  console.log(picture);

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }
    return (
        <>
        <h1 style={{fontSize:'30px'}}>ADD PRODUCTS</h1>
        <div style={{marginTop: '10px'}}>
            <form style={{
                margin:'auto',
                padding:'15px',
                maxWidth:'400px',
                alignContent:'center'
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id = 'P_name'
                    name='P_name' 
                    placeholder='Enter product Name...'
                    value={P_name||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    id = 'P_description'
                    name='P_description' 
                    placeholder='Enter product description...'
                    value={P_description||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='quantity'>Product Quantity</label>
                <input
                    type="number"
                    id = 'P_quantity'
                    name='P_quantity' 
                    placeholder='Enter quantity no...'
                    value={P_quantity||""}
                    onChange={handleInputChange}
                />
                <label htmlFor='price'>Product price</label>
                <input
                    type='text'
                    id = 'P_price'
                    name='P_price' 
                    placeholder='Enter Price...'
                    value={P_price||""}
                    onChange={handleInputChange}
                />
                 <label htmlFor='image'>Product Image</label>
                <input
                    type='file'
                    id = 'P_image'
                    name='P_image' 
                    
                    onChange={handleImage}
                />
                <br></br>
                <br></br>
                 <label htmlFor='cpassword'>Sales price</label>
                <input
                    type='text'
                    id = 'sales_price'
                    name='sales_price' 
                    placeholder='Enter the sales Price...'
                    value={sales_price||""}
                    onChange={handleInputChange}
                />
                <input type='submit' value={Product_id?"Update":"Save"}/>
                <Link to='/'>
                    <input type='button' value='Go Back' />
                </Link>
            </form>
        </div>
        </>
      )
    }
export default Add_products;