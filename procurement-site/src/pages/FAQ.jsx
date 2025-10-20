import React, { useState } from 'react';
import Card from '../components/Card';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What industries does JES Engineering serve?',
          a: 'We serve Aerospace & Defense, Energy & Power, Industrial Manufacturing, and various export markets. As a precision engineering and manufacturing company, our expertise spans CNC machining for aerospace and defense components, machine shop setup, quality assurance, and industrial procurement services.'
        },
        {
          q: 'Where is JES Engineering located?',
          a: 'We are based in Toronto, Ontario, Canada, with the ability to serve clients globally through our network of partners and suppliers.'
        },
        {
          q: 'What certifications do you hold?',
          a: 'We are certified to AS9100-D (Aerospace Quality Management) and ISO 9001:2015 (Quality Management Systems). We also implement 5S and Kaizen continuous improvement methodologies.'
        }
      ]
    },
    {
      category: 'Services & Capabilities',
      questions: [
        {
          q: 'What types of machining services do you offer?',
          a: 'We provide CNC Gantry Milling, CNC VTL operations, CNC Floor Boring, precision turning, and specialized machining for aerospace, defense, and industrial components. We work with SIEMENS and FANUC controllers.'
        },
        {
          q: 'Can you handle machine shop setup projects?',
          a: 'Yes, we specialize in complete machine shop setup including heavy-duty HMC/VMC installation, CMM setup, tooling configuration, and workflow optimization from casting to final inspection.'
        },
        {
          q: 'Do you provide quality inspection services?',
          a: 'Absolutely. We offer First Article Inspection (FAI) per AS9100-D, CMM verification, in-process quality control, and complete documentation with full traceability.'
        }
      ]
    },
    {
      category: 'Procurement & Products',
      questions: [
        {
          q: 'What products can you source?',
          a: 'We procure industrial cooling systems (chillers), hydraulic systems, linear motion components, precision bearings, motors, pumps, valves, and specialized industrial equipment from vetted global suppliers.'
        },
        {
          q: 'How long does procurement typically take?',
          a: 'Lead times vary based on product type and supplier. Standard items may take 4-8 weeks, while specialized or custom components can take 8-16 weeks. We provide detailed timelines with each quotation.'
        },
        {
          q: 'Do you handle installation and commissioning?',
          a: 'Yes, we provide complete installation, commissioning, and training services for all equipment we supply. This includes setup, testing, operator training, and post-installation support.'
        }
      ]
    },
    {
      category: 'Quotes & Orders',
      questions: [
        {
          q: 'How do I request a quote?',
          a: 'Use our Contact form to submit your requirements, including specifications, quantities, timeline, and any relevant drawings or documentation. Our team will respond within 24-48 hours with a detailed quotation.'
        },
        {
          q: 'What information do you need for an accurate quote?',
          a: 'Please provide: technical drawings or specifications, material requirements, quantity, quality standards (if applicable), timeline, and delivery location. The more detail you provide, the more accurate our quote will be.'
        },
        {
          q: 'What are your payment terms?',
          a: 'Standard payment terms are Net 30 days. For large projects, we can arrange milestone-based payments. Specific terms will be outlined in project agreements.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <section className="faq-header">
        <div className="container">
          <div className="faq-header__content">
            <h1 className="faq-header__title">Frequently Asked Questions</h1>
            <p className="faq-header__description">
              Find answers to common questions about our services and capabilities
            </p>
          </div>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-categories">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="faq-list">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    const isOpen = openIndex === globalIndex;
                    return (
                      <Card key={qIndex} variant="outlined" padding="none" className="faq-item">
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta section">
        <div className="container">
          <Card variant="gradient" padding="xl" className="cta-card">
            <div className="cta-content">
              <h2>Still Have Questions?</h2>
              <p>
                Can't find what you're looking for? Contact our team directly and we'll be happy to help.
              </p>
              <p className="contact-info">
                <strong>Email:</strong> info@consultjes.ca<br />
                <strong>Phone:</strong> 647-866-3371
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;