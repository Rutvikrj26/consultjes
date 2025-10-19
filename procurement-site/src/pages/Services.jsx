import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
  const engineeringServices = [
    {
      icon: '🏭',
      title: 'Machine Shop Setup & Installation',
      description: 'Complete end-to-end machine shop setup including installation of heavy-duty CNC machines, quality inspection equipment, and production workflow optimization.',
      capabilities: [
        'Heavy-duty HMC/Boring machines (600-1600 pellet size) installation',
        'VMC machines (3000-4200 pellet size) setup and commissioning',
        'Hexagon Gantry CMM (2x3x2m) installation and operator training',
        'Japan-based Nigata HND 100 Double Spindle fine boring setup',
        'Complete workflow optimization from casting to CMM-passed parts',
        'Tool room with pre-setup capabilities and screw compressor utilities'
      ],
      industries: ['Manufacturing', 'Heavy Engineering', 'Industrial Machinery']
    },
    {
      icon: '⚙️',
      title: 'Precision Manufacturing & Machining',
      description: 'Export-quality precision machining services for complex components across Defense, Aerospace, Energy, and Industrial sectors.',
      capabilities: [
        'CNC Gantry Milling (15m X-axis, 4m Y-axis, 1m Z-axis, SIEMENS 840)',
        'CNC VTL operations (3m-5m chuck diameter, 4-4.5m height, SIEMENS 828/802D)',
        'CNC Floor Boring (10m x 3.5m table, SIEMENS 840D controller)',
        'Injection molding machine parts (Mould Platen, Crosshead, Thrust Housing)',
        'Turbine components for steam and hydro power applications',
        'Aerospace components (BrahMos missiles, satellite parts, K9 Vajra Tank)'
      ],
      industries: ['Defense', 'Aerospace', 'Energy', 'Turbine Manufacturing']
    },
    {
      icon: '✓',
      title: 'Quality Assurance & Inspection',
      description: 'Comprehensive quality management systems compliant with international standards including AS9100-D for aerospace and defense applications.',
      capabilities: [
        'First Article Inspection (FAI) per AS9100-D',
        'CMM inspection and dimensional verification',
        'In-process quality control',
        'ISO compliance and documentation',
        'Rejection analysis and corrective action'
      ],
      industries: ['Aerospace', 'Defense', 'Precision Engineering']
    },
    {
      icon: '📊',
      title: 'Process Optimization & Consulting',
      description: 'Manufacturing process improvement through Kaizen methodology, 5S implementation, and workflow optimization for enhanced productivity.',
      capabilities: [
        '5S implementation and sustainment',
        'Kaizen for continuous improvement',
        'Cycle time and lead time reduction',
        'Cost-optimized workflow development',
        'Capacity utilization enhancement'
      ],
      industries: ['Manufacturing', 'Production Facilities', 'Industrial Plants']
    },
    {
      icon: '🔧',
      title: 'CNC Programming & Tooling',
      description: 'Expert CNC programming and custom tooling development for SIEMENS and FANUC controllers across various machine types.',
      capabilities: [
        'SIEMENS (840D-SL, 828-SL, 802D-SL) programming and optimization',
        'FANUC controller programming for machining centers and turning',
        'Custom jig and fixture design for CNC setups',
        'Tool pre-setup stations for reduced cycle time',
        'Valve mounting block manufacturing expertise',
        'Heat treatment process setup (Nitriding & Hard Completing)'
      ],
      industries: ['Machine Shops', 'Job Work', 'OEM Manufacturing']
    },
    {
      icon: '👥',
      title: 'Training & Technical Support',
      description: 'Comprehensive technical training programs for machine operators, supervisors, and maintenance teams on advanced CNC operations and quality systems.',
      capabilities: [
        'CNC machine operation training',
        'Quality system implementation',
        'Maintenance team guidance (mechanical & PLC)',
        'Engineering drawing interpretation',
        'Process documentation and SOPs'
      ],
      industries: ['All Manufacturing Sectors']
    },
    {
      icon: '🤝',
      title: 'Vendor Development & Management',
      description: 'Strategic vendor development for specialized processes and comprehensive supply chain management for manufacturing operations.',
      capabilities: [
        'Special process vendor identification',
        'Vendor quality management',
        'Procurement strategy development',
        'Supply chain optimization',
        'Cost negotiation and management'
      ],
      industries: ['Manufacturing', 'Production', 'Engineering Projects']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Breakdown Support',
      description: 'Preventive and predictive maintenance planning, along with expert troubleshooting for mechanical and PLC-based breakdowns.',
      capabilities: [
        'Preventive maintenance scheduling',
        'Predictive maintenance implementation',
        'Mechanical breakdown troubleshooting',
        'PLC and software issue resolution',
        'Equipment reliability improvement'
      ],
      industries: ['CNC Machine Shops', 'Production Facilities']
    }
  ];

  const industryExperience = [
    {
      sector: 'Aerospace & Defense',
      clients: ['Godrej Aerospace', 'L&T Defense', 'ISRO', 'Honeywell Aerospace'],
      projects: 'BrahMos missile components, K9 Vajra Tank parts, Satellite components, Gun Lock Assembly'
    },
    {
      sector: 'Energy & Turbines',
      clients: ['Siemens Baroda', 'L&T MHI', 'ABB', 'Andritz'],
      projects: 'Steam turbine components, Hydro turbine parts, Generator components, Power plant equipment'
    },
    {
      sector: 'Industrial Manufacturing',
      clients: ['Haitian Huayuan', 'Windsor Machine', 'Clyde Bergmann'],
      projects: 'Injection molding machines, Extrusion machines, Shoot blower assemblies'
    },
    {
      sector: 'International Exports',
      clients: ['SEPCO (USA)', 'RIX Industries (USA)', 'AMETECH'],
      projects: 'Gas compressor components, Hydraulic sealing equipment, Precision spare parts'
    }
  ];

  const certifications = [
    {
      standard: 'AS9100-D',
      description: 'Aerospace Quality Management System'
    },
    {
      standard: 'ISO 9001',
      description: 'Quality Management Systems'
    },
    {
      standard: '5S & Kaizen',
      description: 'Continuous Improvement Methodologies'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-header">
        <div className="container">
          <div className="services-header__content">
            <h1 className="services-header__title">Engineering Services</h1>
            <p className="services-header__description">
              Comprehensive manufacturing and engineering solutions backed by 26+ years of expertise
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Excellence in Engineering & Manufacturing</h2>
            <p>
              JES Engineering provides world-class manufacturing and engineering services across Defense, Aerospace,
              Energy, and Industrial sectors. With 26+ years of hands-on experience managing complex projects for
              industry leaders like ISRO, Siemens, L&T, ABB, and Godrej Aerospace, we deliver precision solutions
              from machine shop setup to export-quality component manufacturing. Our AS9100-D certified processes
              ensure compliance with the highest international standards for aerospace and defense applications.
            </p>
            <div className="intro-stats">
              <div className="stat">
                <h3>26+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>4</h3>
                <p>Major Industrial Sectors</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Quality Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-description">
              Specialized engineering solutions tailored to your manufacturing requirements
            </p>
          </div>

          <div className="services-grid">
            {engineeringServices.map((service, index) => (
              <Card key={index} variant="elevated" padding="xl" className="service-detail-card">
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <h3 className="service-detail-title">{service.title}</h3>
                </div>
                <p className="service-detail-description">{service.description}</p>

                <div className="service-capabilities">
                  <h4>Capabilities:</h4>
                  <ul>
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx}>
                        <span className="bullet">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-industries">
                  <h4>Industries Served:</h4>
                  <div className="industry-tags">
                    {service.industries.map((industry, idx) => (
                      <span key={idx} className="industry-tag">{industry}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="industry-experience section-lg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industry Experience</h2>
            <p className="section-description">
              Proven track record across critical industrial sectors
            </p>
          </div>

          <div className="experience-grid">
            {industryExperience.map((exp, index) => (
              <Card key={index} variant="outlined" padding="xl" className="experience-card">
                <h3 className="experience-sector">{exp.sector}</h3>
                <div className="experience-details">
                  <div className="detail-block">
                    <h4>Key Clients:</h4>
                    <p>{exp.clients.join(', ')}</p>
                  </div>
                  <div className="detail-block">
                    <h4>Project Examples:</h4>
                    <p>{exp.projects}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="quality-standards section">
        <div className="container">
          <div className="standards-content">
            <div className="standards-text">
              <h2>Quality Standards & Certifications</h2>
              <p>
                Our manufacturing processes adhere to the highest international quality standards,
                ensuring compliance and excellence in every project we undertake.
              </p>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div className="cert-badge">{cert.standard}</div>
                    <p>{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="standards-features">
              <Card variant="elevated" padding="xl">
                <h3>Our Quality Promise</h3>
                <ul className="quality-list">
                  <li>First Article Inspection (FAI) compliance</li>
                  <li>Complete documentation and traceability</li>
                  <li>In-process quality monitoring</li>
                  <li>CMM verification for critical dimensions</li>
                  <li>Export-quality standards</li>
                  <li>Continuous improvement culture</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's discuss how our engineering services can help you achieve your manufacturing goals.
                Contact us today for a consultation.
              </p>
              <div className="cta-buttons">
                <Button variant="primary" size="lg">Request Consultation</Button>
                <Button variant="secondary" size="lg">Download Capabilities Brochure</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
