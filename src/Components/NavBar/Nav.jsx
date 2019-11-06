import React from "react";
import {NavLink} from "react-router-dom"


function Nav() {
    return(
       <header>
           <nav>
               <ul className="linkContainer">
                   <li className="links">
                   <NavLink to="/">Login</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/home">Home</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/workshops">Workshops</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/donate">Donate</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/contact">Contact</NavLink>
                   </li>
               </ul>
           </nav>
       </header>
    );
}


export default Nav;