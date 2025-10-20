import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && (selectedResource !== null || showThankYou)) {
        setSelectedResource(null);
        setShowThankYou(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedResource, showThankYou]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedResource !== null || showThankYou) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedResource, showThankYou]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSelectedResource(null);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };
  const resources = [
    {
      category: 'Technical Documents',
      items: [
        {
          title: 'Capabilities Brochure',
          description: 'Comprehensive overview of our manufacturing and engineering services',
          type: 'PDF',
          size: '2.5 MB'
        },
        {
          title: 'Quality Manual',
          description: 'AS9100-D and ISO 9001:2015 quality management system documentation',
          type: 'PDF',
          size: '3.8 MB'
        },
        {
          title: 'Machine Shop Setup Guide',
          description: 'Best practices for CNC machine installation and commissioning',
          type: 'PDF',
          size: '1.9 MB'
        }
      ]
    },
    {
      category: 'Product Catalogs',
      items: [
        {
          title: 'Cooling Systems Catalog',
          description: 'Complete catalog of air-cooled and water-cooled chillers',
          type: 'PDF',
          size: '4.2 MB'
        },
        {
          title: 'Hydraulic Systems Guide',
          description: 'Mobile hydraulics and linear motion components',
          type: 'PDF',
          size: '3.5 MB'
        },
        {
          title: 'Linear Motion Components',
          description: 'Bearings, guideways, shafts, and ballscrews',
          type: 'PDF',
          size: '2.8 MB'
        }
      ]
    },
    {
      category: 'Case Studies',
      items: [
        {
          title: 'Aerospace Component Manufacturing',
          description: 'BrahMos missile and satellite component precision machining',
          type: 'PDF',
          size: '1.5 MB'
        },
        {
          title: 'Turbine Parts Production',
          description: 'Steam and hydro turbine component manufacturing for Siemens and L&T',
          type: 'PDF',
          size: '1.8 MB'
        },
        {
          title: 'Machine Shop Turnkey Setup',
          description: 'Complete machine shop installation and commissioning project',
          type: 'PDF',
          size: '2.1 MB'
        }
      ]
    }
  ];

  const industries = [
    {
      icon: '✈️',
      title: 'Aerospace & Defense',
      description: 'Technical resources for aerospace and defense manufacturing requirements',
      topics: ['AS9100-D Compliance', 'FAI Procedures', 'Defense Standards', 'Export Controls']
    },
    {
      icon: '⚡',
      title: 'Energy & Power',
      description: 'Resources for turbine manufacturing and power generation',
      topics: ['Turbine Components', 'Power Plant Equipment', 'Quality Standards', 'Material Specs']
    },
    {
      icon: '🏭',
      title: 'Industrial Manufacturing',
      description: 'General manufacturing and process optimization resources',
      topics: ['CNC Programming', '5S Implementation', 'Kaizen Methods', 'Quality Control']
    }
  ];

  return (
    <div className="resources-page">
      <section className="resources-header">
        <div className="container">
          <div className="resources-header__content">
            <h1 className="resources-header__title">Resources</h1>
            <p className="resources-header__description">
              Technical documentation, product catalogs, and industry resources
            </p>
          </div>
        </div>
      </section>

      <section className="resources-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Technical Documentation & Resources</h2>
            <p>
              Access our library of technical documents, product catalogs, case studies, and industry-specific
              resources. These materials provide detailed information about our capabilities, products, and
              proven track record across aerospace, defense, energy, and industrial manufacturing sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="downloads-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Downloads</h2>
            <p className="section-description">
              Available technical documents and product information
            </p>
          </div>

          <div className="resources-categories">
            {resources.map((category, catIndex) => (
              <div key={catIndex} className="resource-category">
                <h3 className="resource-category-title">{category.category}</h3>
                <div className="resource-items">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} variant="outlined" padding="lg" className="resource-item">
                      <div className="resource-icon">📄</div>
                      <div className="resource-info">
                        <h4 className="resource-title">{item.title}</h4>
                        <p className="resource-description">{item.description}</p>
                        <div className="resource-meta">
                          <span className="resource-type">{item.type}</span>
                          <span className="meta-divider">•</span>
                          <span className="resource-size">{item.size}</span>
                        </div>
                      </div>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => setSelectedResource(item)}
                      >
                        Request
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industry-Specific Resources</h2>
            <p className="section-description">
              Specialized information for your industry
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Card key={index} variant="elevated" padding="xl" className="industry-resource-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-topics">
                  {industry.topics.map((topic, idx) => (
                    <span key={idx} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Need Specific Information?</h2>
              <p>
                Can't find what you're looking for? Contact us and we'll provide the technical
                documentation or product information you need.
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button variant="primary" size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Resource Request Modal */}
      {selectedResource && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={() => setSelectedResource(null)}
            aria-hidden="true"
          />
          <div 
            className="modal-dialog resource-modal" 
            role="dialog" 
            aria-modal="true"
            aria-labelledby="resource-modal-title"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 id="resource-modal-title" className="modal-title">
                  Request Document
                </h2>
                <button 
                  type="button" 
                  className="modal-close"
                  onClick={() => setSelectedResource(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>
              
              <div className="modal-body">
                <div className="resource-preview">
                  <div className="resource-icon">📄</div>
                  <div>
                    <h3 className="resource-modal-title">{selectedResource.title}</h3>
                    <p className="resource-modal-description">{selectedResource.description}</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="resource-request-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="req-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="req-name" 
                        name="name" 
                        className="form-input" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="req-email">Email *</label>
                      <input 
                        type="email" 
                        id="req-email" 
                        name="email" 
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="req-company">Company</label>
                      <input 
                        type="text" 
                        id="req-company" 
                        name="company" 
                        className="form-input" 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="req-phone">Phone</label>
                      <input 
                        type="tel" 
                        id="req-phone" 
                        name="phone" 
                        className="form-input" 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="req-message">How will you use this resource?</label>
                    <textarea 
                      id="req-message" 
                      name="message" 
                      className="form-input" 
                      rows="3"
                      placeholder="Optional: Let us know your intended use..."
                    />
                  </div>

                  <div className="form-actions">
                    <Button 
                      variant="secondary" 
                      size="md" 
                      type="button"
                      onClick={() => setSelectedResource(null)}
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" size="md" type="submit">
                      Request Document
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={() => setShowThankYou(false)}
            aria-hidden="true"
          />
          <div 
            className="modal-dialog thankyou-modal" 
            role="dialog" 
            aria-modal="true"
          >
            <div className="modal-content">
              <div className="thankyou-content">
                <div className="thankyou-icon">✓</div>
                <h2>Thank You!</h2>
                <p>We've received your request. We'll get back to you shortly with the requested document.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resources;