import React, { useState, useEffect } from 'react'
import {getuser,deleteUser} from './Api'
import { useNavigate } from 'react-router-dom'
const Users =()=> {
    
    const navigate = useNavigate()
    const [user,setUser] = useState([])

    const fetchData =async()=> {
       try {
           const res = await getuser()
           setUser(res.data)
       }
       catch(e){
         console.log(e)
       }
    }

    const handleDelete =async(id)=>{
        try{
            const res = await deleteUser(id)
            if(res.status === 200){
                alert('deleted')
            }
            fetchData();
        }
        catch(e){
            console.log(e)
        }
    }

    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }

    useEffect (()=>{
        fetchData()
    },[])
    return (
        <>
           <table>   
               <thead>
                 <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                {
                    user.map ((user)=>(
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button onClick={()=>handleEdit(user.id)}>Edit</button></td>
                    <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                  </tr>
                  ))
                }
               </tbody>
           </table>
        </>
    )
}
export default Users;