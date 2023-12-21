import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import {IoMdMenu} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';

const Sidebar = ({ show, onHide }) => {
  const navigate = useNavigate();
  const handleLogin =()=> {
   navigate('/Login')
 };

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My HomeStyle</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
    {/* Add your sidebar content here */}
    {/* <Stack spacing={0} direction="column">
      <Button variant="Outlined" className='sidebutton' sx={{backgroundColor:'white',height:50,fontSize:18,fontWeight:700}} >Home</Button>
      <Button variant="Contained" sx={{backgroundColor:'white',height:50,fontSize:18,fontWeight:700}} >About</Button>
      <Button variant="Contained" sx={{backgroundColor:'white',height:50,fontSize:18,fontWeight:700}} >Contact</Button>
      <Button variant="Contained" sx={{backgroundColor:'white',height:50,fontSize:18,fontWeight:700}} >Reviews</Button>
    </Stack> */}

    <div className='sidepanel'>
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
      <button>Reviews</button>
      <button onClick={handleLogin}>My&nbsp;account</button>
    </div>
        
    </Offcanvas.Body>
    </Offcanvas>

  );
};

const Side = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <>
    <div className="sidepanel">
      
      <IoMdMenu className="menu"  onClick={handleToggleSidebar}/>
      <Sidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
   
    </div>
    </>
  );
};

export default Side;