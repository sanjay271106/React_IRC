import React from 'react';
import './login.css'; 
import { useRef, useState } from 'react';

const Login = () => {

  const [visible, setVisible] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const age = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState({
      username: '',
      email: '',
      age: '',
      password: ''
  });

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  const validateForm = () => {
    let isValid = true;

   
    if (!passwordRegex.test(password.current.value)) {
        setErrors(prevErrors => ({ ...prevErrors, password:'invalid Password' }));
        isValid = false;
    } else {
        setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    }

    return isValid;
  };
    const Login1 = (e) => {
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
   
   const toggle = () => {
    setVisible(!visible);
    };
  return (
    <div className="cont shadow">
      <h3>Register</h3>
      <form className="asd">
        
        <input type="text" name="name" id="username" placeholder="Username" className="sam" />
           
      
        {/* <input type="email" name="email" id="email" placeholder="Email Address" className="sam" /> */}
        <input type="text" name="" id="email" placeholder="Email" className="sam" ref={email} />
        {errors.email ? (
          <div className='cancel-btn'>{errors.email}</div>
        ) : (<></>)}

        <input type="number" name="phone" id="mobile" placeholder="Mobile" className="sam" />


        <input type="text" name="age" id="age" placeholder="Age" className="sam" />


        <input type="password" name="pass" id="password" placeholder="Password" className="sam" />

 
        <input type="submit" value="Submit" className=" saam sm" />

      </form>
    </div>
  );
};

export default Login;
