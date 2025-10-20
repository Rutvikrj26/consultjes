import React from 'react';

const Thanks = () => {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
        <h1>Thank you! 🎉</h1>
        <p style={{ marginTop: '1rem' }}>
          We’ve received your request and will get back to you shortly.
          If your inquiry is urgent, feel free to call us at{' '}
          <a href="tel:16478663371">647-866-3371</a>.
        </p>
      </div>
    </section>
  );
};

export default Thanks;
