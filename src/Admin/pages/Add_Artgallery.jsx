import React ,{useState,useEffect, useCallback}from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  
}

const Add_products = () => {
    const[state,setState] = useState(initialState)

  
  const navigator = useNavigate();

  const {art_id} = useParams();
  
  const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:4000/art/get/${art_id}`);
    setState(response.data);
  },[art_id])

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
        if(!art_id){
            axios.post("http://localhost:4000/art/post",{
                picture
            }).then(()=>{
                setState({art_image:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Photo Added Successfully", {position:toast.POSITION.TOP_CENTER});
                  
        }
        else{
            axios.put(`http://localhost:4000/art/artupdate/${art_id}`,{
                picture
            }).then(()=>{
                setState({art_image:""})
            }).catch((err)=>toast.error(err.response.data));
            toast.success("Photo Updated Successfully", {position:toast.POSITION.TOP_CENTER});
        }
        setTimeout(() => navigator("/admin/Artgallery"), 500);
    }
  

  console.log(picture);

//   const handleInputChange = (e) =>{
//     const {name, value} = e.target;
//     setState({...state,[name] :value})
//   }

    return (
        <>
        <h1>ADD PRODUCTS</h1>
        <div style={{marginTop: '10px'}}>
            <form style={{
                margin:'auto',
                padding:'15px',
                maxWidth:'400px',
                alignContent:'center'
            }}
            onSubmit={handleSubmit}
            >
                
                 <label htmlFor='image'>Gallery Image   </label>
                <input
                    type='file'
                    id = 'P_image'
                    name='P_image' 
                    onChange={handleImage}
                />
                
                <input type='submit' value={art_id?"Update":"Save"}/>
                <Link to='/'>
                    <input type='button' value='Go Back' />
                </Link>
            </form>
        </div>
        </>
      )
    }
export default Add_products;




