import React from "react";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
        <Nav/>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/contact"  element={<Contact/>}></Route>
        </Routes>
    </>
  );
}

export default App;
