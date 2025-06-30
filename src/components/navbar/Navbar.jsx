import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className="container">
             <div className="Logo">
            <div className="part1">
                <img src="" alt="logo" />
                <h2>Var PIXELS</h2>
            </div>
        </div>
        <div className="menuitems">
            <ul>
                <li>Home </li>
                <li>Services </li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="login">
            <button className='button1'>Login</button>
            <button className='button2'>Signup</button>
        </div>

        </div>
       
    </nav>
  )
}

export default Navbar