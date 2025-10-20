import React from 'react';
import Card from './Card';
import './ValueProposition.css';

const values = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Precision Manufacturing',
    description: '26+ years of CNC machining expertise with SIEMENS & FANUC controls, precision boring, and CMM inspection for complex aerospace and defense components',
  },
  {
    id: 2,
    icon: '🏆',
    title: 'AS9100-D Certified Quality',
    description: 'Export-quality precision manufacturing meeting international aerospace and defense standards with complete traceability and rigorous quality control',
  },
  {
    id: 3,
    icon: '🌍',
    title: 'Global Industry Experience',
    description: 'Proven track record with Siemens, L&T, ABB, ISRO, and international clients across Defense, Aerospace, and Energy sectors',
  },
  {
    id: 4,
    icon: '💡',
    title: 'Complete Engineering Solutions',
    description: 'End-to-end services from machine shop setup and manufacturing to procurement, installation, and commissioning support',
  },
];

const ValueProposition = () => {
  return (
    <section className="values section-lg">
      <div className="container">
        <div className="values__header">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">Engineering Excellence, Delivered</h2>
          <p className="section-description">
            From precision manufacturing to procurement and installation – we provide complete engineering solutions backed by 26+ years of expertise
          </p>
        </div>

        <div className="values__grid">
          {values.map((value) => (
            <Card key={value.id} variant="glass" padding="lg" hover className="value-card">
              <div className="value-card__icon">{value.icon}</div>
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__description">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
