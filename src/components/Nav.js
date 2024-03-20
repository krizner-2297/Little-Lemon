// Nav.js
import React, { useState } from 'react';
import logo from '../images/logo.jpg';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}` }>
      <a href="/" className='logo'>
        <img src = {logo} alt='logo' width="148" height="40" />
      </a>

      {/* Navigation Bar for Mobile*/}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      {/* Navigation Items */}

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href='/'>Home</a>
        </li>

        <li>
          <a href='/'>About</a>
        </li>

        <li>
          <a href='/'>Services</a>
        </li>

        <li>
          <a href='/'>Menu</a>
        </li>
        
        <li>
          <a href='/booking'>Reservation</a>
        </li>

        <li>
          <a href='/'>Order Online</a>
        </li>

        <li>
          <a href='/'>Login</a>
        </li>
      </ul>

    </nav>
  );
}

export default Nav;
