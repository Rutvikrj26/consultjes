import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <div className="logo">
              <img src={logo} alt="JES Engineering" className="logo__image" />
            </div>
            <div className="logo__text">
              <h1 className="logo__title">JES Engineering</h1>
              <p className="logo__subtitle">Industrial Solutions</p>
            </div>
          </Link>

          <nav className="header__nav">
            <Link to="/products" className="nav__link">Products</Link>
            <Link to="/services" className="nav__link">Services</Link>
            <Link to="/about" className="nav__link">About</Link>
            <Link to="/about#contact" className="nav__link">Contact</Link>
          </nav>

          <div className="header__actions">
            <Button variant="primary" size="md">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
