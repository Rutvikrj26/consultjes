import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__card">
          <div className="cta__background">
            <div className="cta__pattern"></div>
          </div>

          <div className="cta__content">
            <div className="cta__text">
              <h2 className="cta__title">Ready to Get Started?</h2>
              <p className="cta__description">
                Request a quote or browse our products to explore our full range of industrial solutions
              </p>
            </div>

            <div className="cta__actions">
              <Link to="/about#contact" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
