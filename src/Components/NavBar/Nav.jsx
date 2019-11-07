import React from "react";
import {NavLink} from "react-router-dom"


function Nav() {
    return(
       <header>
           <nav>
               <img src="../Images/Logo.png" className="Logo" alt="LocalMotion Logo"></img>
               <ul className="linkContainer">
                   <li className="links">
                   <NavLink to="/" className="navLinks">Login</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/home" className="navLinks">Home</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/workshops" className="navLinks">Workshops</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/donate" className="navLinks">Donate</NavLink>
                   </li>
                   <li className="links">
                       <NavLink to="/contact" className="navLinks">Contact</NavLink>
                   </li>
               </ul>
           </nav>
       </header>
    );
}


export default Nav;