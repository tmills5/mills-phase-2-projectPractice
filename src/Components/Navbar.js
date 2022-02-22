import React from "react";
import "./Navbar.css";

function Navbar () {
    return (
        <ul className="nav-list">
            <a className="nav-list-item" href=''>Home</a>
            <a className="nav-list-item" href=''>About</a>
            <a className="nav-list-item" href=''>Contact</a>
            <a className="nav-list-item" href=''>Search</a>
        </ul>
    )
    
}

export default Navbar;