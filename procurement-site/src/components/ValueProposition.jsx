import React from 'react';
import Card from './Card';
import './ValueProposition.css';

const values = [
  {
    id: 1,
    icon: '🏆',
    title: 'Premium Quality',
    description: 'All products meet international standards with comprehensive certifications',
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Global Sourcing',
    description: 'Partnered with leading manufacturers worldwide for the best solutions',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Efficient logistics and inventory management for quick turnaround',
  },
  {
    id: 4,
    icon: '💡',
    title: 'Expert Support',
    description: 'Technical expertise and consultation to help you choose the right products',
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
