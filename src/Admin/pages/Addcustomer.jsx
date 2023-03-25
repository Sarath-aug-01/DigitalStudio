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

  const{cus_name,cus_email,cus_contact,cus_address,cus_password,cus_cpassword} = state;
  
  const navigator = useNavigate();

  const {cus_id} = useParams();

  useEffect(() =>{
    axios
    .get(`http://localhost:4000/api/get/${cus_id}`)
    .then((resp) => setState({...resp.data[0]}));
  },[cus_id])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(cus_cpassword+" "+cus_password)
    if(!cus_name || !cus_email || !cus_contact || !cus_address || !cus_password || !cus_cpassword)
        toast.error("Please provide value in input field");
    else if(cus_password!==cus_cpassword)
            toast.error("Password did mnot match", {position:toast.POSITION.TOP_CENTER});
    else{
        if(!cus_id){
            axios.post("http://localhost:4000/api/post",{
                cus_name,
                cus_email,
                cus_contact,
                cus_address,
                cus_password,
                cus_cpassword
            }).then(()=>{
                setState({cus_name:"",cus_email:"",cus_contact:"",cus_address:"",cus_password:"",cus_cpassword:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Customer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/api/update/${cus_id}`,{
                cus_name,
                cus_email,
                cus_contact,
                cus_address,
                cus_password,
                cus_cpassword,
            }).then(()=>{
                setState({cus_name:"",cus_email:"",cus_contact:"",cus_address:"",cus_password:"",cus_cpassword:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Custmer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/customers_details"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1>ADD CUSTOMER</h1>
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
                id = 'cus_name'
                name='cus_name' 
                placeholder='Enter Name...'
                value={cus_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'cus_email'
                name='cus_email' 
                placeholder='Enter Email...'
                value={cus_email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>Contact</label>
            <input
                type="number"
                id = 'cus_contact'
                name='cus_contact' 
                placeholder='Enter mobile no...'
                value={cus_contact||""}
                onChange={handleInputChange}
            />
            <label htmlFor='address'>Address</label>
            <input
                type='text'
                id = 'cus_address'
                name='cus_address' 
                placeholder='Enter Address...'
                value={cus_address||""}
                onChange={handleInputChange}
            />
             <label htmlFor='password'>Password</label>
            <input
                type='password'
                id = 'cus_pasword'
                name='cus_password' 
                value={cus_password||""}
                onChange={handleInputChange}
            />
             <label htmlFor='cpassword'>Confirm Password</label>
            <input
                type='password'
                id = 'cus_cpasword'
                name='cus_cpassword' 
                value={cus_cpassword||""}
                onChange={handleInputChange}
            />
            <input type='submit' value={cus_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addcustomer;