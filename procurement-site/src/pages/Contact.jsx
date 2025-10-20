import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <div className="contact-header__content">
            <h1 className="contact-header__title">Contact Us</h1>
            <p className="contact-header__description">
              We’d love to hear about your project and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Whether you need products, services, or a complete turnkey solution, our team will
                help you specify, source, and implement with precision. Share a few details below and
                we’ll follow up quickly with next steps.
              </p>
              <p>
                We support projects across Defense, Aerospace, Energy, and Industrial Manufacturing.
                From component selection and procurement to installation, commissioning, and quality
                documentation—we provide end‑to‑end support and long-term reliability.
              </p>

              <ul className="contact-highlights">
                <li>Procurement and sourcing from vetted global suppliers</li>
                <li>Installation and commissioning support</li>
                <li>Technical consulting and project management</li>
                <li>Quality assurance and documentation</li>
              </ul>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item__icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@consultjes.ca">info@consultjes.ca</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item__icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:16478663371">647-866-3371</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item__icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <Card variant="elevated" padding="xl" className="contact-form-card">
              <h3>Request a Quote</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                encType="multipart/form-data"
                action="/thanks"
                className="contact-form"
              >
                {/* Netlify form name hidden field */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field */}
                <input type="hidden" name="bot-field" />

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" className="form-input" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="e.g. +1 647 866 3371" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" id="website" name="website" className="form-input" placeholder="https://" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" className="form-input" placeholder="City, Country" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline</label>
                    <select id="timeline" name="timeline" className="form-input">
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (0-2 weeks)</option>
                      <option value="short">Short-term (1-3 months)</option>
                      <option value="medium">Medium-term (3-6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" className="form-input">
                      <option value="">Select budget</option>
                      <option value="lt10k">Under $10,000</option>
                      <option value="10-50k">$10,000 – $50,000</option>
                      <option value="50-250k">$50,000 – $250,000</option>
                      <option value="gt250k">$250,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" className="form-input" rows="5" placeholder="Briefly describe your application, environment, specifications, and any standards or certifications."></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="file">Attach Specs / RFQ (optional)</label>
                  <input type="file" id="file" name="file" className="form-input" />
                </div>

                <div className="form-grid form-grid--thirds">
                  <div className="form-group">
                    <label htmlFor="preferred_contact">Preferred Contact</label>
                    <select id="preferred_contact" name="preferred_contact" className="form-input">
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="best_time">Best Time to Reach</label>
                    <select id="best_time" name="best_time" className="form-input">
                      <option value="">Anytime</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>

                <div className="form-group form-group--checkbox">
                  <label>
                    <input type="checkbox" name="consent" value="yes" /> I agree to be contacted about my request
                  </label>
                </div>

                {/* Optional Netlify reCAPTCHA (enable in Netlify site settings) */}
                <div data-netlify-recaptcha="true" className="form-recaptcha" />

                <Button variant="primary" size="lg" fullWidth type="submit">
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

export default Contact;
