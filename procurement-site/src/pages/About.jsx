import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
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

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to discuss your procurement needs? Our team is here to help you find the
                right solutions for your engineering projects.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item__icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@jesengineering.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item__icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item__icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Industrial District, Engineering Hub</p>
                  </div>
                </div>
              </div>
            </div>

            <Card variant="elevated" padding="xl" className="contact-form-card">
              <h3>Request a Quote</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="product">Product Category</label>
                  <select id="product" className="form-input">
                    <option value="">Select a category</option>
                    <option value="hydraulics">Hydraulic Systems</option>
                    <option value="linear-motion">Linear Motion</option>
                    <option value="cooling">Cooling Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" className="form-input" rows="4" required></textarea>
                </div>

                <Button variant="primary" size="lg" fullWidth>
                  Submit Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
