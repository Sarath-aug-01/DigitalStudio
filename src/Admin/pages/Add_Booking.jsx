import React ,{useState,useEffect, useCallback}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
 
    from_date:"",
    to_date:"",
    shoot_type:"",
    name:"",
    contact:"",
    email:"",
    address:""
}

const Addcustomer = () => {
  const[state,setState] = useState(initialState)

  const{from_date,to_date,shoot_type,name,contact,email,address,bookdate} = state;
  
  const navigator = useNavigate();

  const {book_id} = useParams();
  const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:4000/booking/get/${book_id}`);
   response.data[0].from_date = response.data[0].from_date.split("T1")[0];
   response.data[0].to_date = response.data[0].to_date.split("T1")[0];
   setState(response.data[0])
  },[book_id,setState])

  useEffect(() =>{
    loadData()
  },[loadData])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(from_date , to_date , shoot_type , name , contact , email , address)
    if(!from_date || !to_date || !shoot_type || !name || !contact || !email || !address)
        toast.error("Please provide value in input field");
    else{
        if(!book_id){
            axios.post("http://localhost:4000/booking/post",{
               
                from_date,
                to_date,
                shoot_type,
                name,
                contact,
                email,
                address
            }).then(()=>{
                setState({from_date:"",to_date:"",shoot_type:"",name:"",contact:"",email:"",address:"",bookdate:""})
            }).catch((err)=>{
                toast.error(err.response.data);
                console.log(err.response.data);
            });
            toast.success("booking Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            console.log(
                 from_date, to_date, shoot_type, name, contact, email, address
            )
            axios.put(`http://localhost:4000/booking/update/${book_id}`,{
                
                from_date,
                to_date,
                shoot_type,
                name,
                contact,
                email,
                address
            }).then(()=>{
                setState({from_date:"",to_date:"",shoot_type:"",name:"",contact:"",email:"",address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Booking Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/main/Booking"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1>ADD Booking</h1>
    <div style={{marginTop: '100px'}}>
        <form style={{
            margin:'auto',
            padding:'15px',
            maxWidth:'400px',
            alignContent:'center'
        }}
        onSubmit={handleSubmit}
        >
           
            <br></br>
            <label htmlFor='from date'>From Date</label>
            <input
                type='date'
                id = 'from_date'
                name='from_date' 
                placeholder='Enter date...'
                value={from_date||""}
                onChange={handleInputChange}
            />
              <br></br>
            <br></br>
            <label htmlFor='to date'>To Date</label>
            <input
                type="date"
                id = 'to_date'
                name='to_date' 
                placeholder='Enter to date...'
                value={to_date||""}
                onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <label htmlFor='shoot_type'>Shoot type</label>
             <select id="shoot_type" name="shoot_type"  value={shoot_type||""} onChange={handleInputChange}>
                <option value="wedding">wedding</option>
                <option value="baby shower">baby shower</option>
                <option value="pre-wedding">pre-Wedding</option>
                <option value="post-wedding">Post-wedding</option>
                <option value="group photo">Group photo</option>

              </select>
               
             <label htmlFor='name'>Name</label>
            <input
                type='text'
                id = 'name'
                name='name' 
                value={name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>Contact</label>
            <input
                type='number'
                id = 'contact'
                name='contact' 
                value={contact||""}
                onChange={handleInputChange}
            />
             <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'email'
                name='email' 
                value={email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='address'>Address</label>
            <input
                type='text'
                id = 'address'
                name='address' 
                value={address||""}
                onChange={handleInputChange}
            />
            <br></br>
            <input type='submit' value={book_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addcustomer;