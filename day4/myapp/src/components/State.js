import React from 'react';
import {useState} from 'react';

const State =()=> {
    const [visible, setVisible] = useState(true);
    const toggle =()=> {
        setVisible(!visible);
    }
    setTimeout( ()=>{
        setVisible(false)
    },5000)
    return (
        <>
           {visible ? (
              <div className="cars-wrapper">
                <div className="card ">
                <p className="cookieheading">We use cookies</p>
                <p className="Description">This website uses cookies to ensure you get the best experience</p>
                <div className="buttoncontainer">
                    <button className="accept" onclick={toggle}>Allow</button>
                    <button className="decline" onclick={toggle}>Decline</button>
                </div>
                </div>
              </div>
           ) : (
            <button onclick={toggle}>Manage Cookies</button>
           )
         }
        </>
    )
}

export default State;