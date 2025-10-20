import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './About.css';
import shailesh_image from '../assets/shailesh_solanki.jpg'

const About = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Product Sourcing',
      description: 'We identify and source the highest quality industrial components from trusted global manufacturers.'
    },
    {
      icon: '📋',
      title: 'Technical Consultation',
      description: 'Our experts provide guidance on product selection, specifications, and application requirements.'
    },
    {
      icon: '🚚',
      title: 'Logistics Management',
      description: 'End-to-end logistics coordination ensuring timely delivery of your industrial components.'
    },
    {
      icon: '🔧',
      title: 'Installation Services',
      description: 'Professional installation and commissioning of hydraulic, linear motion, and cooling systems.'
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'Comprehensive project oversight from procurement through installation and testing.'
    },
    {
      icon: '🛠️',
      title: 'After-Sales Support',
      description: 'Ongoing technical support and maintenance services for all procured equipment.'
    }
  ];

  const values = [
    {
      title: 'Quality Assurance',
      description: '100% certified products meeting international standards'
    },
    {
      title: 'Global Network',
      description: 'Partnerships with leading manufacturers worldwide'
    },
    {
      title: 'Technical Expertise',
      description: 'CNC machining, precision manufacturing, and process optimization'
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated support throughout the project lifecycle'
    }
  ];

  const leadership = {
    name: 'Shailesh N. Solanki',
    title: 'Technical Director',
    image: shailesh_image,
    bio: 'Competent and proactive professional with over 26 years of achievement-driven experience in end-to-end production management, control, and quality assurance. As Technical Director of JES Engineering for the past three years, he brings extensive expertise in industrial procurement, CNC machining, production planning, and resource management to guide our technical operations and client solutions.',
    expertise: [
      'Production Planning & Control',
      'CNC Machining (SIEMENS & FANUC)',
      'Quality Assurance & ISO Standards',
      'Process Development & Optimization',
      'Team Leadership & Training',
      'Procurement & Cost Control'
    ],
    education: 'Diploma in Mechanical Engineering',
    experience: [
      {
        company: 'JES Engineering',
        role: 'Technical Director',
        period: '2022 - Present',
        highlights: 'Leading technical operations, procurement strategy, and client solutions for industrial hydraulic, linear motion, and cooling systems.'
      },
      {
        company: 'Haitian Huayuan Machinery India Pvt. Ltd.',
        role: 'Manager (Machine Shop)',
        period: '2019 - 2022',
        highlights: 'Setup of new machine shop with heavy-duty HMC/VMC machines. International training at Haitian Huayuan China.'
      }
    ]
  };

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header">
        <div className="container">
          <div className="about-header__content">
            <h1 className="about-header__title">About JES Engineering</h1>
            <p className="about-header__description">
              Your trusted partner for industrial procurement and installation services
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-content section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__text">
              <h2>Engineering Procurement Excellence</h2>
              <p>
                JES Engineering specializes in the procurement and installation of high-performance industrial
                components. With over 26 years of precision engineering experience, we provide comprehensive
                solutions for hydraulic systems, linear motion components, and industrial cooling equipment.
                Our expertise spans Defense, Aerospace, Energy, and Industrial Manufacturing sectors worldwide.
              </p>
              <p>
                Backed by AS9100-D certification and proven track record with industry leaders like ISRO,
                Siemens, L&T, ABB, and Godrej Aerospace, we combine world-class procurement capabilities with
                advanced manufacturing expertise. Our mission is to deliver precision-engineered solutions with
                complete technical support—from component selection and sourcing to installation, commissioning,
                and after-sales service.
              </p>
            </div>
            <div className="about-intro__stats">
              {values.map((value, index) => (
                <div key={index} className="stat-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
            <p className="section-description">
              Guided by decades of engineering and manufacturing excellence
            </p>
          </div>

          <Card variant="elevated" padding="xl" className="leadership-card">
            <div className="leadership-content">
              <div className="leadership-image">
                <img src={leadership.image} alt={leadership.name} />
              </div>
              <div className="leadership-info">
                <h3 className="leadership-name">{leadership.name}</h3>
                <p className="leadership-title">{leadership.title}</p>
                <p className="leadership-bio">{leadership.bio}</p>

                <div className="leadership-details">
                  <div className="detail-section">
                    <h4>Core Expertise</h4>
                    <ul className="expertise-list">
                      {leadership.expertise.map((item, index) => (
                        <li key={index}>
                          <span className="check-icon">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Professional Experience</h4>
                    <div className="experience-timeline">
                      {leadership.experience.map((exp, index) => (
                        <div key={index} className="timeline-item">
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <h5>{exp.role}</h5>
                            <p className="company">{exp.company}</p>
                            <p className="period">{exp.period}</p>
                            <p className="highlights">{exp.highlights}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive procurement and installation solutions for your engineering projects
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" hover padding="xl" className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="services-cta section">
        <div className="container">
          <Card variant="elevated" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Have a project in mind?</h2>
              <p>Reach out for a tailored solution from our engineering procurement team.</p>
              <div className="cta-buttons">
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="md">Contact Us</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
