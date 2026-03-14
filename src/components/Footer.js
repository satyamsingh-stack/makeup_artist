import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Anjali Bhasker Makeovers</h3>
          <p>International Makeup Artist specializing in destination weddings, celebrity makeovers, and special events.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/anjalibhaskermakeovers?igsh=bDIwYnR1dGZ2b3ox" target="_blank" rel="noopener noreferrer" className="social-link">
              📷 Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              📘 Facebook
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              ▶️ YouTube
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>📧 contact@anjalibhaskermakeovers.com</p>
            <p>📱 +66 123 456 789</p>
            <p>📍 Bangkok, Thailand</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Bridal Makeup</a></li>
            <li><a href="#services">Destination Weddings</a></li>
            <li><a href="#services">Celebrity Makeovers</a></li>
            <li><a href="#services">Corporate Events</a></li>
            <li><a href="#services">Party Makeup</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Anjali Bhasker Makeovers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
