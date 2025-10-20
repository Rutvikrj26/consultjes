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
                Partner with us for precision manufacturing, quality assurance, and complete industrial solutions
              </p>
            </div>

            <div className="cta__actions">
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg">
                  Our Services
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
