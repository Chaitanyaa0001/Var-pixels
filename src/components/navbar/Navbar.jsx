import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome for menu icons
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="navbar">
      <div className="container">
        <div className="Logo">
          <div className="part1">
           <img src={logo} alt="logo" style={{ width: '60px', height: '45px', objectFit: 'contain' }} />
            <h2>Var PIXELS</h2>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="menuitems">
          <ul>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>Services</li>
            <li onClick={closeMenu}>Portfolio</li>
            <li onClick={closeMenu}>Blog</li>
            <li onClick={closeMenu}>About</li>
            <li onClick={closeMenu}>Contact</li>
          </ul>
        </div>

        <div className="login">
          <button className="button1">Login</button>
          <button className="button2">Signup</button>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Slide-Down Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Services</li>
          <li onClick={closeMenu}>Portfolio</li>
          <li onClick={closeMenu}>Blog</li>
          <li onClick={closeMenu}>About</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>
        <div className="mobile-buttons">
          <button className="button1">Login</button>
          <button className="button2">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
