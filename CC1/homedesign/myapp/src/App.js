import React from 'react'
// import { Button, Offcanvas } from 'react-bootstrap';

import Body from './components/Body';
import Login from './components/Login'
import './assets/cssfiles/Login.css'
import Register from './components/Register';
import './assets/cssfiles/Register.css'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import { FaHandHoldingMedical } from 'react-icons/fa';
const App =()=> {
    return (
      <>
        
        <Router>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
          </Routes>
        </Router>
      </>
    )
}
export default  App;
