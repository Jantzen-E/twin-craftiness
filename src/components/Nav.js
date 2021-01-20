import React from 'react';
import { NavLink } from 'react-router-dom';
 
function Nav() {
    return(
        <div>
            <div className="title">
                <h1>The Cute Craft Shack</h1>
                <h2>Making crafts with the twins and Phoebe</h2>
            </div>
            <ul className="navbar">
                <li>
                    <NavLink to="/" activeStyle={{ color: '#6F7734'}} exact className="navbarLinks">
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{ color: '#6F7734'}} exact className="navbarLinks">
                    About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeStyle={{ color: '#6F7734'}} exact className="navbarLinks">
                    Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" activeStyle={{ color: '#6F7734'}} exact className="navbarLinks">
                    Gallery
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;