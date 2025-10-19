import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo.png';
import './Hero.css';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const words = ['Procurement', 'Consulting', 'Manufacturing', 'Installation', 'Engineering'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3500); // Change word every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__pattern"></div>
        <img src={logo} alt="" className="hero__peacock" />
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="badge__dot"></span>
              Engineering Procurement & Installation
            </div>

            <h1 className="hero__title">
              Industrial{' '}
              <span className={`hero__title-dynamic ${isAnimating ? 'hero__title-dynamic--exit' : 'hero__title-dynamic--enter'}`}>
                {words[currentWord]}
              </span>
              <br />
              <span className="hero__title-highlight">Services</span>
            </h1>

            <p className="hero__description">
              Your trusted partner for procurement and installation of high-performance hydraulic systems,
              linear motion components, and industrial cooling solutions. Backed by 26+ years of precision
              engineering expertise serving Defense, Aerospace, Energy, and Industrial sectors worldwide.
            </p>

            <div className="hero__actions">
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Explore Products
                </Button>
              </Link>
              <Link to="/about#contact" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg">
                  Request Quote
                </Button>
              </Link>
            </div>

            <div className="hero__stats">
              <div className="stat">
                <div className="stat__value">500+</div>
                <div className="stat__label">Products</div>
              </div>
              <div className="stat__divider"></div>
              <div className="stat">
                <div className="stat__value">26+</div>
                <div className="stat__label">Years Experience</div>
              </div>
              <div className="stat__divider"></div>
              <div className="stat">
                <div className="stat__value">100%</div>
                <div className="stat__label">Certified Quality</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="visual__card visual__card--1">
              <div className="visual__icon">⚙️</div>
              <div className="visual__label">Hydraulic Systems</div>
            </div>
            <div className="visual__card visual__card--2">
              <div className="visual__icon">🔧</div>
              <div className="visual__label">Linear Motion</div>
            </div>
            <div className="visual__card visual__card--3">
              <div className="visual__icon">❄️</div>
              <div className="visual__label">Cooling Solutions</div>
            </div>
            <div className="visual__card visual__card--4">
              <div className="visual__icon">🏭</div>
              <div className="visual__label">CNC Machining</div>
            </div>
            <div className="visual__card visual__card--5">
              <div className="visual__icon">✓</div>
              <div className="visual__label">Quality Control</div>
            </div>
            <div className="visual__card visual__card--6">
              <div className="visual__icon">🚀</div>
              <div className="visual__label">Aerospace Components</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
