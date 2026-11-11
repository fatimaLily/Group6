import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Tech <span className="logo-number">4</span> Youth
        </Link>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMenu}>Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMenu}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links btn-register" onClick={closeMenu}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;