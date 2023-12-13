import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

import {IoMdMenu} from 'react-icons/io';
const Sidebar = ({ show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Sidebar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Add your sidebar content here */}
        
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
     
      {/* Add the rest of your main content here */}
    
    </div>
    </>
  );
};

export default Side;