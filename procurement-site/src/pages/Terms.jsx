import React from 'react';
import Card from '../components/Card';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <section className="terms-header">
        <div className="container">
          <div className="terms-header__content">
            <h1 className="terms-header__title">Terms of Service</h1>
            <p className="terms-header__description">
              Last updated: October 20, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="terms-content section">
        <div className="container">
          <Card variant="elevated" padding="xl" className="terms-card">
            <div className="terms-text">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using the JES Engineering website and services, you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to these terms,
                please do not use our services.
              </p>

              <h2>Services Description</h2>
              <p>
                JES Engineering provides industrial procurement, engineering services, machine shop setup,
                precision manufacturing, and consulting services. All services are subject to availability
                and specific agreements between JES Engineering and the client.
              </p>

              <h2>Quotations and Pricing</h2>
              <p>
                All quotations provided are estimates and subject to change based on final specifications,
                material costs, and project scope. Quotations are valid for 30 days unless otherwise stated.
                Final pricing will be confirmed in writing before work commences.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of
                JES Engineering and protected by copyright laws. Technical drawings, specifications, and
                proprietary manufacturing processes remain the intellectual property of their respective owners.
              </p>

              <h2>Confidentiality</h2>
              <p>
                We maintain strict confidentiality of all client technical information, specifications, and
                project details. Client information will not be disclosed to third parties without written
                consent, except as required by law.
              </p>

              <h2>Quality and Warranties</h2>
              <p>
                We warrant that all work will be performed in a professional manner in accordance with
                applicable quality standards (AS9100-D, ISO 9001:2015). Specific warranties for manufactured
                components will be detailed in individual project agreements.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                JES Engineering shall not be liable for indirect, incidental, special, or consequential
                damages arising from the use of our services or products. Our liability is limited to the
                amount paid for the specific service or product in question.
              </p>

              <h2>Payment Terms</h2>
              <p>
                Payment terms will be specified in individual project agreements. Standard terms are Net 30
                days from invoice date. Late payments may incur interest charges as permitted by law.
              </p>

              <h2>Termination</h2>
              <p>
                Either party may terminate services with written notice as specified in project agreements.
                Client remains responsible for payment of services rendered prior to termination.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Ontario, Canada.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of Ontario.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after
                changes constitutes acceptance of the new terms.
              </p>

              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p>
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

export default Terms;