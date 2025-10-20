import React from 'react';
import Card from '../components/Card';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-header">
        <div className="container">
          <div className="privacy-header__content">
            <h1 className="privacy-header__title">Privacy Policy</h1>
            <p className="privacy-header__description">
              Last updated: October 20, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-content section">
        <div className="container">
          <Card variant="elevated" padding="xl" className="privacy-card">
            <div className="privacy-text">
              <h2>Introduction</h2>
              <p>
                JES Engineering ("we," "our," or "us") respects your privacy and is committed to protecting
                your personal data. This privacy policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Name and company details</li>
                <li>Email address and phone number</li>
                <li>Project requirements and technical specifications</li>
                <li>Location and business information</li>
              </ul>

              <h3>Usage Data</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device and operating system information</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide quotes</li>
                <li>To improve our website and services</li>
                <li>To send relevant product and service information (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To analyze website usage and optimize user experience</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services (such as analytics providers and hosting services) that may
                collect information about your use of our website. These third parties have their own privacy
                policies governing the use of such information.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can control cookie preferences
                through your browser settings.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please
                contact us at:
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

export default Privacy;