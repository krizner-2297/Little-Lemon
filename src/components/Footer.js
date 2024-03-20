// Footer.js
import React from 'react';
import logo from '../images/logo.jpg';

function Footer() {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src = {logo} alt='logo' width="148" height="40" />
          <p>Family-owned Mediterranean restaurant serving traditional authentic flavors with a contemporary twist</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/booking'>Reservation</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> Chicago Downtown Street</li>
            <li>Phone: <br/> +123456789</li>
            <li>Email: <br/> littlelemon@res.com</li>
          </ul>
        </div>

        <div>
          <h3>Socials</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
