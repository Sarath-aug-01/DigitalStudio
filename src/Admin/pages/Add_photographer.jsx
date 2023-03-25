import React ,{useState,useEffect}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    pho_name:"",
    pho_email:"",
    pho_contact:"",
    pho_experience:"",
    previous_experience:"",
    pho_address:"",
    

}

const Addcustomer = () => {
  const[state,setState] = useState(initialState)

  const{pho_name,pho_email,pho_contact,pho_experience,previous_experience,Pho_address} = state;
  
  const navigator = useNavigate();

  const {pho_id} = useParams();

  useEffect(() =>{
    axios
    .get(`http://localhost:4000/photographer/get/${pho_id}`)
    .then((resp) => setState({...resp.data[0]}));
  },[pho_id])  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!pho_name || !pho_email || !pho_contact || !pho_experience || !previous_experience || !Pho_address)
        toast.error("Please provide value in input field");
    else{
        if(!pho_id){
            axios.post("http://localhost:4000/photographer/post",{
                pho_name,
                pho_email,
                pho_contact,
                pho_experience,
                previous_experience,
                Pho_address
            }).then(()=>{
                setState({pho_name:"",pho_email:"",pho_contact:"",pho_experience:"", previous_experience:"",Pho_address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("photographer Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/photographer/update/${pho_id}`,{
                pho_name,
                pho_email,
                pho_contact,
                pho_experience,
                Pho_address,
            }).then(()=>{
                setState({pho_name:"",pho_email:"",pho_contact:"",pho_experience:"", previous_experience:"",Pho_address:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("photographer Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/main/Photographer"), 500);
    }
  }  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({...state,[name] :value})
  }

  return (
    <>
    <h1 style={{fontSize:'30px'}}>ADD PHOTOGRAPHER</h1>
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
                id = 'pho_name'
                name='pho_name' 
                placeholder='Enter Name...'
                value={pho_name||""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id = 'php_email'
                name='pho_email' 
                placeholder='Enter Email...'
                value={pho_email||""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>Contact</label>
            <input
                type="number"
                id = 'pho_contact'
                name='pho_contact' 
                placeholder='Enter mobile no...'
                value={pho_contact||""}
                onChange={handleInputChange}
            />
            <label htmlFor='experience'>Experience</label>
            <input
                type="number"
                id = 'pho_experience'
                name='pho_experience' 
                placeholder='Enter experience year...'
                value={pho_experience||""}
                onChange={handleInputChange}
            />
             <label htmlFor='name'>Previous Experience</label>
            <input
                type='text'
                id = 'previous_experience'
                name='previous_experience' 
                placeholder='Enter previous experience...'
                value={previous_experience||""}
                onChange={handleInputChange}
            />
            <label htmlFor='address'>Address</label>
            <input
                type='text'
                id = 'Pho_address'
                name='Pho_address' 
                placeholder='Enter Address...'
                value={Pho_address||""}
                onChange={handleInputChange}
            />
             
            <input type='submit' value={pho_id?"Update":"Save"}/>
            <Link to='/'>
                <input type='button' value='Go Back' />
            </Link>
        </form>
    </div>
    </>
  )
}

export default Addcustomer;