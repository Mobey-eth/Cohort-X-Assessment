
import React from 'react';
import './Navbar.css'; // the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>Jor
          <span className='go-style'>Dan</span>
        </p>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
