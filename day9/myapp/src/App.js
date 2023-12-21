import React from "react"
import {Routes,Route} from 'react-router-dom'
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import EditUsers from "./components/EditUsers"
function App(){
    return(
        <>
           <Routes>
               <Route path='/' element={<Users/>}/>
               <Route path='/add' element={<AddUser/>}/>
               <Route path="/edit/:id" element={<EditUsers/>}/>
           </Routes>
        </>
    )
}
export default App