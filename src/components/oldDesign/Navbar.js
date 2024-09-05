import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'; // Import CSS file for styling
import StudentCrud from '../StudentCrud';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Background Image */}
      <div className="navbar-background"></div>
      
      {/* Navbar Content */}
      <div className="navbar-content">
        <h1 className="navbar-logo">Coffee Shop</h1>
        <div className='Bodynav'>
        <ul className="navbar-links">
       
        <li><NavLink to="/Home">Home</NavLink></li>

          <li><NavLink to="/Menu">Menu</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/StudentCrud">Contact</NavLink></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
