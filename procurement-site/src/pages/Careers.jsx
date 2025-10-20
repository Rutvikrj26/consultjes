import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && (selectedPosition !== null || showThankYou)) {
        setSelectedPosition(null);
        setShowThankYou(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedPosition, showThankYou]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPosition !== null || showThankYou) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPosition, showThankYou]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSelectedPosition(null);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };
  const positions = [
    {
      title: 'CNC Programmer',
      department: 'Manufacturing',
      location: 'Toronto, ON',
      type: 'Full-Time',
      description: 'Experienced CNC programmer for SIEMENS and FANUC controllers.',
      requirements: [
        '5+ years CNC programming experience',
        'SIEMENS 840D/828D proficiency',
        'Aerospace/Defense manufacturing background',
        'Strong GD&T knowledge'
      ]
    },
    {
      title: 'Quality Inspector',
      department: 'Quality Assurance',
      location: 'Toronto, ON',
      type: 'Full-Time',
      description: 'AS9100-D certified quality inspector for precision components.',
      requirements: [
        'CMM programming and operation',
        'AS9100-D/ISO 9001 experience',
        'First Article Inspection (FAI)',
        'Blueprint reading expertise'
      ]
    },
    {
      title: 'Manufacturing Engineer',
      department: 'Engineering',
      location: 'Toronto, ON',
      type: 'Full-Time',
      description: 'Process engineer for precision machining and manufacturing optimization.',
      requirements: [
        'Mechanical Engineering degree',
        'Process improvement experience',
        'Lean/Kaizen methodology',
        'CNC machining knowledge'
      ]
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical coverage' },
    { icon: '📚', title: 'Training & Development', description: 'Continuous learning opportunities' },
    { icon: '⚖️', title: 'Work-Life Balance', description: 'Flexible scheduling options' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear advancement pathways' },
    { icon: '👥', title: 'Team Culture', description: 'Collaborative work environment' }
  ];

  return (
    <div className="careers-page">
      <section className="careers-header">
        <div className="container">
          <div className="careers-header__content">
            <h1 className="careers-header__title">Careers</h1>
            <p className="careers-header__description">
              Join our team of precision engineering and manufacturing professionals
            </p>
          </div>
        </div>
      </section>

      <section className="careers-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Build Your Career with JES Engineering</h2>
            <p>
              We're always looking for talented professionals who share our commitment to quality and
              precision. At JES Engineering, you'll work on cutting-edge aerospace, defense, and industrial
              projects while developing your skills alongside industry experts. We offer competitive
              compensation, comprehensive benefits, and opportunities for professional growth in a
              collaborative environment.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Join Us?</h2>
            <p className="section-description">
              Benefits and perks that support your success
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="outlined" padding="lg" className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="positions-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-description">
              Current opportunities to join our team
            </p>
          </div>

          <div className="positions-list">
            {positions.map((position, index) => (
              <Card key={index} variant="elevated" padding="xl" className="position-card">
                <div className="position-header">
                  <div>
                    <h3 className="position-title">{position.title}</h3>
                    <div className="position-meta">
                      <span className="meta-item">{position.department}</span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">{position.location}</span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">{position.type}</span>
                    </div>
                  </div>
                </div>
                <p className="position-description">{position.description}</p>
                <div className="position-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="primary" 
                  size="md"
                  onClick={() => setSelectedPosition(position)}
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Don't See the Right Role?</h2>
              <p>
                We're always interested in hearing from talented professionals. Send us your resume
                and we'll keep you in mind for future opportunities.
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button variant="primary" size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedPosition && (
        <>
          <div 
            className="modal-backdrop" 
            onClick={() => setSelectedPosition(null)}
            aria-hidden="true"
          />
          <div 
            className="modal-dialog application-modal" 
            role="dialog" 
            aria-modal="true"
            aria-labelledby="application-modal-title"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 id="application-modal-title" className="modal-title">
                  Apply for Position
                </h2>
                <button 
                  type="button" 
                  className="modal-close"
                  onClick={() => setSelectedPosition(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>
              
              <div className="modal-body">
                <div className="position-preview">
                  <h3 className="position-modal-title">{selectedPosition.title}</h3>
                  <div className="position-modal-meta">
                    <span>{selectedPosition.department}</span>
                    <span className="meta-divider">•</span>
                    <span>{selectedPosition.location}</span>
                    <span className="meta-divider">•</span>
                    <span>{selectedPosition.type}</span>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="application-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="app-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="app-name" 
                        name="name" 
                        className="form-input" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="app-email">Email *</label>
                      <input 
                        type="email" 
                        id="app-email" 
                        name="email" 
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="app-phone">Phone *</label>
                      <input 
                        type="tel" 
                        id="app-phone" 
                        name="phone" 
                        className="form-input" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="app-location">Current Location</label>
                      <input 
                        type="text" 
                        id="app-location" 
                        name="location" 
                        className="form-input" 
                        placeholder="City, Province/State"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="app-resume">Resume/CV *</label>
                    <input 
                      type="file" 
                      id="app-resume" 
                      name="resume" 
                      className="form-input" 
                      accept=".pdf,.doc,.docx"
                      required 
                    />
                    <span className="file-help">PDF, DOC, or DOCX (Max 5MB)</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="app-cover-letter">Cover Letter *</label>
                    <textarea 
                      id="app-cover-letter" 
                      name="coverLetter" 
                      className="form-input" 
                      rows="6"
                      placeholder="Tell us why you're a great fit for this position..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="app-linkedin">LinkedIn Profile</label>
                    <input 
                      type="url" 
                      id="app-linkedin" 
                      name="linkedin" 
                      className="form-input" 
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="app-portfolio">Portfolio/Website</label>
                    <input 
                      type="url" 
                      id="app-portfolio" 
                      name="portfolio" 
                      className="form-input" 
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div className="form-actions">
                    <Button 
                      variant="secondary" 
                      size="md" 
                      type="button"
                      onClick={() => setSelectedPosition(null)}
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" size="md" type="submit">
                      Submit Application
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
                <p>We've received your application. We'll review it carefully and get back to you soon!</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Careers;