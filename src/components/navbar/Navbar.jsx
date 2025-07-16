import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Active style for NavLink
  const navLinkClass = ({ isActive }) =>
    isActive ? "navlink active" : "navlink";

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
            <li><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/service" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>Portfolio</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Login Buttons */}
        <div className="login">
          <Link to="/login"><button className="button1">Login</button></Link>
          <Link to="/signup"><button className="button2">Signup</button></Link>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/service" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        <div className="mobile-buttons">
          <NavLink  to="/login"><button className="button1">Login</button></NavLink>
          <NavLink  to="/signup"><button className="button2">Signup</button></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
