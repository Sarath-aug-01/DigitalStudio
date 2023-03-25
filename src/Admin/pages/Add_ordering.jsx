import React ,{useState,useEffect, useCallback}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
 
    P_name:"",
    sales_price:"",
    order_quantity:"",
    cus_name:"",
    cus_contact:"",
    cus_email:"",
    cus_address:"",
    payment_status:""
}

const Addordering = () => {
  const[state,setState] = useState(initialState)

  const{P_name,sales_price,order_quantity,cus_name,cus_contact,cus_email,cus_address,payment_status,orderdate} = state;
  
  const navigator = useNavigate();

  const {order_id} = useParams();
  const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:4000/ordering/get/${order_id}`);
   response.data[0].from_date = response.data[0].from_date.split("T1")[0];
   response.data[0].to_date = response.data[0].to_date.split("T1")[0];
   setState(response.data[0])
  },[order_id,setState])

  useEffect(() =>{
    loadData()
  },[loadData])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(!P_name || !sales_price || !order_quantity || !cus_name || !cus_contact || !cus_email || !cus_address)
        toast.error("Please provide value in input field");
    else{
        if(!order_id){
            axios.post("http://localhost:4000/ordering/post",{
               
                P_name,
                sales_price,
                order_quantity,
                cus_name,
                cus_contact,
                cus_email,
                cus_address,
                payment_status
            }).then(()=>{
                setState({ P_name:"",sales_price:"",order_quantity:"",cus_name:"",cus_contact:"",cus_email:"",cus_address:"",payment_status:"",orderdate:""})
            }).catch((err)=>{
                toast.error(err.response.data);
                console.log(err.response.data);
            });
            toast.success("ordering Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            console.log(
                P_name,
                sales_price,
                order_quantity,
                cus_name,
                cus_contact,
                cus_email,
                cus_address
            )
            axios.put(`http://localhost:4000/ordering/update/${order_id}`,{
                
                P_name,
                sales_price,
                order_quantity,
                cus_name,
                cus_contact,
                cus_email,
                cus_address,
                payment_status
            }).then(()=>{
                setState({ P_name:"",sales_price:"",order_quantity:"",cus_name:"",cus_contact:"",cus_email:"",cus_address:"",payment_status:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Ordering Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/main/Ordering"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1>ADD Ordering</h1>
    <div style={{marginTop: '100px'}}>
        <form style={{
            margin:'auto',
            padding:'1px',
            maxWidth:'400px',
            alignContent:'center'
        }}
        onSubmit={handleSubmit}
        >
          
            <label htmlFor='product name'>Product name</label>
            <input
                type='text'
                id = 'P_name'
                name='P_name' 
                placeholder='Enter date...'
                value={P_name||""}
                onChange={handleInputChange}
            />
             
            <label htmlFor='sales_price'>sales price</label>
            <input
                type="text"
                id = 'sales_price'
                name='sales_price' 
                placeholder='Enter to price...'
                value={sales_price||""}
                onChange={handleInputChange}
            />
            <br></br>
            <label htmlFor='order_quantity'>Order Quantity</label>
            <input
                type='number'
                id = 'order_quantity'
                name='order_quantity' 
                value={order_quantity||""}
                onChange={handleInputChange}
            />
               
             <label htmlFor='cus_name'>Customer Name</label>
            <input
                type='text'
                id = 'cus_name'
                name='cus_name' 
                value={cus_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>customer Contact</label>
            <input
                type='number'
                id = 'cus_contact'
                name='cus_contact' 
                value={cus_contact||""}
                onChange={handleInputChange}
            />
             <label htmlFor='email'>Customer Email</label>
            <input
                type='email'
                id = 'cus_email'
                name='cus_email' 
                value={cus_email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='address'>Customer Address</label>
            <input
                type='text'
                id = 'cus_address'
                name='cus_address' 
                value={cus_address||""}
                onChange={handleInputChange}
            />
            <label htmlFor='shoot_type'>Payment Status</label>
             <select id="shoot_type" name="shoot_type"  value={payment_status||""} onChange={handleInputChange}>
                <option value="wedding">---------------------Select------------------</option>
                <option value="baby shower">Paid</option>
                <option value="pre-wedding">Not-Paid</option>
                

              </select>
            <br></br>
            <input type='submit' value={order_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addordering;