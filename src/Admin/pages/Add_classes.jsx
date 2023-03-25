import React ,{useState,useEffect}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    cus_name:"",
    cus_email:"",
    cus_contact:"",
    cus_address:"",
    cus_password:"",
    cus_cpassword:"",

}

const Addcustomer = () => {
  const[state,setState] = useState(initialState)

  const{cls_name,cls_email,cls_contact,cls_address} = state;
  
  const navigator = useNavigate();

  const {cls_id} = useParams();

  useEffect(() =>{
    axios
    .get(`http://localhost:4000/classes/get/${cls_id}`)
    .then((resp) => setState({...resp.data[0]}));
  },[cls_id])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!cls_name || !cls_email || !cls_contact || !cls_address)
        toast.error("Please provide value in input field");
    else{
        if(!cls_id){
            axios.post("http://localhost:4000/classes/post",{
                cls_name,
                cls_email,
                cls_contact,
                cls_address
            }).then(()=>{
                setState({cls_name:"",cls_email:"",cls_contact:"",cls_address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/classes/update/${cls_id}`,{
                cls_name,
                cls_email,
                cls_contact,
                cls_address,
            }).then(()=>{
                setState({cls_name:"",cls_email:"",cls_contact:"",cls_address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Custmer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/main/Classes"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1 style={{fontSize:'30px'}}>ADD CUSTOMER</h1>
    <div style={{marginTop: '100px'}}>
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
                id = 'cls_name'
                name='cls_name' 
                placeholder='Enter Name...'
                value={cls_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'cls_email'
                name='cls_email' 
                placeholder='Enter Email...'
                value={cls_email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>Contact</label>
            <input
                type="number"
                id = 'cls_contact'
                name='cls_contact' 
                placeholder='Enter mobile no...'
                value={cls_contact||""}
                onChange={handleInputChange}
            />
            <label htmlFor='address'>Address</label>
            <input
                type='text'
                id = 'cls_address'
                name='cls_address' 
                placeholder='Enter Address...'
                value={cls_address||""}
                onChange={handleInputChange}
            />
             
            <input type='submit' value={cls_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addcustomer;