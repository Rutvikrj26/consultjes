import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Quality.css';

const Quality = () => {
  const certifications = [
    {
      standard: 'AS9100-D',
      description: 'Aerospace Quality Management System',
      scope: 'Complete aerospace and defense manufacturing compliance',
      benefits: [
        'First Article Inspection (FAI) compliance',
        'Rigorous documentation and traceability',
        'Supplier quality management',
        'Configuration management'
      ]
    },
    {
      standard: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      scope: 'International standard for quality management across all industries',
      benefits: [
        'Process-based approach to quality',
        'Continuous improvement culture',
        'Customer satisfaction focus',
        'Risk-based thinking'
      ]
    },
    {
      standard: '5S Methodology',
      description: 'Workplace Organization & Efficiency',
      scope: 'Systematic approach to workplace organization and standardization',
      benefits: [
        'Improved workplace safety',
        'Reduced waste and errors',
        'Enhanced productivity',
        'Sustainable workplace culture'
      ]
    },
    {
      standard: 'Kaizen',
      description: 'Continuous Improvement Philosophy',
      scope: 'Ongoing improvement involving all employees',
      benefits: [
        'Incremental process improvements',
        'Employee engagement and ownership',
        'Cost reduction initiatives',
        'Quality enhancement'
      ]
    }
  ];

  const qualityProcesses = [
    {
      icon: '📋',
      title: 'Incoming Inspection',
      description: 'Thorough verification of all incoming materials and components against specifications.'
    },
    {
      icon: '🔍',
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring and verification at critical manufacturing stages.'
    },
    {
      icon: '✓',
      title: 'Final Inspection',
      description: 'Comprehensive dimensional and functional verification before delivery.'
    },
    {
      icon: '📊',
      title: 'CMM Verification',
      description: 'Precision coordinate measuring machine inspection for critical dimensions.'
    },
    {
      icon: '📄',
      title: 'Documentation & Traceability',
      description: 'Complete material certification, test reports, and inspection records.'
    },
    {
      icon: '🎯',
      title: 'Corrective Action',
      description: 'Systematic root cause analysis and preventive measures for nonconformances.'
    }
  ];

  return (
    <div className="quality-page">
      <section className="quality-header">
        <div className="container">
          <div className="quality-header__content">
            <h1 className="quality-header__title">Quality Standards</h1>
            <p className="quality-header__description">
              Commitment to excellence through certified quality management systems
            </p>
          </div>
        </div>
      </section>

      <section className="quality-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Our Quality Promise</h2>
            <p>
              At JES Engineering, quality is not just a goal—it's embedded in every process, from initial
              design through final delivery. Our AS9100-D and ISO 9001:2015 certifications demonstrate our
              commitment to meeting the highest international standards for aerospace, defense, and industrial
              manufacturing. We implement rigorous quality control procedures, maintain complete traceability,
              and foster a culture of continuous improvement through 5S and Kaizen methodologies.
            </p>
          </div>
        </div>
      </section>

      <section className="certifications-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications & Standards</h2>
            <p className="section-description">
              Recognized quality systems ensuring compliance and excellence
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <Card key={index} variant="elevated" padding="xl" className="certification-card">
                <div className="cert-header">
                  <h3 className="cert-standard">{cert.standard}</h3>
                  <p className="cert-description">{cert.description}</p>
                </div>
                <div className="cert-scope">
                  <h4>Scope:</h4>
                  <p>{cert.scope}</p>
                </div>
                <div className="cert-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-processes section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quality Control Processes</h2>
            <p className="section-description">
              Comprehensive inspection and verification at every stage
            </p>
          </div>

          <div className="processes-grid">
            {qualityProcesses.map((process, index) => (
              <Card key={index} variant="outlined" padding="lg" className="process-card">
                <div className="process-icon">{process.icon}</div>
                <h3 className="process-title">{process.title}</h3>
                <p className="process-description">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Learn More About Our Quality Systems</h2>
              <p>
                Request our quality manual or schedule an audit to see our processes in action.
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button variant="primary" size="lg">Contact Quality Team</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Quality;