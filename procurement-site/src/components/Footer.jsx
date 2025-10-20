import React from 'react';
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
              <li><a href="#hydraulic">Hydraulic Systems</a></li>
              <li><a href="#linear">Linear Motion</a></li>
              <li><a href="#cooling">Cooling Solutions</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#quality">Quality Standards</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Support</h4>
            <ul className="footer__links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#resources">Resources</a></li>
              {/* Removed per request: Technical Support link */}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} JES Engineering. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer__divider">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
