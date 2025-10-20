import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // Prevent body scroll when mobile menu is open and handle Escape key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

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

          {/* Mobile menu toggle */}
          <button
            className={`header__toggle ${menuOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="toggle-bar" />
            <span className="toggle-bar" />
            <span className="toggle-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-nav__panel" role="dialog" aria-modal="true">
          <nav className="mobile-nav__links">
            <Link to="/products" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/services" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/about#contact" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="mobile-nav__actions">
            <Button variant="primary" size="md" fullWidth onClick={() => setMenuOpen(false)}>
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
