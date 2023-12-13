import {FaUser } from "react-icons/fa"
const Nav =()=> {
    return (
        <>
        <nav>
           <div className="body2">
           
              <div className="left">
                    <h3>HomeStyle</h3>
              </div>
              <div className="middle">
                 <ul>
                    <li><a href=""  >Gallery</a></li>
                    <li><a href=""  >Living</a></li>
                    <li><a href=""  >Garden</a></li>
                    <li><a href=""  >Bedroom</a></li>
                    <li><a href=""  >Kitchen</a></li>
                    <li><a href=""  >Wardrobe</a></li>
                    <li><a href=""  >Furniture</a></li>
                 </ul>
              </div>
              <div className="right">
                    {/* <button type="button"><a href="">Login</a></button> */}
                    <button class="button button1">
                     {/* <link to="/Login"> */}
                        Login
                     {/* </link> */}
                    </button>

              </div>
           </div>
           </nav>
          
        </>
    )
}

export default Nav