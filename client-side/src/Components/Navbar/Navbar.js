import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

function NavBar(){
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="journal">Journal</Link>
        </div>
    )
}

export default NavBar;