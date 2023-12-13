
import {useState} from 'react'
const Popup =()=> {
    const [data,setData] = useState({
        username:'',
        password:''
    })
    const handleChange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
         alert('submitted');
    }
    return (
        <>
        <form>
            <input type="text" placeholder="username" id="username" onChange={handleChange}/>
            <input type="password" placeholder="password" id="password" onChange={handleChange}/>
            <input type="submit" value="Login" onSubmit={handleSubmit}/>
        </form>
        </>
    )
}

export default Popup;