import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      category: 'Aerospace & Defense',
      description: 'Leading aerospace and defense organizations',
      companies: [
        { name: 'Godrej Aerospace', focus: 'Aerospace components' },
        { name: 'L&T Defense', focus: 'Defense systems' },
        { name: 'ISRO', focus: 'Space technology' },
        { name: 'Honeywell Aerospace', focus: 'Aerospace systems' }
      ]
    },
    {
      category: 'Energy & Power',
      description: 'Global energy and turbine manufacturers',
      companies: [
        { name: 'Siemens Baroda', focus: 'Steam turbines' },
        { name: 'L&T MHI', focus: 'Power generation' },
        { name: 'ABB', focus: 'Electrical systems' },
        { name: 'Andritz', focus: 'Hydro turbines' }
      ]
    },
    {
      category: 'Industrial Manufacturing',
      description: 'Leading industrial equipment manufacturers',
      companies: [
        { name: 'Haitian Huayuan', focus: 'Injection molding' },
        { name: 'Windsor Machine', focus: 'Extrusion systems' },
        { name: 'Clyde Bergmann', focus: 'Industrial machinery' }
      ]
    },
    {
      category: 'International Exports',
      description: 'Global partners across industries',
      companies: [
        { name: 'SEPCO (USA)', focus: 'Gas compressors' },
        { name: 'RIX Industries (USA)', focus: 'Hydraulic sealing' },
        { name: 'AMETECH', focus: 'Precision components' }
      ]
    }
  ];

  return (
    <div className="partners-page">
      <section className="partners-header">
        <div className="container">
          <div className="partners-header__content">
            <h1 className="partners-header__title">Our Partners</h1>
            <p className="partners-header__description">
              Trusted relationships with industry leaders across aerospace, defense, energy, and manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className="partners-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Building Strong Partnerships</h2>
            <p>
              Over 26+ years, JES Engineering has built lasting partnerships with some of the world's most
              respected organizations. Our commitment to quality, precision, and reliability has made us a
              trusted supplier to leading aerospace, defense, energy, and industrial manufacturing companies
              globally. These partnerships reflect our dedication to excellence and our ability to meet the
              most stringent requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="partners-list section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industry Partners</h2>
            <p className="section-description">
              Collaborating with excellence across critical sectors
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((group, index) => (
              <Card key={index} variant="elevated" padding="xl" className="partner-group-card">
                <div className="partner-group-header">
                  <h3 className="partner-category">{group.category}</h3>
                  <p className="partner-description">{group.description}</p>
                </div>
                <div className="partner-companies">
                  {group.companies.map((company, idx) => (
                    <div key={idx} className="partner-company">
                      <h4 className="company-name">{company.name}</h4>
                      <p className="company-focus">{company.focus}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Become a Partner</h2>
              <p>
                Interested in collaborating with JES Engineering? Let's discuss how we can support your
                manufacturing and engineering requirements.
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
    </div>
  );
};

export default Partners;