import React from 'react';

function Contact() {
  return (
    <section className="contact fade-in-element">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">Ready to look your best? Get in touch with us today!</p>
      <div className="contact-info">
        <div className="contact-card">
          <span className="contact-icon">✉️</span>
          <a href="mailto:contact@anjalibhaskermakeovers.com">contact@anjalibhaskermakeovers.com</a>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📱</span>
          <a href="tel:+66123456789">+66 123 456 789</a>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <span>Based in Thailand | Available Worldwide</span>
        </div>
      </div>
      <div className="social-links">
        <a 
          href="https://www.instagram.com/anjalibhaskermakeovers?igsh=bDIwYnR1dGZ2b3ox" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
