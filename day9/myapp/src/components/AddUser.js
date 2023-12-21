import React,{useState} from 'react';
import {addUser} from './Api'
import { useNavigate } from 'react-router-dom';

const Adduser = () =>{
  const navigate = useNavigate()
    const [data,setData] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange=(e)=>
    {
        setData({...data,[e.target.id]:e.target.value})
    }

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
         const res = await addUser(data)
         if(res.status===201)
         {
          alert('user added')
          navigate('/')
         }
        }
        catch(e){
          console.log(e);
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' id='username' placeholder='username' onChange={handleChange}/>
            <input type='email' id='email' placeholder='email' onChange={handleChange}/>
            <input type='password' id='password' placeholder='password' onChange={handleChange}/>
            <button type='submit'>Add</button>
        </form>
        </>
    )
}
export default Adduser;