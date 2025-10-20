import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section footer__brand">
            <div className="footer__logo">
              <div className="logo">
                <img src={logo} alt="JES Engineering" className="logo__image" />
              </div>
              <div className="logo__text">
                <h3 className="logo__title">JES Engineering</h3>
                <p className="logo__subtitle">Industrial Solutions</p>
              </div>
            </div>
            <p className="footer__description">
              Your trusted partner for premium industrial components and engineering solutions.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Products</h4>
            <ul className="footer__links">
              <li><Link to="/products">Hydraulic Systems</Link></li>
              <li><Link to="/products">Linear Motion</Link></li>
              <li><Link to="/products">Cooling Solutions</Link></li>
              <li><Link to="/products">Accessories</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/quality">Quality Standards</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Support</h4>
            <ul className="footer__links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              {/* Removed per request: Technical Support link */}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} JES Engineering. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer__divider">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
