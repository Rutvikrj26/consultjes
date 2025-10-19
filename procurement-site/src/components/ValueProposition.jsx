import React from 'react';
import Card from './Card';
import './ValueProposition.css';

const values = [
  {
    id: 1,
    icon: '🏆',
    title: 'AS9100-D Certified Quality',
    description: 'Export-quality precision manufacturing meeting international aerospace and defense standards with complete traceability',
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Global Expertise',
    description: 'Proven track record with Siemens, L&T, ABB, ISRO, and international clients across Defense, Aerospace, and Energy sectors',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Advanced Manufacturing',
    description: 'CNC machining capabilities with SIEMENS & FANUC controls, precision boring, and CMM inspection for complex components',
  },
  {
    id: 4,
    icon: '💡',
    title: 'Technical Excellence',
    description: '26+ years of machine shop management, process optimization, and engineering solutions from setup to delivery',
  },
];

const ValueProposition = () => {
  return (
    <section className="values section-lg">
      <div className="container">
        <div className="values__header">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">Your Partner in Excellence</h2>
          <p className="section-description">
            We deliver more than just products – we provide complete solutions backed by expertise and commitment
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
