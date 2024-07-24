import React from 'react';
import './login.css'; 
import { useRef, useState } from 'react';

const Loginx = () => {

//   const [visible, setVisible] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const age = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState({
      username: '',
      email: '',
      mobile:'',
      age: '',
      password: ''
  });

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  const validateForm = () => {
    let isValid = true;

    
    if(username.current.value.length <= 7)
    {
        setErrors(prevErrors => ({ ...prevErrors, username:'username must be 8 charecters' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, username: '' }));
    }

    if(email.current.value.length <= 10)
    {
        setErrors(prevErrors => ({ ...prevErrors, email:'enter valid email address' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }

    if(mobile.current.value.length !== 10)
    {
        setErrors(prevErrors => ({ ...prevErrors, mobile:'must be 10 numbers' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, mobile: '' }));
    }

    if(age.current.value.length !== 2)
    {
        setErrors(prevErrors => ({ ...prevErrors, age:'Age must be greater than 10' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, age: '' }));
    }

    if (!passwordRegex.test(password.current.value)) {
        setErrors(prevErrors => ({ ...prevErrors, password:'password must contain minimum 8 characters' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    }

    return isValid;
  };
    const login = (e) => {
      e.preventDefault();
      if (!validateForm()) {
         return;
    }

    const data = {
        username: username.current.value,
        email: email.current.value,
        mobile: mobile.current.value,
        age: age.current.value,
        password: password.current.value
    };
    console.log(data);

    username.current.value = '';
    email.current.value = '';
    mobile.current.value = '';
    age.current.value = '';
    password.current.value = '';
    email.current.focus();
   };
   
//    const toggle = () => {
//     setVisible(!visible);
//     };
  return (
    <div className="cont shadow">
      <h3>Register</h3>
      <form className="asd" onSubmit={login}>
        
        <input type="text" name="" id="username" placeholder="Username" className="sam" ref={username}/>
        {errors.username ? (
          <div className='cancel-btn'>{errors.username}</div>
        ) : (<></>)}
      
        <input type="text" name="" id="email" placeholder="Email" className="sam" ref={email} />
        {errors.email ? (
          <div className='cancel-btn'>{errors.email}</div>
        ) : (<></>)}

        <input type="text" name="" id="mobile" placeholder="Mobile" className="sam" ref={mobile}/>
        {errors.mobile ? (
            <div className='cancel-btn'>{errors.mobile}</div>
        ) : (<></>)}

        <input type="text" name="" id="age" placeholder="Age" className="sam" ref={age} />
        {errors.age ? (
            <div className='cancel-btn'>{errors.age}</div>
        ) : (<></>)}

        <input type="password" name="" id="password" placeholder="Password" className="sam" ref={password} />
        {errors.password ? (
            <div className='cancel-btn'>{errors.password}</div>
        ) : (<></>)}
 
        <input type="submit" value="Submit" className=" saam sm"  />

      </form>
    </div>
  );
};

export default Loginx;
