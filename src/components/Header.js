// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/banner.jpg';

function Header() {
  return (
    <header className='header'>
      <section>

        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Experience our modern take on traditional Mediterranean recipes at our family-owned restaurant.
            Indulge in authentic flavors with a contemporary twist, crafted from generations of culinary heritage.</p>
          <Link to="/booking"> <button aria-label='On Click'> Reserve a Table </button> </Link>
        </div>

        <div className='banner-img'>
          <img src={bannerImg} alt='' />
        </div>

      </section>
    </header>
  );
}

export default Header;
