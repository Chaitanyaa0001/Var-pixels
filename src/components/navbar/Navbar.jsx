import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { FiLogIn, FiUserPlus } from 'react-icons/fi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
  isActive
    ? "bg-teal-100 text-blue-600 navlink px-4 py-2 rounded-md"
    : "text-[#1E3A8A] navlink px-4 py-2 rounded-md hover:bg-cyan-100 hover:text-cyan-800";


  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-cyan-200">
      <div className=" w-[90%] lg:w-[80%] mx-auto py-2 flex justify-between items-center relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className=" w-12 text-[0.7rem] lg:w-16 lg:h-12 object-contain" />
          <h2 className="text-[#4c47e5] text-xl font-bold">VAR PIXELS</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 list-none text-[0.9rem]  text-blue-600 font-semibold">
          <li ><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
          <li ><NavLink to="/service" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
          <li ><NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>Portfolio</NavLink></li>
          <li ><NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>Blog</NavLink></li>
          <li ><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink></li>
          <li ><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        {/* commit  krdiya  */}
        {/* Desktop Login Buttons */}
       <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="text-blue-600 border border-cyan-200 px-4 py-2 cursor-pointer  rounded hover:bg-cyan-100 flex items-center gap-2">
              <FiLogIn /> Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer text-white px-4 py-2 rounded hover:from-blue-600 hover:to-cyan-600 flex items-center gap-2">
              <FiUserPlus /> Signup
            </button>
          </Link>
        </div>


        {/* Hamburger Icon */}
        <div className="md:hidden text-lg cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-cyan-50 transition-all overflow-hidden ${isOpen ? 'max-h-screen py-6' : 'max-h-0 py-0'} flex flex-col px-6`}>
        <ul className="flex flex-col gap-3">
          <li><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/service" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="text-blue-600 border border-cyan-200 px-4 py-2 cursor-pointer  rounded hover:bg-cyan-100 flex items-center gap-2">
              <FiLogIn /> Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer text-white px-4 py-2 rounded hover:from-blue-600 hover:to-cyan-600 flex items-center gap-2">
              <FiUserPlus /> Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
