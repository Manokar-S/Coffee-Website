import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu, FiX } from 'react-icons/fi';
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='headerRight'>
        <h1>Coffeesh<span>op</span></h1>
      </div>
      <div className='react-icon' onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>
      <div className={`headerLeft ${isMenuOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} >
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500} >
          <h4>About</h4>
        </Link>
        <Link to="Coffee" smooth={true} duration={500} >
          <h4>Coffee</h4>
        </Link>
        <Link to="Shop" smooth={true} duration={500} >
          <h4>Shop</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500} >
          <h4>Blog</h4>
        </Link>
        <h4 className='headerrightBtn'>Contact us</h4>
      </div>
    </div>
  );
};

export default Header;
