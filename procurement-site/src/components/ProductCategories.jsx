import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import './ProductCategories.css';

const categories = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Hydraulic Systems',
    description: 'High-performance pumps, motors, and valves for demanding applications',
    features: ['Variable Displacement', 'Up to 450 bar', 'ISO 9001 Certified'],
    productCount: '200+',
  },
  {
    id: 2,
    icon: '🔧',
    title: 'Linear Motion',
    description: 'Precision bearings, guideways, and ball screws for accurate movement',
    features: ['High Precision', 'Low Friction', 'Long Service Life'],
    productCount: '150+',
  },
  {
    id: 3,
    icon: '❄️',
    title: 'Cooling Solutions',
    description: 'Industrial chillers and cooling systems for optimal temperature control',
    features: ['Energy Efficient', 'Eco-Friendly', 'Compact Design'],
    productCount: '100+',
  },
];

const ProductCategories = () => {
  return (
    <section className="categories section">
      <div className="container">
        <div className="categories__header">
          <div className="section-badge">Industrial Procurement</div>
          <h2 className="section-title">Premium Industrial Components</h2>
          <p className="section-description">
            Beyond our manufacturing capabilities, we source and supply high-quality industrial components from trusted global manufacturers
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <Card key={category.id} variant="elevated" hover padding="xl" className="category-card">
              <div className="category-card__icon">{category.icon}</div>

              <div className="category-card__badge">
                {category.productCount} Products
              </div>

              <h3 className="category-card__title">{category.title}</h3>
              <p className="category-card__description">{category.description}</p>

              <ul className="category-card__features">
                {category.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="category-card__action">
                <Link to="/products" style={{ width: '100%', textDecoration: 'none' }}>
                  <Button variant="ghost" fullWidth>
                    View Products →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
