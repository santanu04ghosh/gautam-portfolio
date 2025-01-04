import React from "react";
import {Link} from "react-router-dom";
import { NavLink } from "react-router";


const Navbar = () => {

    return(
        <nav className="navbar_pages">
            <div className="navbar_section">
                <div className="logo_Section">Gautam</div>
                <div className="nav_link_field">
                    <NavLink to="/home" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/publications">Publications</NavLink>
                </div>
            </div>
        
        
        
        
      </nav>
    )
}

export default Navbar