import React, { useEffect } from 'react'
import { useState } from 'react'
import {getUserId,editUser} from './Api'
import { useNavigate, useParams } from 'react-router-dom'

const EditUsers =()=> {

  const {id} = useParams();
  const navigate = useNavigate()
  const [data,setData] = useState({
    username:'',
    email:'',
    password:''
})

  const fetchUser =async()=>{
    try{
      const res = await getUserId(id)
      setData(res.data)
    }
    catch(e){
      console.log(e)
    }
  }

const handleChange=(e)=>
{
    setData({...data,[e.target.id]:e.target.value})
}

const handleSubmit=async(e)=>
{
    e.preventDefault();
    try{
      const res2 = await editUser(id,data)
      console.log(res2);
        alert('updated');
        navigate('/');
    }
    catch(e){
      console.log(e)
    }
}

useEffect(()=>{
   fetchUser();
},[])

  return (
        <>
         <form onSubmit={handleSubmit}>
            <input type='text' value={data.username} id='username' placeholder='username' onChange={handleChange}/>
            <input type='email' value={data.email} id='email' placeholder='email' onChange={handleChange}/>
            <input type='password' value={data.password}id='password' placeholder='password' onChange={handleChange}/>
            <button type='submit' >update</button>
        </form>
        </>
    )
}
export default EditUsers;