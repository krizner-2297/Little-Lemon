// Header.js
import logo from './logo.svg'; 
import React from 'react';

function Header() {
  return (
    <header>
      {/* Header content */}
      <img src={logo} alt="Little Lemon Logo" />
      Header Component from Header.js
    </header>
  );
}

export default Header;
