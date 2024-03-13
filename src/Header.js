// Header.js
import logo from './logo.svg';
import React from 'react';

import './style.css'; // Import CSS file

function Header() {
  return (
    <header className="grid-container">

      {/* Header content */}
      Header Component from Header.js
      <div className="grid-item">
        Logo
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="grid-item">Navigation</div>
      
    </header>
  );
}

export default Header;
