import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-text">
              <span className="callsign">SP3FCK</span>
              <span className="subtitle">Ham Tools</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActivePath('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActivePath('/gallery') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/useful-links" 
              className={`nav-link ${isActivePath('/useful-links') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Useful Links
            </Link>
            <Link 
              to="/login" 
              className={`nav-link login-link ${isActivePath('/login') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
